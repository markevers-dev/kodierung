import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextAuth]";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/");

    return <>{children}</>;
  } catch (error) {
    console.error(error);
  }
};

export default Layout;
