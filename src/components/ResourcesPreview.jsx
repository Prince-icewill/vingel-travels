import React from "react";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import { blogPosts, checklists } from "../data/content";
import useReveal from "../hooks/useReveal";
import { trackEvent } from "../utils/analytics";
import "./ResourcesPreview.css";

export default function ResourcesPreview() {
  const ref = useReveal();
  return (
    <section className="section section--cloud" ref={ref}>
      <div className="container resources-grid">
        <div className="resources-col reveal">
          <div className="resources-col__head">
            <div>
              <span className="eyebrow">From the blog</span>
              <h2 style={{ fontSize: 28 }}>Guides worth reading before you apply</h2>
            </div>
            <Link to="/blog" className="btn btn-ghost btn-sm">
              Visit blog
            </Link>
          </div>
          <div className="blog-list">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-item" key={post.slug}>
                <span className="blog-item__category">{post.category}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="resources-col reveal" style={{ transitionDelay: "100ms" }}>
          <div className="resources-col__head">
            <div>
              <span className="eyebrow">Download center</span>
              <h2 style={{ fontSize: 28 }}>Free visa checklists</h2>
            </div>
          </div>
          <div className="checklist-list">
            {checklists.map((c) => (
              <a
                href={c.file}
                download
                className="checklist-item"
                key={c.country + c.type}
                onClick={() => trackEvent("checklist_downloaded", { country: c.country, type: c.type })}
              >
                <span className="checklist-item__icon">
                  <FileText size={18} strokeWidth={1.8} />
                </span>
                <div className="checklist-item__text">
                  <strong>{c.country}</strong>
                  <span>{c.type}</span>
                </div>
                <span className="checklist-item__download" aria-label={`Download ${c.country} ${c.type}`}>
                  <Download size={16} strokeWidth={2} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
