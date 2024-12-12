import Link from "next/link";

export const FooterNavigation = async ({}) => {
  return (
    <nav className="text-md flex flex-col gap-x-8 gap-y-2 font-bold sm:flex-row">
      <Link
        href="/about"
        className="transition-colors duration-200 hover:text-[#8b479e]"
      >
        About
      </Link>
      <Link
        href="/support"
        className="transition-colors duration-200 hover:text-[#8b479e]"
      >
        Support
      </Link>
      <Link
        href="/privacy-statement"
        className="transition-colors duration-200 hover:text-[#8b479e]"
      >
        Privacy Statement
      </Link>
    </nav>
  );
};
