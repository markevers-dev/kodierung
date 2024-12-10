import Link from "next/link";
import GitHubLogo from "public/icons/GitHubLogo";
import { audiowide } from "public/fonts/fonts";
import clsx from "clsx";

export const Footer = async ({}) => {
  return (
    <footer className="container px-6 md:px-20 text-center w-full flex flex-col max-sm:space-y-4 sm:flex-row items-center justify-between py-4 border-t-[0.5px] border-[#edede3]/50">
      <Link
        href="/"
        className={clsx("font-bold text-3xl underline", audiowide.className)}
      >
        Kodierung
      </Link>
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
