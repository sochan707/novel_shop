const Header = ({ cartCount = 0 }) => {
  return (
    <>
      <style>{`
        .navLink {
          text-decoration: none;
          color: #333;
          transition: color 0.2s ease;
        }
        .navLink:hover {
          color: #F2A65A;
          border-bottom: 1px solid #F2A65A;
        }
        .iconBtn {
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          transition: color 0.2s ease;
        }
        .iconBtn:hover {
          color: #F2A65A;
        }
      `}</style>

      <header style={styles.header}>
        <a href="/" style={styles.logo}>
          <span style={styles.logoText}>NovelShop</span>
        </a>

        <nav style={styles.nav}>
          {["Home", "Shop", "About", "Contact"].map((link) => (
            <a key={link} href={`/${link.toLowerCase()}`} className="navLink">
              {link}
            </a>
          ))}
        </nav>

        <div style={styles.icons}>
          <button className="iconBtn" aria-label="Account">
            <span className="material-icons">person_outline</span>
          </button>
          <button className="iconBtn" aria-label="Search">
            <span className="material-icons">search</span>
          </button>
          <button className="iconBtn" aria-label="Wishlist">
            <span className="material-icons">favorite_border</span>
          </button>
          <div style={{ position: "relative" }}>
            <button className="iconBtn" aria-label="Cart">
              <span className="material-icons">shopping_bag</span>
            </button>
            {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
          </div>
        </div>
      </header>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px",
    backgroundColor: "#BFC6C4",
    borderBottom: "1px solid #BFC6C4",
  },
  logo: {
    textDecoration: "none",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  icons: {
    display: "flex",
    gap: "10px",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  },
};

export default Header;