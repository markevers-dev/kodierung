import Link from "next/link";

export const FooterNavigation = async ({}) => {
  return (
    <nav className="text-md flex flex-col gap-x-8 gap-y-2 font-bold sm:flex-row">
      <Link
        href="/about"
        className="transition-colors duration-200 hover:text-[#ffff00]"
      >
        About
      </Link>
      <Link
        href="/support"
        className="transition-colors duration-200 hover:text-[#ffff00]"
      >
        Support
      </Link>
      <Link
        href="/privacy-statement"
        className="transition-colors duration-200 hover:text-[#ffff00]"
      >
        Privacy Statement
      </Link>
    </nav>
  );
};
