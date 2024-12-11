"use client";
import { SessionProvider } from "next-auth/react";
import { AuthButtonInner } from "./AuthButtonInner";

export const AuthButton = ({ className }) => {
  return (
    <SessionProvider>
      <AuthButtonInner className={className} />
    </SessionProvider>
  );
};
