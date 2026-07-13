import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts, brand } from "../data/content";
import useSEO from "../hooks/useSEO";
import "./DetailPage.css";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  useSEO(post?.title, post?.excerpt);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="blog-post-page">
      <div className="detail-hero">
        <div className="container detail-hero__inner">
          <Link to="/blog" className="detail-hero__back">
            ← All articles
          </Link>
          <span className="post-meta-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container blog-post-body">
        <article className="blog-post-article">
          {post.body.map((section, i) => (
            <div key={i} className="blog-post-section">
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}

          <div className="blog-post-cta">
            <h4>Have a question about this?</h4>
            <p>Book a free consultation and get advice specific to your situation.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/booking" className="btn btn-primary">
                Book Consultation
              </Link>
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-ghost">
                WhatsApp Us
              </a>
            </div>
          </div>
        </article>

        <aside className="detail-side">
          <div className="detail-side__card">
            <h4>More from the blog</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {related.map((r) => (
                <Link to={`/blog/${r.slug}`} key={r.slug} style={{ display: "block" }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--color-orange)", textTransform: "uppercase" }}>
                    {r.category}
                  </span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink)", marginTop: 4 }}>{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
