import React from "react";
import { Link } from "react-router-dom";
import { EVENTS_DATA } from "../data/eventsData";

const EventsPage = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">

      <div className="max-w-[1240px] mx-auto">

        <h1 className="text-4xl font-semibold mb-14 text-center text-[#1A3A32]">
          All Events
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {EVENTS_DATA.map((item) => (

            <Link
              key={item.id}
              to={`/events/${item.slug}`}
              className="group"
            >

              <div className="rounded-[20px] overflow-hidden border border-slate-200 bg-white">

                <div className="aspect-[4/5] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <p className="text-sm text-gray-500 mb-2">
                    {item.day}, {item.date} {item.month}
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    {item.venue} {item.city}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default EventsPage;