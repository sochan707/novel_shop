import { useNavigate } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

export default function ComfirmOrder({ form, cartCount, payment, total }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header cartCount={cartCount} />

      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#fdf8f2]">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-md p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-3">Order Placed!</h1>
          <p className="text-[#666] mb-2">
            Thanks, {form.firstName || "reader"}.
          </p>
          <p className="text-[#666] mb-6">
            Your order has been placed successfully.
          </p>

          <div className="bg-[#fdf8f2] rounded-xl p-4 text-left mb-6">
            <p className="text-sm text-[#777] mb-2">Order Summary</p>

            <div className="flex justify-between text-sm mb-2">
              <span>Items</span>
              <span>{cartCount}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Payment</span>
              <span>
                {payment === "cod" ? "Cash on Delivery" : "Bank Transfer"}
              </span>
            </div>

            <div className="flex justify-between font-semibold text-base border-t border-[#eadfcd] pt-3 mt-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate("/shop")}
              className="px-5 py-3 rounded-lg border border-[#d6c7ae] text-[#1f1f1f] hover:bg-[#f7f1e7] transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}