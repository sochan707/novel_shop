import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ALL_NOVELS } from "./data/productData";
import CartSidebar from "./Component/CartSidebar";
import { useCart } from "./Component/CartContext";         
    

export default function SingleProduct() {
  const { id } = useParams();
  const product = ALL_NOVELS.find((item) => item.id === Number(id));

  // ── Cart from global context (persists across pages) ──────────
  const { cartItems, cartOpen, setCartOpen, addToCart, removeFromCart, updateQty } = useCart();

  // ── Local UI state only ───────────────────────────────────────
  const [format, setFormat] = useState("original");
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const basePrice    = product ? Number(String(product.price).replace("$", "").trim()) : 0;
  const finalPrice   = format === "print" ? basePrice * 0.9 : basePrice;
  const totalPrice   = finalPrice * quantity;
  const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

  const handleAddToCart = () => {
    if (quantity === 0 || !product) return;
    addToCart(product, format, finalPrice, quantity);   // ← uses context
    setAddedFeedback(true);
    setTimeout(() => { setAddedFeedback(false); setCartOpen(true); }, 600);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-[#1f1f1f]">
        <Header />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <p className="mt-3 text-[#9f9f9f]">The product you clicked does not exist.</p>
          <Link to="/shop" className="mt-6 rounded-xl border border-black px-6 py-3 transition hover:bg-black hover:text-white">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const thumbnails = [product.src, product.src, product.src, product.src];

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      {/* Floating cart pill */}
      {totalCartQty > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#b88e2f]"
        >
          🛒 <span>Cart</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b88e2f] text-[11px] font-bold text-white">
            {totalCartQty}
          </span>
        </button>
      )}

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-[#f9f1e7] px-6 py-5 md:px-14">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#9f9f9f]">
          <Link to="/home" className="hover:text-black">Home</Link>
          <span className="text-base text-[#5f5f5f]">›</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span className="text-base text-[#5f5f5f]">›</span>
          <div className="mx-1 h-6 w-px bg-[#9f9f9f]" />
          <span className="text-[#1f1f1f]">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="px-6 py-10 md:px-14 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[90px_420px_1fr]">
          {/* Thumbnails */}
          <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
            {thumbnails.map((image, index) => (
              <button key={index} className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#f9f1e7] p-2 transition hover:scale-105">
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-full w-full rounded-xl object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="order-1 flex items-center justify-center rounded-2xl bg-[#f9f1e7] p-6 lg:order-2 lg:h-[500px]">
            <img src={product.src} alt={product.name} className="max-h-full w-full rounded-2xl object-contain" />
          </div>

          {/* Product Info */}
          <div className="order-3 max-w-[560px]">
            <h1 className="text-3xl font-semibold md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg text-[#9f9f9f]">{product.subtitle}</p>
            <p className="mt-3 text-2xl font-medium text-[#9f9f9f]">${finalPrice.toFixed(2)}</p>
            <p className="mt-1 text-sm text-[#9f9f9f]">Total: ${totalPrice.toFixed(2)}</p>

            {format === "print" && (
              <p className="mt-1 text-sm text-green-600">Print version discount applied (-10%)</p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex text-[#ffc700]">
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <div className="h-5 w-px bg-[#9f9f9f]" />
              <span className="text-sm text-[#9f9f9f]">5 Customer Review</span>
            </div>

            <p className="mt-4 max-w-[500px] text-sm leading-7 text-[#1f1f1f]">{product.description}</p>

            {/* Format */}
            <div className="mt-8">
              <p className="text-sm text-[#9f9f9f]">Format</p>
              <div className="mt-3 flex gap-4">
                <button onClick={() => setFormat("print")} className={`rounded-lg px-4 py-2 text-sm transition ${format === "print" ? "bg-[#b88e2f] text-white" : "bg-[#f9f1e7] text-[#1f1f1f]"}`}>
                  Print (-10%)
                </button>
                <button onClick={() => setFormat("original")} className={`rounded-lg px-4 py-2 text-sm transition ${format === "original" ? "bg-[#b88e2f] text-white" : "bg-[#f9f1e7] text-[#1f1f1f]"}`}>
                  Original
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-6 rounded-xl border border-[#9f9f9f] px-4 py-3">
                <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="text-lg">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="text-lg">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`rounded-xl border px-8 py-3 text-base font-medium transition ${
                  addedFeedback ? "border-green-500 bg-green-500 text-white" : "border-black hover:bg-black hover:text-white"
                }`}
              >
                {addedFeedback ? "✓ Added!" : "Add To Cart"}
              </button>

              {totalCartQty > 0 && (
                <button onClick={() => setCartOpen(true)} className="rounded-xl bg-[#f9f1e7] px-5 py-3 text-sm font-medium text-[#b88e2f] transition hover:bg-[#f0e6d3]">
                  View Cart ({totalCartQty})
                </button>
              )}
            </div>

            <div className="mt-10 border-t border-[#d9d9d9] pt-10 text-sm text-[#9f9f9f]">
              <div className="grid grid-cols-[80px_20px_1fr] gap-y-4">
                <span>SKU</span><span>:</span><span>BK{product.id.toString().padStart(3, "0")}</span>
                <span>Category</span><span>:</span><span>Books</span>
                <span>Tags</span><span>:</span><span>Novel, Book, Reading, Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}