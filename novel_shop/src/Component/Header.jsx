import { useNavigate } from "react-router-dom";

export default function Header({ cartCount = 0 }) {
  const links = ["Home", "Shop", "Contact", "Blog"];
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-[#6F8F72] border-b border-[#6F8F72]">
      {/* Logo */}
      <a href="/" className="no-underline">
        <span className="text-[20px] font-bold text-[#FFFFF0]">
          NovelShop
        </span>
      </a>

      {/* Nav */}
      <nav className="flex gap-5">
        {links.map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-[#FFFFF0] no-underline transition-colors duration-200 hover:text-[#F2A65A] hover:border-b hover:border-[#F2A65A]"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex gap-3">
        <button
          aria-label="Account"
          className="bg-none border-none cursor-pointer text-[#FFFFF0] transition-colors duration-200 hover:text-[#F2A65A]"
        >
          <span className="material-icons">person_outline</span>
        </button>

        <button
          aria-label="Search"
          className="bg-none border-none cursor-pointer text-[#FFFFF0] transition-colors duration-200 hover:text-[#F2A65A]"
        >
          <span className="material-icons">search</span>
        </button>

        <button
          aria-label="Wishlist"
          className="bg-none border-none cursor-pointer text-[#FFFFF0] transition-colors duration-200 hover:text-[#F2A65A]"
        >
          <span className="material-icons">favorite_border</span>
        </button>

        <div className="relative">
          <button
            onClick={() => navigate("/checkout")}
            aria-label="Cart"
            className="bg-none border-none cursor-pointer text-[#FFFFF0] transition-colors duration-200 hover:text-[#F2A65A]"
          >
            <span className="material-icons">shopping_bag</span>
          </button>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[12px] px-1.5 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
