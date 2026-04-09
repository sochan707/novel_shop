import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./Blog.css";
import { categories, posts, recentPosts } from "./data/blogData";

// Icons from assets
import iconBook     from "./assets/icons/book.svg";
import iconPerson   from "./assets/icons/person.svg";
import iconCalendar from "./assets/icons/calendar.svg";
import iconTag      from "./assets/icons/tag.svg";
import iconSearch   from "./assets/icons/search.svg";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <Header />

      {/* ── Hero Banner ── */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="blog-hero-content">
          <img src={iconBook} alt="" className="blog-hero-icon" />
          <h1 className="blog-hero-title">Blog</h1>
          <p className="blog-hero-breadcrumb">
            <span className="blog-hero-home">Home</span>
            <span className="blog-hero-sep">&gt;</span>
            <span>Blog</span>
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="blog-main">
        <div className="blog-layout">

          {/* Posts Column */}
          <section className="blog-posts">
            {posts.map((post) => (
              <article key={post.id} className="blog-article">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-article-img"
                />

                <div className="blog-article-meta">
                  <span className="blog-meta-item">
                    <img src={iconPerson}   alt="" className="blog-meta-icon" />
                    Admin
                  </span>
                  <span className="blog-meta-item">
                    <img src={iconCalendar} alt="" className="blog-meta-icon" />
                    {post.date}
                  </span>
                  <span className="blog-meta-item">
                    <img src={iconTag}      alt="" className="blog-meta-icon" />
                    {post.category}
                  </span>
                </div>

                <h2 className="blog-article-title">{post.title}</h2>
                <p className="blog-article-excerpt">{post.excerpt}</p>
                <button className="blog-read-more">Read more</button>
              </article>
            ))}

            {/* Pagination */}
            <div className="blog-pagination">
              <PageBtn active>1</PageBtn>
              <PageBtn>2</PageBtn>
              <PageBtn>3</PageBtn>
              <PageBtn wide>Next</PageBtn>
            </div>
          </section>

          {/* ── Sidebar ── */}
          <aside className="blog-sidebar">

            {/* Search */}
            <div className="blog-search-wrap">
              <input
                type="text"
                placeholder="Search posts..."
                className="blog-search-input"
              />
              <img src={iconSearch} alt="Search" className="blog-search-icon" />
            </div>

            {/* Categories */}
            <div className="blog-sidebar-block">
              <h3 className="blog-sidebar-title">Categories</h3>
              <div className="blog-categories">
                {categories.map((item) => (
                  <div key={item.name} className="blog-category-row">
                    <span>{item.name}</span>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="blog-sidebar-block">
              <h3 className="blog-sidebar-title">Recent Posts</h3>
              <div className="blog-recent-list">
                {recentPosts.map((post) => (
                  <div key={post.title} className="blog-recent-item">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-recent-img"
                    />
                    <div className="blog-recent-info">
                      <p className="blog-recent-title">{post.title}</p>
                      <p className="blog-recent-date">
                        <img src={iconCalendar} alt="" className="blog-meta-icon" />
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PageBtn({ children, active = false, wide = false }) {
  return (
    <button
      className={[
        "blog-page-btn",
        active ? "blog-page-btn--active" : "",
        wide   ? "blog-page-btn--wide"   : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}