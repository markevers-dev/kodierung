import Link from "next/link";
import GitHubLogo from "public/icons/GitHubLogo";
import { Logo, FooterNavigation } from "components";

const FooterDivider = () => {
  return (
    <div className="w-3/4 h-0 border-t-[0.5px] border-[#edede3]/50 lg:hidden" />
  );
};

export const Footer = async ({}) => {
  return (
    <footer className="container px-6 md:px-20 text-center w-full flex flex-col space-y-4 lg:flex-row items-center justify-between py-4 border-t-[0.5px] border-[#edede3]/50">
      <Link href="/">
        <Logo size="medium" />
      </Link>
      <FooterDivider />
      <FooterNavigation />
      <FooterDivider />
      <div className="flex flex-col max-sm:space-y-2 sm:flex-row gap-x-4 items-center justify-center">
        <p className="font-bold text-md">&copy; 2024 GPL-3.0 license</p>
        <Link
          href="https://github.com/markevers-dev/kodierung"
          target="_blank"
          className="font-bold text-sm"
        >
          <GitHubLogo />
        </Link>
      </div>
    </footer>
  );
};
