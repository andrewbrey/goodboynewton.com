import { redirect, type ActionFunction, type LoaderFunction } from "@remix-run/server-runtime";
import { logout } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
