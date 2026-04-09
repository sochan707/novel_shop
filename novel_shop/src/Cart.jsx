import { useNavigate } from "react-router-dom";
import { useCart } from "./Component/CartContext";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", backgroundColor: "#fff", color: "#1f1f1f" }}>
      <Header />
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/src/assets/library_bg.jpg') center/cover no-repeat",
        textAlign: "center",
        padding: "48px 24px",
        borderBottom: "1px solid #f0e6d3",
      }}>
        <div style={{ fontSize: "13px", color: "#9f9f9f", letterSpacing: "0.05em", marginBottom: "8px", fontFamily: "sans-serif" }}>
          <span
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer", color: "#b88e2f", textDecoration: "underline" }}
          >Home</span>
          {" › "}
          <span style={{ color: "#1f1f1f" }}>Cart</span>
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: "700", margin: 0, letterSpacing: "-0.02em" }}>Cart</h1>
      </div>

      {/* ── Main Content ────────────────────────────────────────── */}
      <div style={{
        maxWidth: "1100px",
        margin: "48px auto",
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: cartItems.length > 0 ? "1fr 300px" : "1fr",
        gap: "32px",
        alignItems: "start",
      }}>

        {/* ── Cart Table ── */}
        <div>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>📚</div>
              <p style={{ color: "#9f9f9f", fontFamily: "sans-serif", marginBottom: "24px" }}>
                Your cart is empty.
              </p>
              <button
                onClick={() => navigate("/shop")}
                style={{
                  background: "#b88e2f", color: "#fff", border: "none",
                  borderRadius: "8px", padding: "12px 28px",
                  fontFamily: "sans-serif", fontWeight: "600",
                  cursor: "pointer", fontSize: "14px",
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif" }}>
              <thead>
                <tr style={{ background: "#fdf8f2" }}>
                  {["Product", "Price", "Quantity", "Subtotal", ""].map((h, i) => (
                    <th key={i} style={{
                      padding: "14px 16px",
                      textAlign: h === "Product" ? "left" : "center",
                      fontSize: "13px", fontWeight: "600", color: "#1f1f1f",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.cartKey} style={{ borderBottom: "1px solid #f0e6d3" }}>
                    {/* Product */}
                    <td style={{ padding: "20px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <img
                          src={item.src}
                          alt={item.name}
                          style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "6px", background: "#f0e6d3" }}
                        />
                        <div>
                          <p style={{ margin: 0, fontWeight: "600", fontSize: "14px" }}>{item.name}</p>
                          <span style={{
                            display: "inline-block", marginTop: "4px",
                            background: "#f0e6d3", color: "#b88e2f",
                            fontSize: "10px", fontWeight: "600",
                            padding: "2px 8px", borderRadius: "999px",
                            textTransform: "uppercase", letterSpacing: "0.05em",
                          }}>
                            {item.format}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td style={{ textAlign: "center", fontSize: "14px", color: "#9f9f9f", fontFamily: "sans-serif" }}>
                      ${item.price.toFixed(2)}
                    </td>

                    {/* Quantity */}
                    <td style={{ textAlign: "center" }}>
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: "10px",
                        border: "1px solid #e0d4c0", borderRadius: "8px",
                        padding: "6px 12px", background: "#fff", fontFamily: "sans-serif",
                      }}>
                        {/* ✅ Fix: updateQty instead of onUpdateQty */}
                        <button
                          onClick={() => updateQty(item.cartKey, item.qty - 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", color: "#9f9f9f", fontSize: "16px" }}
                        >−</button>
                        <span style={{ minWidth: "20px", textAlign: "center", fontWeight: "600", fontSize: "14px" }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.cartKey, item.qty + 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", color: "#9f9f9f", fontSize: "16px" }}
                        >+</button>
                      </div>
                    </td>

                    {/* Subtotal */}
                    <td style={{ textAlign: "center", fontWeight: "600", fontSize: "14px", fontFamily: "sans-serif" }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </td>

                    {/* Remove */}
                    <td style={{ textAlign: "center" }}>
                      {/* ✅ Fix: removeFromCart instead of onRemove */}
                      <button
                        onClick={() => removeFromCart(item.cartKey)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#c0c0c0" }}
                        aria-label="Remove item"
                      >🗑</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length > 0 && (
            <div style={{ marginTop: "24px" }}>
              <button
                onClick={() => navigate("/shop")}
                style={{
                  background: "none", border: "1px solid #d9d9d9",
                  borderRadius: "8px", padding: "10px 20px",
                  fontFamily: "sans-serif", fontSize: "13px",
                  cursor: "pointer", color: "#1f1f1f",
                }}
              >
                ← Return to Shop
              </button>
            </div>
          )}
        </div>

        {/* ── Cart Totals Panel ── */}
        {cartItems.length > 0 && (
          <div style={{
            background: "#fdf8f2", borderRadius: "12px",
            padding: "28px 24px", fontFamily: "sans-serif",
          }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: 0, marginBottom: "24px", fontFamily: "Georgia, serif" }}>
              Cart Totals
            </h2>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", color: "#9f9f9f" }}>
              <span>Subtotal</span>
              <span style={{ color: "#1f1f1f", fontWeight: "600" }}>${subtotal.toFixed(2)}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "14px", color: "#9f9f9f" }}>
              <span>Shipping</span>
              <span style={{ color: "#b88e2f", fontWeight: "600" }}>Free</span>
            </div>

            <div style={{
              display: "flex", justifyContent: "space-between",
              borderTop: "1px solid #e0d4c0", paddingTop: "16px",
              marginBottom: "24px", fontSize: "16px", fontWeight: "700",
            }}>
              <span>Total</span>
              <span style={{ color: "#b88e2f" }}>${subtotal.toFixed(2)}</span>
            </div>

            {/* ✅ Fix: navigate to "/payment" (a real route you can add next) */}
            <button
              onClick={() => navigate("/checkout")}
              style={{
                width: "100%", background: "#b88e2f", color: "#fff",
                border: "none", borderRadius: "10px", padding: "14px",
                fontSize: "14px", fontWeight: "600", cursor: "pointer",
                letterSpacing: "0.02em", fontFamily: "sans-serif",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#9a7526"}
              onMouseLeave={e => e.currentTarget.style.background = "#b88e2f"}
            >
              Check Out →
            </button>
          </div>
        )}
      </div>

      {/* ── Trust Badges ────────────────────────────────────────── */}
      <div style={{ background: "#fdf8f2", padding: "48px 24px", marginTop: "48px" }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px", textAlign: "center", fontFamily: "sans-serif",
        }}>
          {[
            { icon: "🏆", title: "High Quality",    sub: "Curated top titles" },
            { icon: "✅", title: "Secure Checkout", sub: "100% safe & encrypted" },
            { icon: "🚚", title: "Free Shipping",   sub: "On orders over $30" },
            { icon: "🎧", title: "24/7 Support",    sub: "Dedicated assistance" },
          ].map(({ icon, title, sub }) => (
            <div key={title}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
              <p style={{ margin: 0, fontWeight: "700", fontSize: "14px" }}>{title}</p>
              <p style={{ margin: "4px 0 0", color: "#9f9f9f", fontSize: "12px" }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}