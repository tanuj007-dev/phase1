import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getInitiative } from '../data/initiatives';

/** Reusable inner page for each initiative – lightweight, no extra data fetching */
export default function InitiativePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const initiative = getInitiative(slug);

  if (!initiative) {
    return (
      <main className="flex-1 px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-slate-800">Initiative not found</h1>
        <Link to="/" className="mt-4 inline-block text-emerald-600 hover:underline">
          Back to home
        </Link>
      </div>
      </main>
    );
  }

  const { title, shortDesc, image } = initiative;

  return (
    <main className="min-h-[60vh] flex-1">
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
      <nav className="mb-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm font-medium text-[#939598] hover:text-emerald-600"
        >
          ← Back
        </button>
      </nav>

      <header className="mb-8">
        <div className="mb-6 overflow-hidden rounded-2xl bg-[#939598]/10">
          <img
            src={image}
            alt=""
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-[#939598]">{shortDesc}</p>
      </header>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600">
          This section is dedicated to our <strong>{title}</strong> initiative. Here you’ll find
          resources, updates, and ways to get involved. Content for this page can be expanded with
          articles, events, and calls to action.
        </p>
        <p className="mt-4 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-8">
        <Link
          to="/#wellness-overview"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600"
        >
          View all initiatives
        </Link>
      </footer>
    </article>
    </main>
  );
}
