"use client";

import { Button } from "components";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const handleSignOut = () => {
  signOut({ callbackUrl: "/" });
};

export const AuthButtonInner = ({ className }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleSignIn = () => {
    signIn("github", {
      callbackUrl: pathname,
    });
  };

  return (
    <>
      {session ? (
        <Button
          onClick={() => handleSignOut()}
          content={{
            text: `Sign out`,
            iconName: "ArrowRightEndOnRectangle",
          }}
          className={className}
        />
      ) : (
        <Button
          onClick={handleSignIn}
          content={{
            text: "Sign in",
            iconName: "ArrowRightEndOnRectangle",
          }}
          className={className}
        />
      )}
    </>
  );
};
