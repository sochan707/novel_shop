import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
/**
 * CartSidebar
 *
 * Props:
 *  - isOpen      boolean          — controls visibility
 *  - onClose     () => void       — close handler
 *  - cartItems   CartItem[]       — array of items in the cart
 *  - onRemove    (cartKey) => void
 *  - onUpdateQty (cartKey, newQty) => void
 *
 * CartItem shape:
 *  { cartKey, name, src, format, price, qty }
 */
export default function CartSidebar({
  isOpen,
  onClose,
  cartItems = [],
  onRemove,
  onUpdateQty,
}) {
  const navigate = useNavigate()
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Panel ────────────────────────────────────────────────── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0e6d3] px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🛒</span>
            <h2 className="text-lg font-semibold tracking-tight text-[#1f1f1f]">
              Shopping Cart
            </h2>
            {cartItems.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b88e2f] text-[11px] font-bold text-white">
                {cartItems.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#9f9f9f] transition hover:bg-[#f9f1e7] hover:text-[#1f1f1f]"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            /* ── Empty state ── */
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f1e7] text-3xl">
                📚
              </div>
              <p className="text-sm text-[#9f9f9f]">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="text-sm font-medium text-[#b88e2f] underline underline-offset-2 hover:text-[#8a6a1f]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.cartKey}
                  className="flex gap-4 rounded-2xl bg-[#fdf8f2] p-3"
                >
                  {/* Cover */}
                  <div className="flex h-[88px] w-[66px] flex-shrink-0 items-center justify-center rounded-xl bg-[#f0e6d3] p-1">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold leading-snug text-[#1f1f1f]">
                        {item.name}
                      </p>
                      <span className="mt-0.5 inline-block rounded-full bg-[#f0e6d3] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#b88e2f]">
                        {item.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Qty stepper */}
                      <div className="flex items-center gap-2 rounded-lg border border-[#e0d4c0] bg-white px-2 py-1 text-sm">
                        <button
                          onClick={() =>
                            onUpdateQty(item.cartKey, item.qty - 1)
                          }
                          className="w-4 text-center text-[#9f9f9f] transition hover:text-[#1f1f1f]"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-4 text-center font-medium text-[#1f1f1f]">
                          {item.qty}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQty(item.cartKey, item.qty + 1)
                          }
                          className="w-4 text-center text-[#9f9f9f] transition hover:text-[#1f1f1f]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-[#1f1f1f]">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemove(item.cartKey)}
                    className="self-start p-1 text-[#c0c0c0] transition hover:text-red-400"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Totals */}
        {cartItems.length > 0 && (
          <div className="space-y-4 border-t border-[#f0e6d3] px-6 py-5">
            <div className="flex items-center justify-between text-sm text-[#9f9f9f]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#1f1f1f]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-[#9f9f9f]">
              <span>Shipping</span>
              <span className="font-medium text-[#b88e2f]">Free</span>
            </div>

            <div className="flex items-center justify-between border-t border-[#f0e6d3] pt-3 text-base font-semibold text-[#1f1f1f]">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full rounded-xl bg-[#b88e2f] py-3 text-sm font-semibold text-white transition hover:bg-[#9a7526] active:scale-[0.98]"
            >
              Proceed to Checkout →
            </button>
            <button
              onClick={onClose}
              className="w-full rounded-xl border border-[#d9d9d9] py-3 text-sm font-medium text-[#1f1f1f] transition hover:bg-[#f9f1e7]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}