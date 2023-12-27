import EventsList from "@/components/events-list";
import MyH1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import React from "react";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center">
      <MyH1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${city}`}
      </MyH1>
      <EventsList events={events} />
    </main>
  );
}
