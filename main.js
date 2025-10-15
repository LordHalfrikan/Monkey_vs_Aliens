(function(){
  "use strict";

  const GAME_WIDTH = 160;  // Game Boy style resolution
  const GAME_HEIGHT = 144;

  const canvas = document.getElementById("screen");
  const ctx = canvas.getContext("2d", { alpha: false });

  function applyIntegerScale() {
    const wrap = canvas.parentElement;
    const max = wrap.clientWidth;
    const scale = Math.max(1, Math.floor(max / GAME_WIDTH));
    canvas.style.width = (GAME_WIDTH * scale) + "px";
  }
  window.addEventListener("resize", applyIntegerScale);
  applyIntegerScale();

  // Temporary splash while engine loads
  const palette = ["#0f380f", "#306230", "#8bac0f", "#9bbc0f"]; // darkest -> lightest
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = palette[3];
  ctx.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  ctx.fillStyle = palette[0];
  ctx.fillRect(0,0,GAME_WIDTH,20);
  ctx.fillStyle = palette[2];
  ctx.fillText("Loading...", 8, 14);
})();
