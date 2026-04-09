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
    <div className="min-h-screen bg-white font-serif text-[#1f1f1f]">
      <Header />

      {/* Hero Banner */}
      <div
        className="border-b border-[#f0e6d3] bg-cover bg-center bg-no-repeat px-6 py-12 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/src/assets/library_bg.jpg')",
        }}
      >
        <div className="mb-2 font-sans text-[13px] tracking-[0.05em] text-[#9f9f9f]">
          <span
            onClick={() => navigate("/home")}
            className="cursor-pointer text-[#b88e2f] underline"
          >
            Home
          </span>
          {" › "}
          <span className="text-[#1f1f1f]">Cart</span>
        </div>

        <h1 className="m-0 text-4xl font-bold tracking-[-0.02em]">Cart</h1>
      </div>

      {/* Main Content */}
      <div
        className={`mx-auto my-12 grid max-w-[1100px] items-start gap-8 px-6 ${
          cartItems.length > 0 ? "grid-cols-1 lg:grid-cols-[1fr_300px]" : "grid-cols-1"
        }`}
      >
        {/* Cart Table */}
        <div>
          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-4 text-5xl">📚</div>
              <p className="mb-6 font-sans text-[#9f9f9f]">Your cart is empty.</p>
              <button
                onClick={() => navigate("/shop")}
                className="rounded-lg bg-[#b88e2f] px-7 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#9a7526]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-sans">
                <thead>
                  <tr className="bg-[#fdf8f2]">
                    {["Product", "Price", "Quantity", "Subtotal", ""].map(
                      (h, i) => (
                        <th
                          key={i}
                          className={`px-4 py-[14px] text-[13px] font-semibold text-[#1f1f1f] ${
                            h === "Product" ? "text-left" : "text-center"
                          }`}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.cartKey}
                      className="border-b border-[#f0e6d3]"
                    >
                      {/* Product */}
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.src}
                            alt={item.name}
                            className="h-20 w-[60px] rounded-md bg-[#f0e6d3] object-cover"
                          />
                          <div>
                            <p className="m-0 text-sm font-semibold">
                              {item.name}
                            </p>
                            <span className="mt-1 inline-block rounded-full bg-[#f0e6d3] px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.05em] text-[#b88e2f]">
                              {item.format}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="text-center font-sans text-sm text-[#9f9f9f]">
                        ${item.price.toFixed(2)}
                      </td>

                      {/* Quantity */}
                      <td className="text-center">
                        <div className="inline-flex items-center gap-[10px] rounded-lg border border-[#e0d4c0] bg-white px-3 py-[6px] font-sans">
                          <button
                            onClick={() => updateQty(item.cartKey, item.qty - 1)}
                            className="border-none bg-transparent text-base text-[#9f9f9f] transition hover:text-black"
                          >
                            −
                          </button>
                          <span className="min-w-[20px] text-center text-sm font-semibold">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.cartKey, item.qty + 1)}
                            className="border-none bg-transparent text-base text-[#9f9f9f] transition hover:text-black"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Subtotal */}
                      <td className="text-center font-sans text-sm font-semibold">
                        ${(item.price * item.qty).toFixed(2)}
                      </td>

                      {/* Remove */}
                      <td className="text-center">
                        <button
                          onClick={() => removeFromCart(item.cartKey)}
                          aria-label="Remove item"
                          className="border-none bg-transparent text-lg text-[#c0c0c0] transition hover:text-red-500"
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => navigate("/shop")}
                className="rounded-lg border border-[#d9d9d9] bg-transparent px-5 py-2.5 font-sans text-[13px] text-[#1f1f1f] transition hover:bg-gray-50"
              >
                ← Return to Shop
              </button>
            </div>
          )}
        </div>

        {/* Cart Totals Panel */}
        {cartItems.length > 0 && (
          <div className="rounded-xl bg-[#fdf8f2] px-6 py-7 font-sans">
            <h2 className="mb-6 mt-0 font-serif text-lg font-bold">
              Cart Totals
            </h2>

            <div className="mb-[14px] flex justify-between text-sm text-[#9f9f9f]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#1f1f1f]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="mb-5 flex justify-between text-sm text-[#9f9f9f]">
              <span>Shipping</span>
              <span className="font-semibold text-[#b88e2f]">Free</span>
            </div>

            <div className="mb-6 flex justify-between border-t border-[#e0d4c0] pt-4 text-base font-bold">
              <span>Total</span>
              <span className="text-[#b88e2f]">${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full rounded-[10px] bg-[#b88e2f] px-4 py-[14px] font-sans text-sm font-semibold tracking-[0.02em] text-white transition hover:bg-[#9a7526]"
            >
              Check Out →
            </button>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="mt-12 bg-[#fdf8f2] px-6 py-12">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 text-center font-sans sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "🏆", title: "High Quality", sub: "Curated top titles" },
            { icon: "✅", title: "Secure Checkout", sub: "100% safe & encrypted" },
            { icon: "🚚", title: "Free Shipping", sub: "On orders over $30" },
            { icon: "🎧", title: "24/7 Support", sub: "Dedicated assistance" },
          ].map(({ icon, title, sub }) => (
            <div key={title}>
              <div className="mb-2 text-[28px]">{icon}</div>
              <p className="m-0 text-sm font-bold">{title}</p>
              <p className="mt-1 text-xs text-[#9f9f9f]">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}