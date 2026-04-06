const Footer = () => {

  const links = ["Home", "Shop", "About", "Contact"]
  const helpLinks = ["Payment Options", "Returns", "Privacy Policies"]

  return (
    <>
      <style>{`
        .Link {
          text-decoration: none;
          color: #333;
          transition: color 0.2s ease;
          display: block;
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 500;
        }
        .Link:hover {
          color: #F2A65A;
         
        }
      `}</style>

      <footer style={styles.footer}>

        {/* Top Section */}
        <div style={styles.topSection}>

          {/* Brand */}
          <div style={styles.brandCol}>
            <p style={styles.brandName}>NovelShop.</p>
            <p style={styles.address}>
              our one-stop destination for books, <br />
              stories, and endless adventures.
            </p>
          </div>

          {/* Links */}
          <div style={styles.col}>
            <p style={styles.colTitle}>Links</p>
            {links.map((link) => (
              <a key={link} href="#" className="Link">
                {link}
              </a>
            ))}
          </div>

          {/* Help */}
          <div style={styles.col}>
            <p style={styles.colTitle}>Help</p>
            {helpLinks.map((link) => (
              <a key={link} href="#" className="Link">
                {link}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            2026 NovelShop. All rights reserved
          </p>
        </div>

      </footer>
    </>
  )
}

const styles = {
  footer: {
    background: "#fff",
    padding: "48px 60px 24px",
    borderTop: "1px solid #f0ece6",
  },
  topSection: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  brandCol: {
    flex: 1.5,
    minWidth: "180px",
  },
  brandName: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#2d2d2d",
    marginBottom: "20px",
  },
  address: {
    fontSize: "13px",
    color: "#9f9f9f",
    lineHeight: 1.8,
  },
  col: {
    flex: 1,
    minWidth: "120px",
  },
  colTitle: {
    fontSize: "13px",
    color: "#9f9f9f",
    marginBottom: "20px",
  },
  newsletterCol: {
    flex: 1.5,
    minWidth: "200px",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    border: "none",
    borderBottom: "1.5px solid #2d2d2d",
    fontSize: "13px",
    outline: "none",
  },
  subscribeBtn: {
    padding: "10px 14px",
    background: "none",
    border: "none",
    borderBottom: "1.5px solid #2d2d2d",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    color: "#2d2d2d",
  },
  bottomBar: {
    borderTop: "1px solid #f0ece6",
    paddingTop: "20px",
  },
  copyright: {
    fontSize: "13px",
    color: "#9f9f9f",
  },
}

export default Footer