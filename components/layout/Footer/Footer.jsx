import Link from "next/link";
import GitHubLogo from "public/icons/GitHubLogo";
import { Logo, FooterNavigation } from "components";

const FooterDivider = () => {
  return (
    <div className="h-0 w-3/4 border-t-[0.5px] border-[#edede3]/50 xl:hidden" />
  );
};

export const Footer = async ({}) => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-y-8 border-t-[0.5px] border-[#edede3]/50 bg-[#443b4a] px-6 py-4 2xl:flex-row">
      <Link href="/">
        <Logo size="medium" />
      </Link>
      <FooterNavigation />
      <div className="flex flex-col items-center justify-center gap-x-4 max-sm:gap-y-2 sm:flex-row">
        <p className="text-md text-center font-bold">
          &copy; 2024 Mark Evers. Licensed under the{" "}
          <Link
            href="https://github.com/markevers-dev/kodierung/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dfcaec] underline"
          >
            GNU General Public License v3.0
          </Link>
        </p>
        <Link
          href="https://github.com/markevers-dev/kodierung"
          target="_blank"
          className="self-center text-sm font-bold"
        >
          <GitHubLogo />
        </Link>
      </div>
    </footer>
  );
};
