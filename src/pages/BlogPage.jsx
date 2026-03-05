import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES, DEFAULT_AUTHOR } from '../data/blogPosts';

const ACCENT_GREEN = '#4595EE';
const DARK_TEXT = '#1a1a1a';

/** Lightweight: single Intersection Observer for scroll-in (no heavy libs). */
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
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/** Get 3 related posts (same category first, then others), excluding current. */
function getRelatedPosts(currentSlug, currentCategory, allPosts) {
  const others = allPosts.filter((p) => p.slug !== currentSlug);
  const sameCategory = others.filter((p) => p.category === currentCategory);
  const rest = others.filter((p) => p.category !== currentCategory);
  return [...sameCategory, ...rest].slice(0, 3);
}

/** Author pill: avatar with green ring, category, author name. */
function BlogAuthor({ category, author }) {
  const { name, image } = author || DEFAULT_AUTHOR;
  return (
    <div className="flex items-center gap-3 rounded-full bg-[#DAE9FC] px-3 py-2 border border-slate-100/80">
      <div className="relative flex h-10 w-10 shrink-0">
        <img
          src={image}
          alt=""
          className="h-10 w-10 rounded-full object-cover ring-2 ring-[#4595EE] ring-offset-1"
        />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-[#1e3a34] leading-tight">{category}</p>
        <p className="text-sm font-bold text-[#1e3a34] leading-tight truncate">{name}</p>
      </div>
    </div>
  );
}

/** Share icons: Twitter, Facebook, LinkedIn, Copy link (inline SVG, no deps). */
function ShareIcons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = [
    { label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, icon: 'twitter' },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: 'facebook' },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: 'linkedin' },
  ];

  const copyLink = () => {
    navigator.clipboard?.writeText(url);
  };

  const iconClass = 'h-5 w-5 text-slate-500 hover:text-[#4595EE] transition-colors';
  return (
    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
      <span className="text-sm font-medium text-slate-500 mr-1">Share</span>
      {shareLinks.map(({ label, href, icon }) => (
        <a
          key={icon}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white hover:shadow-sm transition-all"
          aria-label={`Share on ${label}`}
        >
          {icon === 'twitter' && (
            <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          )}
          {icon === 'facebook' && (
            <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          )}
          {icon === 'linkedin' && (
            <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          )}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="p-2 rounded-full hover:bg-white hover:shadow-sm transition-all"
        aria-label="Copy link"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
      </button>
    </div>
  );
}

/** Render article content blocks (heading, paragraph, list, image). */
function ArticleBody({ content, fallbackExcerpt }) {
  if (!content || content.length === 0) {
    return <p className="text-slate-600 leading-[1.75] text-[1.0625rem]">{fallbackExcerpt}</p>;
  }
  return (
    <div className="space-y-1">
      {content.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="text-xl font-bold text-slate-900 mt-10 first:mt-0 pt-2 border-b border-slate-100 pb-2">
              {block.text}
            </h2>
          );
        }
        if (block.type === 'paragraph') {
          return <p key={i} className="text-slate-600 leading-[1.75] text-[1.0625rem] py-1">{block.text}</p>;
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-2.5 py-2 list-none">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-600 leading-[1.7] text-[1.0625rem]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4595EE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'image') {
          return (
            <figure key={i} className="my-10">
              <img src={block.src} alt={block.alt || ''} className="w-full rounded-xl object-cover shadow-md ring-1 ring-slate-200/50" />
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}

/** Single post detail view: title, metadata, hero, share, body, related blogs. */
function BlogPostDetail({ post }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const related = getRelatedPosts(post.slug, post.category, BLOG_POSTS);

  return (
    <main className="flex-1 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-10 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:border-[#4595EE]/40 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <article>
          <div className="mt-8 border-l-4 border-[#4595EE] pl-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
              <span>{post.date}</span>
              {post.readTime && <span className="text-slate-300">•</span>}
              {post.readTime && <span>{post.readTime}</span>}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50/80 px-4 py-3 border border-slate-100">
            <BlogAuthor category={post.category} author={post.author} />
            <ShareIcons url={url} title={post.title} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/50">
            <img
              src={post.image}
              alt=""
              className="w-full object-cover aspect-16/10"
            />
          </div>
          <div className="mt-12 text-slate-600 leading-relaxed">
            <ArticleBody content={post.content} fallbackExcerpt={post.excerpt} />
          </div>
        </article>
      </div>

      {/* Related Blogs */}
      <section className="bg-gradient-to-b from-slate-50/60 to-white border-t border-slate-100 mt-16 lg:mt-20 pt-14 lg:pt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-slate-200" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Related Blogs</h2>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-200/80 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 leading-snug group-hover:text-[#4595EE] transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500">{p.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/** Blog listing: News & Insight layout with filters and 3-col grid. */
function BlogListing() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [gridRef, gridVisible] = useScrollVisible(0.06);

  const filteredPosts =
    activeFilter === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeFilter);

  return (
    <main className="flex-1 min-h-screen">
      {/* Soft gradient header area */}
      <section className="relative bg-gradient-to-b mt-5 from-slate-50/80 via-white to-white pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="font-serif text-[#4595EE]">
              News & Insight
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-normal text-slate-600">
              from our expert team.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 leading-relaxed">
            Latest tips, stories, and updates to keep you informed and inspired every day with fresh ideas and insights.
          </p>
          {/* Decorative line */}
          <div className="mt-8 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#4595EE] to-[#36D8B8]" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4595EE] ${
                activeFilter === cat
                  ? 'text-white shadow-md shadow-[#4595EE]/25'
                  : 'text-slate-600 border border-slate-200 bg-white hover:border-[#4595EE]/40 hover:bg-[#4595EE]/5 hover:text-slate-800'
              }`}
              style={activeFilter === cat ? { backgroundColor: ACCENT_GREEN } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-column grid with lightweight scroll-in */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16"
        >
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                transitionDelay: gridVisible ? `${index * 70}ms` : '0ms',
              }}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-[#4595EE] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-500 font-medium">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-slate-500 py-16">No posts in this category yet.</p>
        )}
      </div>
    </main>
  );
}

/** Page: listing or single post by route. */
export default function BlogPage() {
  const { slug } = useParams();
  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null;

  useEffect(() => {
    if (slug) window.scrollTo(0, 0);
  }, [slug]);

  if (post) {
    return <BlogPostDetail post={post} />;
  }

  return <BlogListing />;
}
