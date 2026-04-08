import Header from "./Component/Header";

export default function FurniroShopPage() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      badge: "-30%",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "",
      badge: "",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
      highlight: true,
    },
    {
      id: 3,
      name: "Lolito",
      subtitle: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      badge: "-50%",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      badge: "New",
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const allProducts = Array.from({ length: 16 }, (_, index) => {
    const item = products[index % products.length];
    return { ...item, id: index + 1, highlight: index === 1 };
  });

  return (
    <div className="min-h-screen bg-[#FCF8F3] text-[#3A3A3A]">
      {/* <header className="border-b border-[#E8E2D8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black text-[#B88E2F]">△</div>
            <h1 className="text-3xl font-bold tracking-tight text-black">Furniro</h1>
          </div>

          <nav className="hidden items-center gap-12 text-sm font-medium text-black md:flex">
            <a href="#" className="hover:text-[#B88E2F]">Home</a>
            <a href="#" className="hover:text-[#B88E2F]">Shop</a>
            <a href="#" className="hover:text-[#B88E2F]">About</a>
            <a href="#" className="hover:text-[#B88E2F]">Contact</a>
          </nav>

          <div className="flex items-center gap-5 text-xl text-black">
            <span>👤</span>
            <span>🔍</span>
            <span>♡</span>
            <span>🛒</span>
          </div>
        </div>
      </header> */}
    <Header/>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
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
          {allProducts.map((product, index) => (
            <div key={product.id} className="group overflow-hidden bg-[#F4F5F7] shadow-sm">
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {product.badge && (
                  <div
                    className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-xs font-medium text-white ${
                      product.isNew ? "bg-[#2EC1AC]" : "bg-[#E97171]"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {index === 1 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-6 text-white">
                    <button className="mb-6 bg-white px-10 py-3 text-sm font-semibold text-[#B88E2F] shadow">
                      Add to cart
                    </button>
                    <div className="flex gap-4 text-sm">
                      <span>↗️ Share</span>
                      <span>⇄ Compare</span>
                      <span>♡ Like</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-1 px-4 py-4">
                <h3 className="text-2xl font-semibold leading-none">{product.name}</h3>
                <p className="text-sm text-[#898989]">{product.subtitle}</p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xl font-semibold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-[#B0B0B0] line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button className="h-14 w-14 rounded-xl bg-[#B88E2F] text-lg font-medium text-white">
            1
          </button>
          <button className="h-14 w-14 rounded-xl bg-[#F9F1E7] text-lg font-medium text-black">
            2
          </button>
          <button className="h-14 w-14 rounded-xl bg-[#F9F1E7] text-lg font-medium text-black">
            3
          </button>
          <button className="rounded-xl bg-[#F9F1E7] px-8 py-4 text-lg font-medium text-black">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}