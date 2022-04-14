import { useOptionalUser } from "~/utils";

export const handle = { skipHydrate: true };

export default function Index() {
  const _user = useOptionalUser();

  return <main id="game-container" className="relative grid h-full place-items-center overflow-hidden"></main>;
}
