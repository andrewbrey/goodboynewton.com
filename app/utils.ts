import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import { type User } from "~/models/user.server";

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(id: string): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(() => matchingRoutes.find((route) => route.id === id), [matchingRoutes, id]);
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(to: FormDataEntryValue | string | null | undefined, defaultRedirect: string = "/") {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * Custom adaptation of hook found in https://github.com/sergiodxa/remix-utils, but with the
 * logic of the original inverted.
 *
 * @see https://github.com/sergiodxa/remix-utils/blob/34cb0386c2a7a4207dc0455bdba729546f25ca1b/src/react/use-should-hydrate.ts
 *
 * Determine if all of the loaded routes are asking not to load JS and return a
 * boolean.
 *
 * To request JS not to be loaded, the route must export a handle with an object,
 * this object must contain a boolean property named `skipHydrate` or a function
 * named `skipHydrate`, in which case the function will be called with the `data`
 * from the loader of that route so it can be used to dynamically load or not
 * JavaScript.
 * @example
 * // This route needs to load JS
 * export let handle = { skipHydrate: true };
 * @example
 * // This route uses the data to know if it should load JS
 * export let handle = {
 *   skipHydrate(data: RouteData) {
 *     return data.needsJs;
 *   }
 * };
 */
export function useSkipHydrate() {
  const matches = useMatches();
  const skipHydrate = matches
    .filter((m) => m.id !== "root")
    .every((match) => {
      if (!match.handle) return false;

      let { handle, data } = match;

      // handle must be an object to continue
      if (typeof handle !== "object") return false;
      if (handle === null) return false;
      if (Array.isArray(handle)) return false;

      // get skipHydrate from handle (it may not exists)
      let skipHydrate = handle.skipHydrate as undefined | boolean | ((data: unknown) => boolean);

      if (!skipHydrate) return false;

      if (typeof skipHydrate === "function") return skipHydrate(data);
      return skipHydrate;
    });

  return skipHydrate;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}
