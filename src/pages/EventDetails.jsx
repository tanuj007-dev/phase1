import React from "react";
import { useParams, Link } from "react-router-dom";
import { EVENTS_DATA } from "../data/eventsData";
import { MapPin, CalendarDays } from "lucide-react";

const EventDetails = () => {

  const { slug } = useParams();

  const event = EVENTS_DATA.find(
    (item) => item.slug === slug
  );

  if (!event)
    return (
      <div className="mt-40 text-center text-2xl font-semibold">
        Event not found
      </div>
    );

  return (
    <section className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Hero Image */}
        <div className="w-full mb-10">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {event.title}
        </h1>

        {/* Event Meta */}
        <div className="flex flex-wrap gap-6 text-gray-600 mb-10">

          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-emerald-700" />
            <span>
              {event.day}, {event.date} {event.month}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span>{event.city}</span>
          </div>

        </div>

        {/* Description */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {event.content}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">

          <Link
            to="/contact"
            className="bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition"
          >
            Register Now
          </Link>

          <Link
            to="/events"
            className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Back to Events
          </Link>

        </div>

      </div>

    </section>
  );
};

export default EventDetails;