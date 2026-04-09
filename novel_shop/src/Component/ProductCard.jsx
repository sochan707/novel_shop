import { useNavigate } from "react-router-dom";

export default function productCard({product}){
    const navigate = useNavigate();

    return(
        <>
        <div className="group overflow-hidden bg-[#F4F5F7] shadow-sm">
        <div className="relative h-[320px] overflow-hidden">
            
            <img
            src={product.src}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-6 text-white 
                            opacity-0 group-hover:opacity-100 transition duration-300">
            
            <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="rounded-xl mb-6 bg-white px-10 py-3 text-sm font-semibold text-[#B88E2F] shadow hover:bg-[#B88E2F] hover:text-white">
                View Product
            </button>
            </div>

            {/* BADGE */}
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
        </div>
        </>
    )
}