import clsx from "clsx";
import { Button, Logo, AuthButton } from "components";
import Link from "next/link";
import { getServerSession } from "next-auth";

export const Header = async ({}) => {
  const session = await getServerSession();
  const name = session?.user?.name;

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
      <div className="flex flex-row gap-x-4 items-center justify-center">
        {name && (
          <p className="text-md sm:text-lg font-bold max-sm:hidden">{name}</p>
        )}
        <AuthButton className="max-lg:hidden" />
        <Button
          content={{
            iconName: "Bars3",
          }}
          className="lg:hidden"
        />
      </div>
    </header>
  );
};
