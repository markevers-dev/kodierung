import Link from "next/link";
import GitHubLogo from "public/icons/GitHubLogo";
import { Logo, FooterNavigation } from "components";

export const Footer = async ({}) => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-x-12 gap-y-4 px-6 py-4 2xl:flex-row">
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
          role="button"
          aria-label="View on GitHub"
        >
          <GitHubLogo />
        </Link>
      </div>
    </footer>
  );
};
