import kaboom from "kaboom";

(async () => {
  if (typeof document === "undefined") return void 0;

  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const container = document.getElementById("game-container") as HTMLDivElement;
  const boundingRect = container.getBoundingClientRect();

  kaboom({
    canvas,
    global: false,
    width: boundingRect.width,
    height: boundingRect.height,
    stretch: false,
  });
})();
