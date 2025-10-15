// Monkey vs Aliens - Choose Your Own Adventure Game

class AdventureGame {
    constructor() {
        this.graphics = new PixelGraphics('gameCanvas');
        this.currentNode = 'start';
        this.gameState = {
            hasBanana: false,
            hasLaserGun: false,
            alliesCount: 0
        };
        
        this.storyNodes = {
            start: {
                text: "You are Coco, a brave monkey living peacefully in the jungle. One day, strange lights appear in the sky. A massive alien spaceship descends, hovering above the treetops! What do you do?",
                scene: 'jungle',
                choices: [
                    { text: "🍌 Grab a banana and approach cautiously", next: 'approach_with_banana' },
                    { text: "🌳 Hide in the trees and observe", next: 'hide_and_observe' },
                    { text: "💪 Beat your chest and show no fear", next: 'show_strength' }
                ]
            },
            
            approach_with_banana: {
                text: "You grab your favorite banana and carefully approach the spaceship. A small green alien emerges! It looks at your banana with curious, large eyes. The alien seems... hungry?",
                scene: 'jungle_with_alien',
                choices: [
                    { text: "🎁 Offer the banana as a gift", next: 'banana_gift' },
                    { text: "🏃 Run away with your banana", next: 'run_away' },
                    { text: "🍌 Eat the banana to show it's safe", next: 'eat_banana' }
                ]
            },
            
            hide_and_observe: {
                text: "You climb high into the trees, watching carefully. More aliens emerge from the ship. They seem to be collecting samples of plants and fruits. One alien drops a strange glowing device!",
                scene: 'jungle_with_spaceship',
                choices: [
                    { text: "📡 Sneak down and grab the device", next: 'grab_device' },
                    { text: "🗣️ Call out to your monkey friends for backup", next: 'call_friends' },
                    { text: "👀 Continue watching silently", next: 'keep_watching' }
                ]
            },
            
            show_strength: {
                text: "You pound your chest and roar at the spaceship! The aliens seem startled by your display. A beam of light shoots from the ship, but it's not a weapon - it's a communication beam creating holographic images!",
                scene: 'jungle_with_spaceship',
                choices: [
                    { text: "🤝 Try to communicate back", next: 'communicate' },
                    { text: "🎭 Make funny faces in the beam", next: 'funny_faces' },
                    { text: "🏃 This is too weird - retreat!", next: 'retreat' }
                ]
            },
            
            banana_gift: {
                text: "The alien's eyes light up! It takes the banana and offers you a glowing crystal in return. Suddenly you can understand its thoughts: 'Thank you, friend. We come in peace. Our planet has no fruit.' This could be the beginning of a beautiful friendship!",
                scene: 'friendship',
                choices: [
                    { text: "🌍 Offer to show them Earth's fruits", next: 'good_ending_1' },
                    { text: "🤔 Ask why they're really here", next: 'learn_truth' }
                ]
            },
            
            run_away: {
                text: "You sprint through the jungle with your banana! But you trip over a root and tumble down a hill. When you look up, you're face-to-face with THREE aliens! They surround you, but they're... offering you fruits from their home planet?",
                scene: 'surrounded',
                choices: [
                    { text: "🍇 Try their alien fruit", next: 'try_alien_fruit' },
                    { text: "🙈 Play dead", next: 'play_dead' },
                    { text: "🍌 Share your banana with them", next: 'share_banana' }
                ]
            },
            
            eat_banana: {
                text: "You peel and eat the banana, showing it's delicious and safe. The alien gets excited and shows you a hologram of its dying planet - they've lost all their vegetation! They need Earth's help to restore their ecosystem!",
                scene: 'hologram',
                choices: [
                    { text: "🌱 Agree to help save their planet", next: 'good_ending_2' },
                    { text: "🤷 Shrug - not my problem", next: 'neutral_ending' }
                ]
            },
            
            grab_device: {
                text: "You snatch the glowing device! It's some kind of translator. You can now hear the aliens talking: 'The monkeys here are so intelligent! We should recruit them for the Galactic Council!' Wait... this is an opportunity!",
                scene: 'device',
                choices: [
                    { text: "🎤 Use the device to speak to them", next: 'galactic_council' },
                    { text: "🔧 Try to reverse-engineer the device", next: 'tech_monkey' },
                    { text: "🎁 Return the device politely", next: 'honest_monkey' }
                ]
            },
            
            call_friends: {
                text: "Your monkey squad arrives - ten strong friends ready to defend the jungle! But the aliens don't seem hostile. They project images of monkeys helping them across the galaxy. They're recruiting a MONKEY SPACE FORCE!",
                scene: 'monkey_squad',
                choices: [
                    { text: "🚀 Sign up the whole troop!", next: 'space_monkeys' },
                    { text: "📜 Negotiate terms first", next: 'smart_negotiation' },
                    { text: "❌ Politely decline", next: 'stay_earth' }
                ]
            },
            
            keep_watching: {
                text: "You observe patiently. The aliens seem to be... planting trees? They're HELPING the jungle grow! One alien spots you and waves. It wants to show you something amazing in their ship!",
                scene: 'friendly_aliens',
                choices: [
                    { text: "✨ Enter the spaceship", next: 'enter_ship' },
                    { text: "🙋 Wave but stay in tree", next: 'cautious_friend' }
                ]
            },
            
            communicate: {
                text: "You gesture and make sounds at the beam. It translates! The aliens explain they're scientists exploring intelligent life. They're impressed by monkey society and want to establish an embassy!",
                scene: 'communication',
                choices: [
                    { text: "🏛️ Accept the embassy proposal", next: 'embassy_ending' },
                    { text: "🎓 Ask to visit their planet instead", next: 'space_adventure' }
                ]
            },
            
            funny_faces: {
                text: "You make the silliest faces you can! The aliens love it - their species communicates through facial expressions too! They invite you to perform in the Intergalactic Comedy Festival!",
                scene: 'comedy',
                choices: [
                    { text: "🎭 Accept - become galaxy's funniest monkey!", next: 'comedy_ending' },
                    { text: "😊 Politely decline but stay friends", next: 'friendship_ending' }
                ]
            },
            
            retreat: {
                text: "You retreat to safety, but your curiosity gets the better of you. You peek from behind a tree and see the aliens leaving gifts - advanced technology that could help protect the jungle forever!",
                scene: 'gifts',
                choices: [
                    { text: "🎁 Accept the gifts", next: 'tech_guardian' },
                    { text: "🌿 Stick to traditional monkey ways", next: 'traditional_ending' }
                ]
            },
            
            try_alien_fruit: {
                text: "The fruit is AMAZING! Sweet, tangy, and it makes you feel energized! The aliens want to trade - Earth fruits for space fruits. You could become the galaxy's first monkey merchant!",
                scene: 'trade',
                choices: [
                    { text: "💼 Become intergalactic fruit trader", next: 'merchant_ending' },
                    { text: "🤝 Suggest peaceful cultural exchange", next: 'exchange_ending' }
                ]
            },
            
            play_dead: {
                text: "You lie completely still. The aliens scan you with a light and conclude 'This monkey is too silly to be dangerous.' They leave behind a universal translator as they laugh and return to their ship!",
                scene: 'silly',
                choices: [
                    { text: "😂 Jump up and wave goodbye", next: 'silly_ending' }
                ]
            },
            
            share_banana: {
                text: "You split your banana three ways. The aliens are touched by your generosity! They declare you 'Honorary Space Monkey' and gift you coordinates to their fruit paradise planet!",
                scene: 'sharing',
                choices: [
                    { text: "🗺️ Keep the coordinates safe", next: 'good_ending_3' }
                ]
            },
            
            learn_truth: {
                text: "The alien explains: 'Our planet is dying. We seek allies to help restore life across the galaxy. Will you help us spread green life to dead worlds?' This is bigger than you imagined!",
                scene: 'truth',
                choices: [
                    { text: "🌍 Join the cosmic gardening mission", next: 'gardener_ending' },
                    { text: "🏠 Focus on protecting Earth first", next: 'earth_first_ending' }
                ]
            },
            
            // ENDINGS
            good_ending_1: {
                text: "You become Earth's ambassador to the aliens! Together, you establish the first interspecies fruit exchange program. The jungle becomes a tourist destination for peaceful aliens from across the galaxy. You're a HERO! 🌟",
                scene: 'victory',
                isEnding: true
            },
            
            good_ending_2: {
                text: "You lead a mission to the alien planet! Using your knowledge of jungle ecosystems, you help terraform their world. They build a golden statue of a monkey in their capital. You're a LEGEND! 🏆",
                scene: 'space',
                isEnding: true
            },
            
            good_ending_3: {
                text: "With the coordinates, you eventually visit the alien fruit paradise. It's incredible! You bring back seeds that transform Earth's agriculture. You've changed the world! 🌈",
                scene: 'victory',
                isEnding: true
            },
            
            neutral_ending: {
                text: "You go back to your normal monkey life. Sometimes you see their ship in the sky. You wonder what could have been... but hey, at least you still have bananas! 🍌",
                scene: 'jungle',
                isEnding: true
            },
            
            galactic_council: {
                text: "You address the Galactic Council representing all of monkey-kind! They're so impressed, they grant Earth protected status. You become the voice of your species across the stars! 🎖️",
                scene: 'space',
                isEnding: true
            },
            
            tech_monkey: {
                text: "You successfully reverse-engineer the alien tech! You become Earth's greatest inventor, creating technology that benefits all species. The aliens return and offer you a job in their R&D department! 🔬",
                scene: 'city',
                isEnding: true
            },
            
            honest_monkey: {
                text: "The aliens are moved by your honesty! They make you their official Earth liaison. You get a cool uniform and your own small spaceship. Not bad for a monkey! 🚀",
                scene: 'victory',
                isEnding: true
            },
            
            space_monkeys: {
                text: "Your monkey troop joins the Galactic Defense Force! You adventure across the cosmos, protecting peaceful worlds. Songs are sung about the brave Space Monkeys! 🌌",
                scene: 'space',
                isEnding: true
            },
            
            smart_negotiation: {
                text: "You negotiate great terms - technology, education, and banana plantations on three planets! You become history's greatest monkey diplomat! 📜",
                scene: 'victory',
                isEnding: true
            },
            
            stay_earth: {
                text: "You choose to stay and protect your jungle home. The aliens respect your decision and leave you advanced security systems. The jungle has never been safer! 🌳",
                scene: 'jungle',
                isEnding: true
            },
            
            enter_ship: {
                text: "Inside the ship is AMAZING! The aliens show you the wonders of the universe. You become the first monkey astronaut, exploring strange new worlds! 🛸",
                scene: 'space',
                isEnding: true
            },
            
            cautious_friend: {
                text: "You become pen pals (well, hologram pals) with the aliens! They visit annually to share knowledge. Your cautious wisdom leads to a perfect long-term partnership! 💌",
                scene: 'friendship',
                isEnding: true
            },
            
            embassy_ending: {
                text: "The jungle becomes home to the first Earth-Alien embassy! You're the ambassador, living in a cool treehouse-spaceship hybrid. Peace has never been so fun! 🏛️",
                scene: 'city',
                isEnding: true
            },
            
            space_adventure: {
                text: "You travel to their planet - it's INCREDIBLE! Crystal cities, flying vehicles, and the most amazing fruits! You decide to stay and become their cultural exchange student! 🎓",
                scene: 'space',
                isEnding: true
            },
            
            comedy_ending: {
                text: "You tour the galaxy making aliens laugh! You're the universe's most famous comedian. Your banana peel routine is legendary across 47 planets! 🎭",
                scene: 'victory',
                isEnding: true
            },
            
            friendship_ending: {
                text: "You maintain a wonderful friendship with the aliens. They visit for holidays, you share stories, and the universe is just a little bit brighter! 🌟",
                scene: 'friendship',
                isEnding: true
            },
            
            tech_guardian: {
                text: "Using the alien technology, you become the jungle's high-tech guardian! Poachers and deforestation are no match for your advanced defense systems! 🛡️",
                scene: 'jungle',
                isEnding: true
            },
            
            traditional_ending: {
                text: "You stick to the old ways. Sometimes the best path is the simple one. You live peacefully, knowing you stayed true to yourself! 🍃",
                scene: 'jungle',
                isEnding: true
            },
            
            merchant_ending: {
                text: "You become the galaxy's premier fruit merchant! Your business spans 20 star systems. You're rich in both friends and bananas! 💰",
                scene: 'space',
                isEnding: true
            },
            
            exchange_ending: {
                text: "You establish a beautiful cultural exchange program. Monkeys and aliens learn from each other, creating a brighter future for both species! 🌍",
                scene: 'friendship',
                isEnding: true
            },
            
            silly_ending: {
                text: "Your silly nature becomes legendary! The aliens tell stories about the funny monkey who played dead. They send comedians to study under you! 😂",
                scene: 'jungle',
                isEnding: true
            },
            
            gardener_ending: {
                text: "You lead the Cosmic Gardening Corps! Planet by planet, you spread green life across dead worlds. You're the Johnny Appleseed of space! 🌱",
                scene: 'space',
                isEnding: true
            },
            
            earth_first_ending: {
                text: "You focus on protecting Earth's ecosystems. With alien knowledge, you heal the planet's wounds. Earth becomes a model for environmental restoration! 🌎",
                scene: 'jungle',
                isEnding: true
            }
        };
        
        this.init();
    }

    init() {
        this.displayNode(this.currentNode);
    }

    displayNode(nodeId) {
        const node = this.storyNodes[nodeId];
        const storyText = document.getElementById('storyText');
        const choicesBox = document.getElementById('choicesBox');
        
        // Display text with animation
        storyText.textContent = node.text;
        
        // Draw scene
        this.drawScene(node.scene);
        
        // Clear and create choice buttons
        choicesBox.innerHTML = '';
        
        if (node.isEnding) {
            const restartBtn = document.createElement('button');
            restartBtn.className = 'choice-button';
            restartBtn.textContent = '🔄 Play Again';
            restartBtn.onclick = () => this.restart();
            choicesBox.appendChild(restartBtn);
        } else {
            node.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-button';
                btn.textContent = choice.text;
                btn.onclick = () => this.makeChoice(choice.next);
                choicesBox.appendChild(btn);
            });
        }
    }

    drawScene(sceneName) {
        this.graphics.clear();
        
        switch(sceneName) {
            case 'jungle':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(220, 180, 2);
                break;
                
            case 'jungle_with_alien':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(150, 180, 2);
                this.graphics.drawAlien(320, 180, 1.8);
                this.graphics.drawBanana(210, 200, 1.5);
                break;
                
            case 'jungle_with_spaceship':
                this.graphics.drawJungle();
                this.graphics.drawSpaceship(180, 80, 2);
                this.graphics.drawMonkey(80, 200, 1.8);
                break;
                
            case 'friendship':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(180, 180, 2);
                this.graphics.drawAlien(300, 180, 2);
                // Draw heart between them
                this.graphics.drawRect(250, 200, 12, 12, '#FF69B4');
                break;
                
            case 'surrounded':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(220, 200, 1.8);
                this.graphics.drawAlien(120, 190, 1.5);
                this.graphics.drawAlien(350, 190, 1.5);
                this.graphics.drawAlien(220, 120, 1.5);
                break;
                
            case 'space':
                this.graphics.drawSpace();
                this.graphics.drawSpaceship(200, 150, 2);
                this.graphics.drawMonkey(220, 220, 1.8);
                break;
                
            case 'victory':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(220, 180, 2.5);
                // Victory stars
                for (let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const x = 256 + Math.cos(angle) * 100;
                    const y = 200 + Math.sin(angle) * 80;
                    this.graphics.drawRect(x, y, 8, 8, '#FFD700');
                }
                break;
                
            case 'city':
                this.graphics.drawCity();
                this.graphics.drawMonkey(220, 200, 2);
                this.graphics.drawSpaceship(320, 100, 1.5);
                break;
                
            case 'hologram':
            case 'device':
            case 'communication':
            case 'truth':
                this.graphics.drawJungle();
                this.graphics.drawMonkey(100, 200, 1.8);
                this.graphics.drawAlien(350, 200, 1.8);
                // Glowing effect
                this.graphics.drawRect(200, 150, 100, 100, 'rgba(0, 255, 255, 0.3)');
                break;
                
            case 'monkey_squad':
                this.graphics.drawJungle();
                for (let i = 0; i < 5; i++) {
                    this.graphics.drawMonkey(50 + i * 90, 200, 1.5);
                }
                this.graphics.drawSpaceship(180, 50, 1.8);
                break;
                
            default:
                this.graphics.drawJungle();
                this.graphics.drawMonkey(220, 180, 2);
        }
    }

    makeChoice(nextNode) {
        this.currentNode = nextNode;
        this.displayNode(nextNode);
    }

    restart() {
        this.currentNode = 'start';
        this.gameState = {
            hasBanana: false,
            hasLaserGun: false,
            alliesCount: 0
        };
        this.displayNode(this.currentNode);
    }
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', () => {
    new AdventureGame();
});
