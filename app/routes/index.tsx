import { useOptionalUser } from "~/utils";

export default function Index() {
  const _user = useOptionalUser();
  return (
    <main className="grid h-full place-items-center p-4">
      <div className="mb-80">
        <h1 className="font-game text-5xl">Good Boy Newton</h1>
        <p className="text-2xl">Newton is a very good boy</p>
      </div>
    </main>
  );
}
