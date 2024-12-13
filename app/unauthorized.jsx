import { AuthButton } from "components";

export const metadata = {
  title: "Unauthorized",
  description: "Please log in to access this page.",
};

const Unauthorized = async () => {
  return (
    <div className="container mb-[50px] flex flex-col items-center gap-y-8 px-6 sm:mb-[100px] sm:px-20">
      <h2 className="text-3xl font-bold sm:text-5xl">Unauthorized</h2>
      <p className="text-xl font-bold sm:text-2xl">
        Please log in to access this page.
      </p>
      <AuthButton pathnameOverride="/" />
    </div>
  );
};

export default Unauthorized;
