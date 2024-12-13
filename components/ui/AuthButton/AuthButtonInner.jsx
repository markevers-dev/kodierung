"use client";

import { Button } from "components";
import { signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const handleSignOut = () => {
  signOut({ callbackUrl: "/" });
};

export const AuthButtonInner = ({
  className,
  variant = "signIn",
  pathnameOverride,
}) => {
  const pathname = usePathname();

  const handleSignIn = () => {
    signIn("github", {
      callbackUrl: pathnameOverride || pathname,
    });
  };

  return (
    <>
      {variant === "signOut" ? (
        <Button
          onClick={() => handleSignOut()}
          content={{
            text: `Sign out`,
            iconName: "ArrowLeftStartOnRectangle",
          }}
          className={className}
        />
      ) : (
        <>
          <Button
            onClick={handleSignIn}
            content={{
              text: "Sign in",
              iconName: "ArrowRightEndOnRectangle",
            }}
            className={clsx(className, "max-lg:hidden")}
          />
          <Button
            onClick={handleSignIn}
            content={{
              text: "",
              iconName: "ArrowRightEndOnRectangle",
            }}
            className={clsx(className, "lg:hidden")}
          />
        </>
      )}
    </>
  );
};
