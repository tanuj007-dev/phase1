import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blogPosts';

/** Lightweight: one Intersection Observer for section scroll-in */
function useScrollVisible(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function BlogSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.08);
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const step = el.querySelector('[data-card]')?.getBoundingClientRect().width + 24 || 320;
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative bg-white py-20 md:py-28"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Header: title + VIEW ALL */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="blog-heading"
              className="section-heading uppercase tracking-wide text-slate-800"
            >
              Latest Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex w-fit items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-emerald-500 hover:bg-slate-50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            View All
          </Link>
        </div>

        {/* Slider: horizontal scroll with snap */}
        <div className="relative mt-12">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth scrollbar-hide [-webkit-overflow-scrolling:touch] [scroll-snap-type:x_mandatory]"
            aria-label="Blog posts carousel"
          >
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.slug}
                data-card
                className="min-w-[300px] max-w-[340px] shrink-0 snap-start sm:min-w-[320px]"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_32px_-8px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {/* Image + overlay category */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-4 py-3">
                      <span className="text-sm font-semibold uppercase tracking-wide text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-800 group-hover:text-emerald-600">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 group-hover:underline">
                      Read More
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Prev/Next – visible on larger screens */}
          <div className="mt-6 flex justify-center gap-3 sm:mt-8">
            <button
              type="button"
              onClick={() => scroll('prev')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:bg-slate-50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label="Previous posts"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scroll('next')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:bg-slate-50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label="Next posts"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
