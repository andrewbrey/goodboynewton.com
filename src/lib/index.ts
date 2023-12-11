/**
 * Enforce that a condition is true, and narrow types based on the assertion
 *
 */
export function invariant(condition: unknown, message?: string): asserts condition {
	if (condition) return;

	const prefix = "Invariant failed";
	const value: string = message ? `${prefix}: ${message}` : prefix;
	throw new Error(value);
}
