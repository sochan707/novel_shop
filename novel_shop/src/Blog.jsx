import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./Blog.css";

const categories = [
  { name: "Fiction", count: 12 },
  { name: "Mystery", count: 8 },
  { name: "Romance", count: 7 },
  { name: "Sci-Fi", count: 5 },
  { name: "Non-Fiction", count: 6 },
];

const posts = [
  {
    id: 1,
    title: "10 Must-Read Novels of 2026",
    category: "Fiction",
    date: "02 Apr 2026",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "From gripping thrillers to heartfelt literary fiction, 2026 has already delivered some unforgettable reads. We've rounded up ten novels that belong on every bookshelf this year — no matter what genre you love.",
  },
  {
    id: 2,
    title: "How to Build a Cozy Reading Nook at Home",
    category: "Lifestyle",
    date: "28 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Your perfect reading spot doesn't require a big budget or a spare room. With the right chair, lighting, and a few personal touches, you can create a cozy corner that makes every chapter feel like an escape.",
  },
  {
    id: 3,
    title: "The Rise of Indie Authors: Stories Worth Discovering",
    category: "Non-Fiction",
    date: "20 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Self-published authors are reshaping the literary world. We spotlight five indie voices whose debut books quietly became reader favourites — and explore what makes their storytelling stand out from the crowd.",
  },
];

const recentPosts = [
  {
    title: "10 Must-Read Novels of 2026",
    date: "02 Apr 2026",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Build a Cozy Reading Nook",
    date: "28 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "The Rise of Indie Authors",
    date: "20 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Why Re-Reading Old Books Still Matters",
    date: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Book Club Picks: Spring Edition",
    date: "07 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <Header />

      {/* Hero Banner */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="blog-hero-content">
          <div className="blog-hero-icon">📖</div>
          <h1 className="blog-hero-title">Blog</h1>
          <p className="blog-hero-breadcrumb">
            <span className="blog-hero-home">Home</span>
            <span className="blog-hero-sep">&gt;</span>
            <span>Blog</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
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
                  <span>👤 Admin</span>
                  <span>📅 {post.date}</span>
                  <span>🏷 {post.category}</span>
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

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Search */}
            <div className="blog-search-wrap">
              <input
                type="text"
                placeholder="Search posts..."
                className="blog-search-input"
              />
              <span className="blog-search-icon">🔍</span>
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
                      <p className="blog-recent-date">📅 {post.date}</p>
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
        wide ? "blog-page-btn--wide" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}