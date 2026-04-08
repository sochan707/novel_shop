import Footer from "./Component/Footer";
import Header from "./Component/Header";
import {ALL_NOVELS} from "./data/productData"
import libraryImage from "./assets/library_bg.jpg"
import ProductCard from "./Component/ProductCard";

export default function FurniroShopPage() {

  const allProducts = Array.from({ length: 16 }, (_, index) => {
    const item = ALL_NOVELS[index % ALL_NOVELS.length];
    return { ...item, id: index + 1, highlight: index === 1 };
  });

  return (
    <div className="min-h-screen bg-[#FCF8F3] text-[#3A3A3A]">
      <Header/>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url(${libraryImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex h-[260px] max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-10">
          <h2 className="text-5xl font-semibold text-black">Shop</h2>
          <p className="mt-3 text-sm text-black">
            <span className="font-medium">Home</span>
            <span className="mx-2">&gt;</span>
            <span>Shop</span>
          </p>
        </div>
      </section>

      <section className="border-b border-[#E8E2D8] bg-[#F9F1E7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#3A3A3A]">
            <button className="flex items-center gap-2 font-medium">
              <span>☰</span>
              <span>Filter</span>
            </button>
            <span>⬛️⬛️</span>
            <span>☷</span>
            <div className="h-8 w-px bg-[#9F9F9F]" />
            <span>Showing 1–16 of 32 results</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span>Show</span>
              <div className="flex h-12 w-14 items-center justify-center bg-white text-[#9F9F9F]">
                16
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Short by</span>
              <div className="flex h-12 min-w-[150px] items-center bg-white px-5 text-[#9F9F9F]">
                Default
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  );
}