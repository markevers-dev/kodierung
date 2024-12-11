import { getUsername } from "utils/serverSession";

const Page = async ({}) => {
  const name = await getUsername();

  return (
    <div className="container px-6 sm:px-20 mb-[50px] sm:mb-[100px] w-full flex flex-col space-y-4">
      <h1 className="font-bold text-3xl sm:text-5xl">About Kodierung</h1>
      <div className="flex flex-col space-y-2 font-bold text-xl sm:text-2xl">
        <p>
          Welcome to our platform{name && `, ${name}`}! We’re dedicated to
          providing a seamless and secure experience for developers and tech
          enthusiasts. Our goal is to build a website where users can quickly
          access their repositories and update their code. <br />
        </p>
        <p>
          We’ve made logging in easy and hassle-free, integrating GitHub
          authentication to let you get started right away. Whether you’re a
          developer looking to collaborate or a tech enthusiast eager to explore
          new content, we’ve designed our platform with your convenience in
          mind.
        </p>
        <p>
          With cutting-edge technologies like Next.js 15 and robust
          authentication systems, we focus on security, performance, and
          user-friendly interactions. You’ll find that our website works
          effortlessly across devices, providing a smooth experience every time
          you log in.
        </p>
        <p>
          Thank you for being part of our community. We hope you enjoy exploring
          and connecting with us!
        </p>
      </div>
    </div>
  );
};

export default Page;
