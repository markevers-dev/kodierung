import { Button } from "components";

export const metadata = {
  title: "404",
};

const NotFound = async () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-y-8 px-6 sm:px-20">
      <h1 className="text-4xl font-bold italic sm:text-5xl">404</h1>
      <p className="text-balance text-center text-xl font-bold sm:text-2xl">
        It looks like that page cannot be found!
      </p>
      <Button
        content={{
          text: "Go back to the homepage",
          url: {
            href: "/",
            target: "_self",
          },
          iconName: "ArrowUTurnLeft",
        }}
      />
    </div>
  );
};

export default NotFound;
