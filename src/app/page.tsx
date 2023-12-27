import MyH1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <section>
        <div className="py-4">
          <MyH1 className="py-4">Welcome to the event search App</MyH1>
        </div>
        <p className="text-3xl pt-3 text-center">Search for an Event Below</p>
        <SearchForm />
      </section>
      <section className="flex flex-row text-left gap-5 pt-3">
        <p>Popular Events:</p>
        <Link href="/event">Austin</Link>
        <Link href="/event">Dallas</Link>
      </section>
    </main>
  );
}
