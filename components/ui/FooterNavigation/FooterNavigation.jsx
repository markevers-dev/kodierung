import Link from "next/link";

export const FooterNavigation = async ({}) => {
  return (
    <nav className="flex flex-col sm:flex-row gap-x-8 gap-y-2 font-bold text-md">
      <Link
        href="/about"
        className="hover:text-[#ffff00] transition-colors duration-200"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="hover:text-[#ffff00] transition-colors duration-200"
      >
        Contact
      </Link>
      <Link
        href="/privacy-statement"
        className="hover:text-[#ffff00] transition-colors duration-200"
      >
        Privacy Statement
      </Link>
    </nav>
  );
};
