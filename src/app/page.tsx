import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        <h1>Search for an Event Below</h1>
        <p>here is some text</p>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </section>
      <section>
        <p>Popular Events:</p>
        <div>
          <Link href="/event">Austin</Link>
          <Link href="/event">Dallas</Link>
        </div>
      </section>
    </main>
  );
}
