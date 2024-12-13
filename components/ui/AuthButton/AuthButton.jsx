"use client";
import { SessionProvider } from "next-auth/react";
import { AuthButtonInner } from "./AuthButtonInner";

export const AuthButton = ({ className, variant, pathnameOverride }) => {
  return (
    <SessionProvider>
      <AuthButtonInner
        className={className}
        variant={variant}
        pathnameOverride={pathnameOverride}
      />
    </SessionProvider>
  );
};
