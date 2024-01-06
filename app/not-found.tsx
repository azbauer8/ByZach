import Link from "next/link";

export default function Page() {
  return (
    <main className="content flex flex-1 flex-col items-center justify-center py-8 text-center">
      <h1 className="mb-3 text-3xl font-extrabold text-zinc-800 dark:text-zinc-100 sm:mb-4 sm:text-4xl">
        Zoinks!
      </h1>
      <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
        {`Looks like you've stumbled upon a mystery! Like, sorry pal, this page
        seems to have totally vanished into thin air.`}
      </p>
      <Link
        className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
        href="/"
      >
        {`Let's get you back on track`}
      </Link>
    </main>
  );
}
