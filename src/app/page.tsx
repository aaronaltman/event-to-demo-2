import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <section>
        <h1 className="text-5xl">Search for an Event Below</h1>
        <p className="text-lg pt-3 text-center">here is some text</p>
        <form className="flex justify-center pt-3">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="flex flex-row gap-5">
        <p>Popular Events:</p>
        <Link href="/event">Austin</Link>
        <Link href="/event">Dallas</Link>
      </section>
    </main>
  );
}
