import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

/** Placeholder page for /blog and /blog/:slug */
export default function BlogPage() {
  const { slug } = useParams();
  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null;

  if (post) {
    return (
      <main className="flex-1">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/#blog" className="text-sm font-medium text-emerald-600 hover:underline">
          ← Back to blog
        </Link>
        <article className="mt-8">
          <img
            src={post.image}
            alt=""
            className="mb-6 h-auto w-full rounded-2xl object-cover"
          />
          <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            {post.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-slate-800">
            {post.title}
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600">{post.excerpt}</p>
          <p className="mt-6 text-slate-500">
            Full article content can be added here. This is a placeholder for the blog post page.
          </p>
        </article>
      </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-bold text-slate-800">Latest Blog Articles</h1>
      <p className="mt-2 text-slate-600">All wellness articles in one place.</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {BLOG_POSTS.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="block rounded-xl border border-slate-200 p-4 transition hover:border-emerald-500 hover:shadow-md"
            >
              <h2 className="font-semibold text-slate-800">{p.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.excerpt}</p>
              <span className="mt-2 inline-block text-sm font-medium text-emerald-600">
                Read More →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/#blog" className="mt-10 inline-block text-emerald-600 hover:underline">
        ← Back to home
      </Link>
    </div>
    </main>
  );
}
