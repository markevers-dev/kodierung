import { Accordion } from "components";
import { supportFAQData } from "config/supportFAQData";
import Link from "next/link";

const Page = async ({}) => {
  return (
    <div className="mb-[50px] flex w-full flex-col space-y-8 sm:mb-[100px]">
      <h1 className="container px-6 text-3xl font-bold sm:px-20 sm:text-5xl">
        Support
      </h1>
      <div className="container space-y-2 px-6 text-xl font-bold sm:px-20">
        <p>
          If you have any questions, feedback, or encounter any issues, feel
          free to reach out. Your input is greatly appreciated!
        </p>
        <div>
          <span>Email: </span>{" "}
          <Link href="mailto:contact-markevers@proton.me" className="underline">
            contact-markevers@proton.me
          </Link>
        </div>
      </div>
      <Accordion title="FAQ" items={supportFAQData} />
    </div>
  );
};

export default Page;
