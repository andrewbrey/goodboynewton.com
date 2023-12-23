/**
 * This code has been manually inline'd into the app.html
 * to let the app auto-refresh if it's been open for a while
 * (mainly targeting the "installed to homescreen and left
 * open for a long time in the background") usecase.
 *
 * This depends on browser client APIs, so don't import this
 * file in the vite dep graph :shrug:
 */
const now = Date.now();
const six_hours = 21600000;
localStorage.setItem("fresh", `${now}`);
setTimeout(() => location.reload(), six_hours);
document.addEventListener("visibilitychange", () => {
	if (!document.hidden) {
		const fresh = localStorage.getItem("fresh");
		const age = Date.now() - parseInt(fresh || "0");
		if (age > six_hours) location.reload();
	}
});
