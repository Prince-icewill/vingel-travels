import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/content";
import "./StaticPage.css";
import "../components/ResourcesPreview.css";
import useSEO from "../hooks/useSEO";

export default function Blog() {
  useSEO("Blog", "Visa tips, travel guides, and immigration news from Vingel Travels & Tours.");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(blogPosts.map((p) => p.category))], []);
  const filtered = category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category);

  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Blog
          </span>
          <h1>Guides worth reading before you apply</h1>
          <p>Visa tips, travel guides, and immigration news — written by advisors, not algorithms.</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 50 }}>
        <div className="directory-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`directory-filter ${category === c ? "directory-filter--active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="container static-section">
        <div className="blog-list" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {filtered.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-item" key={post.slug}>
              <span className="blog-item__category">{post.category}</span>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <span style={{ fontSize: 12, color: "var(--color-gray-300)", marginTop: 10, display: "block" }}>
                {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
