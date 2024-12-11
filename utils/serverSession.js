"use server";

import { getServerSession } from "next-auth";

export const getUsername = async () => {
  const session = await getServerSession();
  return session?.user?.name;
};
