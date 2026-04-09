import { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const provinces = [
  "Phnom Penh", "Siem Reap", "Battambang", "Kampot", "Kandal"
];

const fmt = (n) =>
  new Intl.NumberFormat("km-KH", {
    style: "currency",
    currency: "KHR",
    maximumFractionDigits: 0,
  }).format(n);

export default function Checkout({ cartItems = [], subtotal = 0 }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "Cambodia",
    city: "",
    province: "Phnom Penh",
    phone: "",
    email: "",
  });

  const [payment, setPayment] = useState("cod");
  const [placed, setPlaced] = useState(false);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  if (placed) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-[#f7f4ef]">
          <div className="bg-white p-10 rounded-xl text-center shadow-md">
            <h2 className="text-2xl font-bold mb-2">Order Placed!</h2>
            <p className="text-gray-600">
              Thanks {form.firstName || "reader"} 
            </p>
            <button
              onClick={() => setPlaced(false)}
              className="mt-6 px-6 py-2 bg-black text-white rounded"
            >
              Back to Checkout
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="bg-[#f7f4ef] min-h-screen font-serif">
        
        {/* HERO */}
        <div className="h-40 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] bg-cover flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold bg-black/50 px-6 py-2 rounded">
            Checkout
          </h2>
        </div>

        {/* MAIN */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">

          {/* LEFT - FORM */}
          <div>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Billing Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="p-2 border rounded"
                value={form.firstName}
                onChange={handleChange("firstName")}
              />
              <input
                placeholder="Last Name"
                className="p-2 border rounded"
                value={form.lastName}
                onChange={handleChange("lastName")}
              />
            </div>

            <input
              className="p-2 border rounded w-full mt-4"
              placeholder="City"
              value={form.city}
              onChange={handleChange("city")}
            />

            <select
              className="p-2 border rounded w-full mt-4"
              value={form.province}
              onChange={handleChange("province")}
            >
              {provinces.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <input
              className="p-2 border rounded w-full mt-4"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange("phone")}
            />

            <input
              className="p-2 border rounded w-full mt-4"
              placeholder="Email"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>

          {/* RIGHT - ORDER */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Your Order
            </h2>

            {/* ITEMS */}
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-3">
                  <div>
                    <p className="font-semibold">
                      {item.title} × {item.qty}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.author}
                    </p>
                  </div>
                  <p>{fmt(item.price * item.qty)}</p>
                </div>
              ))
            )}

            {/* TOTAL */}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>{fmt(subtotal)}</span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">Payment</h3>

              <label className="block">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />{" "}
                Cash on Delivery
              </label>

              <label className="block mt-2">
                <input
                  type="radio"
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                />{" "}
                Bank Transfer
              </label>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setPlaced(true)}
              disabled={cartItems.length === 0}
              className="w-full mt-6 bg-black text-white py-3 rounded disabled:opacity-40"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}