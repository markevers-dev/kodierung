import clsx from "clsx";
import { Button } from "components";
import Link from "next/link";

export const Header = async ({ isHome = false }) => {
  return (
    <header
      className={clsx(
        "container w-full flex flex-row justify-between items-center py-4 md:py-6 px-6 md:px-20 border-b-[0.5px] border-[#edede3]/50 mb-[50px] sm:mb-[100px]"
      )}
    >
      <Link href="/" className="font-bold">
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
