import Link from "next/link";
import { Button } from "components";

export const metadata = {
  title: "Forbidden",
  description: "You are not allowed to access this resource.",
};

export default function Forbidden() {
  return (
    <div className="container mb-[50px] flex flex-col items-center gap-y-8 px-6 text-center sm:mb-[100px] sm:px-20">
      <h2 className="text-3xl font-bold sm:text-5xl">Forbidden</h2>
      <p className="max-w-2xl text-xl font-bold sm:text-3xl">
        You are not authorized to access this resource. If you think this is
        wrong, please contact:{" "}
        <Link
          href="mailto:contact-markevers@proton.me"
          className="text-nowrap underline"
        >
          contact-markevers@proton.me
        </Link>
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
        className="flex-shrink-0"
      />
    </div>
  );
}
