// 8-bit Nintendo-style Graphics Engine
class PixelGraphics {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
    }

    clear(color = '#000000') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Draw pixel-perfect rectangle
    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    // Draw 8-bit style monkey
    drawMonkey(x, y, scale = 1) {
        const s = 4 * scale; // pixel size
        
        // Brown fur
        this.drawRect(x + s*3, y + s*1, s*4, s*4, '#8B4513');
        this.drawRect(x + s*2, y + s*2, s*6, s*6, '#8B4513');
        this.drawRect(x + s*1, y + s*3, s*8, s*4, '#8B4513');
        
        // Ears
        this.drawRect(x + s*1, y + s*1, s*2, s*2, '#654321');
        this.drawRect(x + s*7, y + s*1, s*2, s*2, '#654321');
        
        // Face (lighter brown)
        this.drawRect(x + s*3, y + s*3, s*4, s*3, '#D2691E');
        
        // Eyes
        this.drawRect(x + s*3, y + s*3, s*1, s*1, '#000000');
        this.drawRect(x + s*6, y + s*3, s*1, s*1, '#000000');
        
        // Eye whites
        this.drawRect(x + s*3.5, y + s*3, s*0.5, s*0.5, '#FFFFFF');
        this.drawRect(x + s*6.5, y + s*3, s*0.5, s*0.5, '#FFFFFF');
        
        // Nose
        this.drawRect(x + s*4.5, y + s*4, s*1, s*1, '#654321');
        
        // Mouth
        this.drawRect(x + s*3.5, y + s*5, s*3, s*0.5, '#654321');
        
        // Body
        this.drawRect(x + s*2, y + s*8, s*6, s*6, '#8B4513');
        
        // Belly
        this.drawRect(x + s*3, y + s*9, s*4, s*4, '#D2691E');
        
        // Arms
        this.drawRect(x + s*1, y + s*9, s*1, s*4, '#8B4513');
        this.drawRect(x + s*8, y + s*9, s*1, s*4, '#8B4513');
        
        // Legs
        this.drawRect(x + s*3, y + s*14, s*1.5, s*3, '#8B4513');
        this.drawRect(x + s*5.5, y + s*14, s*1.5, s*3, '#8B4513');
        
        // Tail
        this.drawRect(x + s*8, y + s*10, s*2, s*1, '#8B4513');
        this.drawRect(x + s*10, y + s*9, s*1, s*2, '#8B4513');
    }

    // Draw 8-bit style alien
    drawAlien(x, y, scale = 1) {
        const s = 4 * scale;
        
        // Green alien head
        this.drawRect(x + s*2, y + s*2, s*6, s*6, '#00FF00');
        this.drawRect(x + s*1, y + s*3, s*8, s*4, '#00FF00');
        
        // Antenna
        this.drawRect(x + s*4, y + s*0, s*0.5, s*2, '#00AA00');
        this.drawRect(x + s*5.5, y + s*0, s*0.5, s*2, '#00AA00');
        this.drawRect(x + s*3.5, y + s*0, s*1, s*1, '#00FF00');
        this.drawRect(x + s*5, y + s*0, s*1, s*1, '#00FF00');
        
        // Large black eyes
        this.drawRect(x + s*2.5, y + s*3, s*2, s*3, '#000000');
        this.drawRect(x + s*5.5, y + s*3, s*2, s*3, '#000000');
        
        // Eye shine
        this.drawRect(x + s*3, y + s*3.5, s*0.8, s*0.8, '#FFFFFF');
        this.drawRect(x + s*6, y + s*3.5, s*0.8, s*0.8, '#FFFFFF');
        
        // Body
        this.drawRect(x + s*2, y + s*8, s*6, s*5, '#00CC00');
        
        // Belt/Equipment
        this.drawRect(x + s*2, y + s*10, s*6, s*1, '#FF0000');
        
        // Arms
        this.drawRect(x + s*0.5, y + s*9, s*1.5, s*4, '#00CC00');
        this.drawRect(x + s*8, y + s*9, s*1.5, s*4, '#00CC00');
        
        // Legs
        this.drawRect(x + s*2.5, y + s*13, s*2, s*4, '#00AA00');
        this.drawRect(x + s*5.5, y + s*13, s*2, s*4, '#00AA00');
        
        // Feet
        this.drawRect(x + s*2, y + s*17, s*2.5, s*1, '#008800');
        this.drawRect(x + s*5.5, y + s*17, s*2.5, s*1, '#008800');
    }

    // Draw spaceship
    drawSpaceship(x, y, scale = 1) {
        const s = 4 * scale;
        
        // Dome
        this.drawRect(x + s*3, y + s*2, s*4, s*2, '#00FFFF');
        this.drawRect(x + s*2, y + s*3, s*6, s*2, '#00FFFF');
        
        // Shine on dome
        this.drawRect(x + s*4, y + s*2.5, s*1.5, s*1, '#FFFFFF');
        
        // Body
        this.drawRect(x + s*1, y + s*5, s*8, s*4, '#CCCCCC');
        
        // Windows
        this.drawRect(x + s*2, y + s*6, s*1.5, s*1.5, '#000088');
        this.drawRect(x + s*4, y + s*6, s*1.5, s*1.5, '#000088');
        this.drawRect(x + s*6, y + s*6, s*1.5, s*1.5, '#000088');
        
        // Bottom
        this.drawRect(x + s*0, y + s*9, s*10, s*2, '#999999');
        
        // Landing gear
        this.drawRect(x + s*1.5, y + s*11, s*1, s*2, '#666666');
        this.drawRect(x + s*7.5, y + s*11, s*1, s*2, '#666666');
        
        // Lights (alternate colors for animation)
        this.drawRect(x + s*0.5, y + s*9.5, s*1, s*1, '#FF0000');
        this.drawRect(x + s*8.5, y + s*9.5, s*1, s*1, '#00FF00');
    }

    // Draw jungle scene
    drawJungle() {
        // Sky
        this.drawRect(0, 0, 512, 200, '#87CEEB');
        
        // Sun
        this.drawRect(400, 30, 40, 40, '#FFFF00');
        
        // Ground
        this.drawRect(0, 300, 512, 84, '#228B22');
        
        // Trees
        for (let i = 0; i < 5; i++) {
            const treeX = i * 110 + 20;
            // Trunk
            this.drawRect(treeX + 15, 220, 20, 80, '#654321');
            // Leaves
            this.drawRect(treeX, 180, 50, 50, '#006400');
            this.drawRect(treeX - 10, 200, 70, 30, '#006400');
        }
    }

    // Draw space scene
    drawSpace() {
        // Dark space
        this.drawRect(0, 0, 512, 384, '#000033');
        
        // Stars
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 384;
            const size = Math.random() > 0.5 ? 2 : 3;
            this.drawRect(x, y, size, size, '#FFFFFF');
        }
        
        // Planet Earth
        this.drawRect(50, 280, 80, 80, '#0066CC');
        this.drawRect(60, 290, 60, 60, '#00AA00');
    }

    // Draw city scene
    drawCity() {
        // Sky
        this.drawRect(0, 0, 512, 300, '#4A90E2');
        
        // Ground
        this.drawRect(0, 300, 512, 84, '#666666');
        
        // Buildings
        const buildings = [
            {x: 30, y: 180, w: 60, h: 120},
            {x: 110, y: 150, w: 50, h: 150},
            {x: 180, y: 200, w: 70, h: 100},
            {x: 270, y: 160, w: 60, h: 140},
            {x: 350, y: 190, w: 55, h: 110},
            {x: 425, y: 170, w: 65, h: 130}
        ];
        
        buildings.forEach(b => {
            this.drawRect(b.x, b.y, b.w, b.h, '#555555');
            // Windows
            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 3; col++) {
                    const wx = b.x + 10 + col * 15;
                    const wy = b.y + 20 + row * 20;
                    const color = Math.random() > 0.3 ? '#FFFF00' : '#666666';
                    this.drawRect(wx, wy, 8, 10, color);
                }
            }
        });
    }

    // Draw banana
    drawBanana(x, y, scale = 1) {
        const s = 4 * scale;
        this.drawRect(x, y + s*2, s*3, s*6, '#FFFF00');
        this.drawRect(x + s*3, y + s*1, s*2, s*2, '#FFFF00');
        this.drawRect(x + s*1, y + s*8, s*2, s*2, '#FFFF00');
        this.drawRect(x, y + s*3, s*1, s*2, '#654321');
    }

    // Draw laser gun
    drawLaserGun(x, y, scale = 1) {
        const s = 4 * scale;
        this.drawRect(x + s*2, y + s*2, s*2, s*2, '#666666');
        this.drawRect(x, y + s*3, s*8, s*3, '#999999');
        this.drawRect(x + s*8, y + s*3.5, s*4, s*2, '#FF0000');
        this.drawRect(x + s*12, y + s*4, s*2, s*1, '#00FFFF');
    }
}
