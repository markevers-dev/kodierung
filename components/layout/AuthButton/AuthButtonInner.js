"use client";

import { Button } from "components";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const AuthButtonInner = ({ className }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  router.prefetch("/");

  const handleSignOut = () => {
    signOut();
    if (pathname !== "/") router.push("/");
  };

  return (
    <>
      {!session ? (
        <Button
          onClick={() => signIn("github")}
          content={{
            text: "Sign in",
            iconName: "ArrowRightEndOnRectangle",
          }}
          className={className}
        />
      ) : (
        <Button
          onClick={() => handleSignOut()}
          content={{
            text: `Sign out ${session.user.name}`,
            iconName: "ArrowRightEndOnRectangle",
          }}
          className={className}
        >
          Sign in with {provider}
        </Button>
      )}
    </>
  );
};
