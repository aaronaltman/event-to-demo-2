import React from "react";
import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return <section className="h-[380px]">{event.name}</section>;
}
