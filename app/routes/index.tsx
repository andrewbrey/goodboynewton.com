import { useOptionalUser } from "~/utils";

export const handle = { skipHydrate: true };

export default function Index() {
  const _user = useOptionalUser();

  return (
    <main id="game-container" className="relative grid h-full place-items-center overflow-hidden">
      <div className="absolute z-10">
        <h1 className="font-game text-5xl">Good Boy Newton</h1>
        <p className="text-2xl">Newton is a very good boy</p>
      </div>
    </main>
  );
}
