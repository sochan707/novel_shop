export default function Footer() {
  const links = ["Home", "Shop", "About", "Contact"];
  const helpLinks = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <footer className="bg-white px-6 py-12 md:px-16 lg:px-20 border-t border-[#f0ece6]">
      {/* Top Section */}
      <div className="flex flex-wrap gap-14 mb-10">
        {/* Brand */}
        <div className="flex-[1.5] min-w-[180px]">
          <p className="text-[20px] font-bold text-[#2d2d2d] mb-5">
            NovelShop.
          </p>
          <p className="text-[13px] text-[#9f9f9f] leading-7">
            our one-stop destination for books, <br />
            stories, and endless adventures.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 min-w-[120px]">
          <p className="text-[13px] text-[#9f9f9f] mb-5">Links</p>
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block mb-3 text-[14px] font-medium text-[#333] hover:text-[#F2A65A] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Help */}
        <div className="flex-1 min-w-[120px]">
          <p className="text-[13px] text-[#9f9f9f] mb-5">Help</p>
          {helpLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block mb-3 text-[14px] font-medium text-[#333] hover:text-[#F2A65A] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f0ece6] pt-5">
        <p className="text-[13px] text-[#9f9f9f]">
          2026 NovelShop. All rights reserved
        </p>
      </div>
    </footer>
  );
}
