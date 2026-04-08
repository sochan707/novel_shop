export default function SingleProduct() {
  const thumbnails = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
      alt: 'Asgaard sofa thumbnail 1',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
      alt: 'Asgaard sofa thumbnail 2',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80',
      alt: 'Asgaard sofa thumbnail 3',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=400&q=80',
      alt: 'Asgaard sofa thumbnail 4',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'Syltherine',
      category: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      oldPrice: 'Rp 3.500.000',
      badge: '-30%',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      badgeColor: 'bg-red-400',
    },
    {
      id: 2,
      name: 'Leviosa',
      category: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      image:
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Lolito',
      category: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      badge: '-50%',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      badgeColor: 'bg-red-400',
    },
    {
      id: 4,
      name: 'Respira',
      category: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      badge: 'New',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      badgeColor: 'bg-teal-400',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-b bg-[#f9f1e7] px-6 py-5 md:px-14">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#9f9f9f]">
            <span>Home</span>
            <span className="text-base text-[#5f5f5f]">›</span>
            <span>Shop</span>
            <span className="text-base text-[#5f5f5f]">›</span>
            <div className="mx-1 h-6 w-px bg-[#9f9f9f]" />
            <span className="text-[#1f1f1f]">Asgaard sofa</span>
          </div>
        </div>

        <section className="px-6 py-10 md:px-14 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[90px_420px_1fr]">
            <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
              {thumbnails.map((item) => (
                <button
                  key={item.id}
                  className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#f9f1e7] p-2 transition hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 flex items-center justify-center rounded-2xl bg-[#f9f1e7] p-6 lg:order-2 lg:h-[500px]">
              <img
                src={galleryImages[0]}
                alt="Asgaard sofa"
                className="max-h-full w-full rounded-2xl object-contain"
              />
            </div>

            <div className="order-3 max-w-[560px]">
              <h1 className="text-3xl font-semibold md:text-5xl">Asgaard sofa</h1>
              <p className="mt-3 text-2xl font-medium text-[#9f9f9f]">Rs. 250,000.00</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex text-[#ffc700]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="h-5 w-px bg-[#9f9f9f]" />
                <span className="text-sm text-[#9f9f9f]">5 Customer Review</span>
              </div>

              <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#1f1f1f]">
                Setting the bar as one of the loudest speakers in its class, the
                kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>

              <div className="mt-8">
                <p className="text-sm text-[#9f9f9f]">Size</p>
                <div className="mt-3 flex gap-4">
                  <button className="rounded-lg bg-[#b88e2f] px-4 py-2 text-sm text-white">
                    L
                  </button>
                  <button className="rounded-lg bg-[#f9f1e7] px-4 py-2 text-sm text-[#1f1f1f]">
                    XL
                  </button>
                  <button className="rounded-lg bg-[#f9f1e7] px-4 py-2 text-sm text-[#1f1f1f]">
                    XS
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-[#9f9f9f]">Color</p>
                <div className="mt-3 flex gap-4">
                  <button className="h-8 w-8 rounded-full bg-[#816dfa]" />
                  <button className="h-8 w-8 rounded-full bg-black" />
                  <button className="h-8 w-8 rounded-full bg-[#b88e2f]" />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-6 rounded-xl border border-[#9f9f9f] px-4 py-3">
                  <button className="text-lg">-</button>
                  <span>1</span>
                  <button className="text-lg">+</button>
                </div>

                <button className="rounded-xl border border-black px-8 py-3 text-base font-medium transition hover:bg-black hover:text-white">
                  Add To Cart
                </button>

                <button className="rounded-xl border border-black px-8 py-3 text-base font-medium transition hover:bg-black hover:text-white">
                  + Compare
                </button>
              </div>

              <div className="mt-10 border-t border-[#d9d9d9] pt-10 text-sm text-[#9f9f9f]">
                <div className="grid grid-cols-[80px_20px_1fr] gap-y-4">
                  <span>SKU</span>
                  <span>:</span>
                  <span>SS001</span>

                  <span>Category</span>
                  <span>:</span>
                  <span>Sofas</span>

                  <span>Tags</span>
                  <span>:</span>
                  <span>Sofa, Chair, Home, Shop</span>

                  <span>Share</span>
                  <span>:</span>
                  <div className="flex gap-4 text-black">
                    <span>f</span>
                    <span>in</span>
                    <span>◉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9d9d9] px-6 py-12 md:px-14 lg:px-20">
          <div className="flex flex-wrap justify-center gap-8 text-lg md:text-2xl">
            <button className="font-semibold text-black">Description</button>
            <button className="text-[#9f9f9f]">Additional Information</button>
            <button className="text-[#9f9f9f]">Reviews [5]</button>
          </div>

          <div className="mx-auto mt-10 max-w-[1026px] space-y-6 text-center text-sm leading-7 text-[#9f9f9f] md:text-left">
            <p>
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#f9f1e7] p-6 md:h-[350px]"
              >
                <img
                  src={image}
                  alt={`Asgaard sofa view ${index + 1}`}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-14 md:px-14 lg:px-20">
          <h2 className="text-center text-3xl font-semibold">Related Products</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group overflow-hidden bg-[#f4f5f7]">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span
                      className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium text-white ${product.badgeColor || 'bg-red-400'}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-[#898989]">{product.category}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-semibold">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-[#b0b0b0] line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="min-w-[245px] border border-[#b88e2f] px-8 py-3 text-sm font-medium text-[#b88e2f] transition hover:bg-[#b88e2f] hover:text-white">
              Show More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
