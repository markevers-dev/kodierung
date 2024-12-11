import { Button } from "components";

export const Hero = async ({}) => {
  return (
    <section className="flex flex-col space-y-8 sm:flex-row items-center justify-center container px-6 sm:px-20 mb-[50px sm:mb-[100px]">
      <div className="flex flex-col gap-y-4 text-balance">
        <div className="font-bold text-3xl sm:text-5xl">
          Code Smarter, Anywhere: Your GitHub IDE in the Browser.
        </div>
        <div className="font-bold text-xl sm:text-2xl">
          Edit, collaborate, and commit directly to your GitHub repos—no setup,
          no hassle
        </div>
      </div>
      <Button
        content={{
          url: {
            href: "/codingPog",
            target: "_self",
          },
          text: "Start Coding!",
          iconName: "CodeBracket",
        }}
        animateBorder
        className="flex-shrink-0"
      />
    </section>
  );
};
