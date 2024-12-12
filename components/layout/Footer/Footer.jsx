import Link from "next/link";
import GitHubLogo from "public/icons/GitHubLogo";
import { Logo, FooterNavigation } from "components";

const FooterDivider = () => {
  return (
    <div className="h-0 w-3/4 border-t-[0.5px] border-[#edede3]/50 lg:hidden" />
  );
};

export const Footer = async ({}) => {
  return (
    <footer className="container flex w-full flex-col items-center justify-between space-y-4 border-t-[0.5px] border-[#edede3]/50 px-6 py-4 md:px-20 lg:flex-row">
      <Link href="/">
        <Logo size="medium" />
      </Link>
      <FooterDivider />
      <FooterNavigation />
      <FooterDivider />
      <div className="flex flex-col items-center justify-center gap-x-4 max-sm:space-y-2 sm:flex-row">
        <p className="text-md font-bold">&copy; 2024 GPL-3.0 license</p>
        <Link
          href="https://github.com/markevers-dev/kodierung"
          target="_blank"
          className="text-sm font-bold"
        >
          <GitHubLogo />
        </Link>
      </div>
    </footer>
  );
};
