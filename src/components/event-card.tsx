import React from "react";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="h-[380px] w-[500px] rounded-md overflow-hidden bg-slate-900">
      <Image
        alt={event.name}
        width={500}
        height={280}
        src={event.imageUrl}
        className="h-[60%] object-cover"
      />
      <div className="flex flex-col bg-slate-900 text-white max-w-[500px] justify-center items-center">
        <h2>{event.name}</h2>
        <p>{event.oganizationName}</p>
        <p>{event.location}</p>
      </div>
    </section>
  );
}
