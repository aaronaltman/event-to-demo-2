import React from "react";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className="flex flex-col flex-1 basis-80 items-center h-[380px] max-w-[500px] rounded-md overflow-hidden bg-slate-900 relative hover:scale-105 active:scale-[1.02] transition-all"
      href={`/event/${event.slug}`}
    >
      <section className="flex flex-col flex-1 justify-center items-center">
        <Image
          alt={event.name}
          width={500}
          height={280}
          src={event.imageUrl}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 bg-slate-900 text-white max-w-[500px] justify-center items-center">
          <h2 className="text-2xl">{event.name}</h2>
          <h3 className="text-base">{event.organizerName}</h3>
          <p className="text-italic">{event.location}</p>
        </div>
        <section className="flex flex-col justify-center items-center rounded-sm absolute left-0 top-0 h-20 w-20 bg-slate-800 text-white">
          <p className="text-xl italic">
            {new Date(event.date).toLocaleString("en-US", {
              day: "2-digit", // 2-digit day
            })}
          </p>
          <p className="italic">
            {new Date(event.date).toLocaleString("en-US", {
              month: "short", // 2-digit month
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
