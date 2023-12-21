import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <section>
        <h1 className="text-5xl">Search for an Event Below</h1>
        <p className="text-3xl pt-3 text-center">Search for an Event Below</p>
        <form className="flex justify-center py-10 items-center gap-5">
          <input
            className="border border-black/10 h-10"
            type="text"
            placeholder="   Search"
            size={30}
          />
          <button
            className="bg-slate-800 text-white p-3 rounded-lg shadow-sm"
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
      <section className="flex flex-row text-left gap-5 pt-3">
        <p>Popular Events:</p>
        <Link href="/event">Austin</Link>
        <Link href="/event">Dallas</Link>
      </section>
    </main>
  );
}
