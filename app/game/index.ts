import Phaser from "phaser";

(async () => {
  if (typeof document === "undefined") return void 0;

  const canvas = document.getElementById("game") as HTMLCanvasElement;

  const game = new Phaser.Game({
    canvas,
    type: Phaser.WEBGL,
    parent: "phaser-example",
    transparent: true,
    scene: {},
  });

  console.log(game);
})();
