import clsx from "clsx";
import { Button, Logo } from "components";
import Link from "next/link";
import { audiowide } from "public/fonts/fonts";

export const Header = async ({}) => {
  return (
    <header
      className={clsx(
        "container w-full flex flex-row justify-between items-center py-4 sm:py-6 px-6 sm:px-20 border-b-[0.5px] border-[#edede3]/50 mb-[50px] sm:mb-[100px]"
      )}
    >
      <Link href="/">
        <Logo size="large" />
      </Link>
      <nav className="max-sm:hidden"></nav>
      <Button
        content={{
          iconName: "Bars3",
        }}
        className="lg:hidden"
      />
      <Button
        content={{
          text: "Sign In",
          iconName: "ArrowRightEndOnRectangle",
        }}
        className="max-lg:hidden"
      />
    </header>
  );
};
