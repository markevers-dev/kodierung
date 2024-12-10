import clsx from "clsx";
import { Button } from "components";
import Link from "next/link";
import { audiowide } from "public/fonts/fonts";

export const Header = async ({}) => {
  return (
    <header
      className={clsx(
        "container w-full flex flex-row justify-between items-center py-4 sm:py-6 px-6 sm:px-20 border-b-[0.5px] border-[#edede3]/50 mb-[50px] sm:mb-[100px]"
      )}
    >
      <Link
        href="/"
        className={clsx(
          "font-bold text-4xl sm:text-5xl underline",
          audiowide.className
        )}
      >
        Kodierung
      </Link>
      <nav className="max-sm:hidden"></nav>
      <Button
        content={{
          iconName: "Bars3",
        }}
        className="sm:hidden"
      />
      <Button
        content={{
          text: "Sign In",
          iconName: "ArrowRightEndOnRectangle",
        }}
        className="max-sm:hidden"
      />
    </header>
  );
};
