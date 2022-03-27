import { setupServer } from "msw/node";
import "~/utils";

const server = setupServer();

server.listen({ onUnhandledRequest: "warn" });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
