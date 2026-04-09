import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { useCart } from "./Component/CartContext";
import libraryImage from "./assets/library_bg.jpg";
import ComfirmOrder from "./ComfirmOrder";

const provinces = [
  "Phnom Penh",
  "Siem Reap",
  "Battambang",
  "Kampot",
  "Kandal",
];

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "Cambodia",
    city: "",
    province: "Phnom Penh",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const [payment, setPayment] = useState("cod");
  const [placed, setPlaced] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.city.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.address.trim()
    ) {
      alert("Please fill in all required billing details.");
      return;
    }

    setPlaced(true);
  };

  if (placed) {
    return (
      <ComfirmOrder
        form={form}
        cartCount={cartCount}
        payment={payment}
        total={total}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header cartCount={cartCount} />

      {/* Hero */}
      <section
        className="text-center px-6 py-14 border-b border-[#f0e6d3]"
        style={{
          background: `linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)), url(${libraryImage}) center/cover no-repeat`,
        }}
      >
        <p className="text-sm text-[#9f9f9f] mb-2">
          <span
            onClick={() => navigate("/home")}
            className="cursor-pointer text-[#b88e2f] hover:underline"
          >
            Home
          </span>{" "}
          ›{" "}
          <span
            onClick={() => navigate("/cart")}
            className="cursor-pointer text-[#b88e2f] hover:underline"
          >
            Cart
          </span>{" "}
          › <span className="text-[#1f1f1f]">Checkout</span>
        </p>

        <h1 className="text-4xl font-bold">Checkout</h1>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                  placeholder="First name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <input
                type="text"
                value={form.country}
                onChange={handleChange("country")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Province</label>
              <select
                value={form.province}
                onChange={handleChange("province")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
              >
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City *</label>
              <input
                type="text"
                value={form.city}
                onChange={handleChange("city")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                placeholder="City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address *</label>
              <input
                type="text"
                value={form.address}
                onChange={handleChange("address")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                placeholder="Street address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone *</label>
              <input
                type="text"
                value={form.phone}
                onChange={handleChange("phone")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                placeholder="Phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f]"
                placeholder="Email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Order Note
              </label>
              <textarea
                rows="4"
                value={form.note}
                onChange={handleChange("note")}
                className="w-full border border-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:border-[#b88e2f] resize-none"
                placeholder="Any note for your order"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#fdf8f2] rounded-2xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-[#888] mb-5">Your cart is empty.</p>
              <button
                onClick={() => navigate("/shop")}
                className="px-5 py-3 rounded-lg bg-[#b88e2f] text-white hover:bg-[#9a7526] transition"
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.cartKey}
                    className="flex gap-4 pb-4 border-b border-[#eadfcd]"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded-md bg-white"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold leading-5">{item.name}</h3>
                      <p className="text-sm text-[#9f9f9f] mt-1">
                        Format: {item.format}
                      </p>
                      <p className="text-sm text-[#9f9f9f]">
                        Qty: {item.qty}
                      </p>
                    </div>

                    <div className="text-right font-semibold whitespace-nowrap">
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-[#666]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1f1f1f]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-[#666]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#b88e2f]">Free</span>
                </div>

                <div className="flex justify-between border-t border-[#eadfcd] pt-4 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#b88e2f]">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-3">Payment Method</h3>

                <label className="flex items-start gap-3 mb-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium">Cash on Delivery</p>
                    <p className="text-sm text-[#888]">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "bank"}
                    onChange={() => setPayment("bank")}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium">Direct Bank Transfer</p>
                    <p className="text-sm text-[#888]">
                      Transfer payment directly to our bank account.
                    </p>
                  </div>
                </label>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-8 bg-[#b88e2f] text-white py-4 rounded-xl font-semibold hover:bg-[#9a7526] transition"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}