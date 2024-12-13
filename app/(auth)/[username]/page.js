import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const usernameCheck = (parameterName, sessionName) => {
  if (parameterName !== sessionName) notFound();
};

const Page = async ({ params }) => {
  const session = await getServerSession();
  if (!session) notFound();

  const user = session.user;
  const { username } = await params;
  usernameCheck(username, user.name);

  return <div>{username}</div>;
};

export const generateMetadata = async ({ params }) => {
  const { username } = await params;
  return {
    title: username,
    description: `${username}'s personal overview`,
  };
};

export default Page;
