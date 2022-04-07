import kaboom from "kaboom";

(async () => {
  if (typeof document === "undefined") return void 0;

  kaboom({ canvas: document.getElementById("game") as HTMLCanvasElement });
})();
