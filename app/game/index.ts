import Phaser from "phaser";

(async () => {
  if (typeof document === "undefined") return void 0;

  new Phaser.Game({
    title: "Good Boy Newton",
    type: Phaser.AUTO,
    parent: "game-container",
    scale: { mode: Phaser.Scale.RESIZE },
    canvasStyle: "position: absolute; z-index: 0; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0;",
    backgroundColor: "rgb(251, 191, 36)",
    render: { pixelArt: true },
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
    autoFocus: false,
    scene: [],
  });
})();
