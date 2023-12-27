import React from "react";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex flex-col flex-1 basis-80 items-center h-[380px] max-w-[500px] rounded-md overflow-hidden bg-slate-900 relative">
      <Image
        alt={event.name}
        width={500}
        height={280}
        src={event.imageUrl}
        className="h-[60%] object-cover"
      />
      <div className="flex flex-col flex-1 bg-slate-900 text-white max-w-[500px] justify-center items-center">
        <h2 className="text-2xl">{event.name}</h2>
        <h3 className="text-base">{event.oganizationName}</h3>
        <p className="text-italic">{event.location}</p>
      </div>
      <section className="flex flex-col justify-center items-center rounded-sm absolute left-0 top-0 h-20 w-20 bg-slate-800 text-white">
        <p className="text-xl italic">
          {
            // Ensure event.date is a Date object

            new Date(event.date).toLocaleString("en-US", {
              day: "2-digit", // 2-digit day
            })
          }
        </p>
        <p className="italic">
          {new Date(event.date).toLocaleString("en-US", {
            month: "short", // 2-digit month
          })}
        </p>
      </section>
    </section>
  );
}
