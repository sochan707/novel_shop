import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden bg-[#F4F5F7] shadow-sm">
      <div className="relative h-[320px] overflow-hidden">
        <img
          src={product.src}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-6 text-white opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="mb-6 rounded-xl bg-white px-10 py-3 text-sm font-semibold text-[#B88E2F] shadow hover:bg-[#B88E2F] hover:text-white"
          >
            View Product
          </button>
        </div>

        {product.badge && (
          <div
            className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-xs font-medium text-white ${
              product.isNew ? "bg-[#2EC1AC]" : "bg-[#E97171]"
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.name}</h3>
        <p className="mt-1 text-sm text-[#898989]">{product.subtitle}</p>
        <p className="mt-3 text-xl font-bold text-[#3A3A3A]">{product.price}</p>
      </div>
    </div>
  );
}