import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { ALL_NOVELS } from "./data/productData";
import libraryImage from "./assets/library_bg.jpg";
import ProductCard from "./Component/ProductCard";

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalProducts = ALL_NOVELS.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = ALL_NOVELS.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#FCF8F3] text-[#3A3A3A]">
      <Header />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url(${libraryImage})`,
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
            <span>
              Showing {startIndex + 1}–
              {Math.min(startIndex + itemsPerPage, totalProducts)} of{" "}
              {totalProducts} results
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span>Show</span>
              <div className="flex h-12 w-14 items-center justify-center bg-white text-[#9F9F9F]">
                {itemsPerPage}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Sort by</span>
              <div className="flex h-12 min-w-[150px] items-center bg-white px-5 text-[#9F9F9F]">
                Default
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`rounded-xl px-6 py-3 transition ${
              currentPage === 1
                ? "cursor-not-allowed bg-[#F9F1E7] text-[#9F9F9F]"
                : "bg-[#F9F1E7] text-black hover:bg-[#b88e2f] hover:text-white"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`rounded-xl px-6 py-3 transition ${
                  currentPage === pageNumber
                    ? "bg-[#b88e2f] text-white"
                    : "bg-[#F9F1E7] text-black hover:bg-[#b88e2f] hover:text-white"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`rounded-xl px-6 py-3 transition ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-[#F9F1E7] text-[#9F9F9F]"
                : "bg-[#F9F1E7] text-black hover:bg-[#b88e2f] hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}