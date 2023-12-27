import Image from "next/image";
import React from "react";

type SingleEventPageParams = {
  params: {
    slug: string;
  };
};

export default async function SingleEventPage({
  params,
}: SingleEventPageParams) {
  const { slug } = params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return (
    <main className="bg-zinc-50 overflow-hidden">
      <section className="relative h-[361px] overflow-hidden flex px-4 mb-10">
        <Image
          alt="hello"
          src={event.imageUrl}
          fill
          sizes="(max-width: 1280px), 100vw, 1280px"
          className="object-cover blur-3xl z-0 overflow-hidden"
          quality={50}
        />
        <div className="z-1 relative flex max-w-xl mx-auto justify-center items-center flex-1 gap-10 ">
          <Image
            className="rounded-xl border border-black/10"
            alt="hello"
            src={event.imageUrl}
            width={300}
            height={201}
          />
          <div className="">
            <p className="text-white text-sm pb-1">
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="text-3xl text-white pb-1">{event.name}</p>
            <p className="text-white italic text-lg">
              organized by {event.organizerName}
            </p>
            <button className="mt-4 bg-white text-slate-900 py-2 w-full rounded-lg hover:bg-slate-900 hover:text-white hover:scale-105 transition-all border-white/10 border-2">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl pb-4">About {event.name}</h1>
        <p className="">{event.description}</p>
      </div>
    </main>
  );
}
