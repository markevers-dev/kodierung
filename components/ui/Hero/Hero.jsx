import { Button } from "components";

export const Hero = async ({}) => {
  return (
    <section className="mb-[50px container flex flex-col items-center justify-center space-y-8 px-6 sm:mb-[100px] sm:flex-row sm:px-20">
      <div className="flex flex-col gap-y-4 text-balance">
        <div className="text-3xl font-bold sm:text-5xl">
          Code Smarter, Anywhere: Your GitHub IDE in the Browser.
        </div>
        <div className="text-xl font-bold sm:text-2xl">
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
