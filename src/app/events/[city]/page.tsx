import MyH1 from "@/components/h1";
import React from "react";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  return (
    <main className="flex flex-col items-center">
      <MyH1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${city}`}
      </MyH1>
    </main>
  );
}
