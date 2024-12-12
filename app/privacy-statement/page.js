import { Icon } from "components";

const ListItem = ({ text }) => {
  return (
    <li className="jsutify-center flex flex-row items-center gap-x-2">
      <Icon name="InformationCircle" size="medium" />
      {text}
    </li>
  );
};

const Page = async ({}) => {
  return (
    <div className="container mb-[50px] flex w-full flex-col space-y-4 px-6 sm:mb-[100px] sm:px-20">
      <h1 className="text-3xl font-bold sm:text-5xl">Privacy Statement</h1>
      <div className="flex flex-col space-y-4 text-xl font-bold sm:text-2xl">
        <p>
          Your privacy is important. This application does not store, process,
          or share any of your personal data. Here&apos;s how your information
          is handled:
        </p>
        <ul className="space-y-2">
          <ListItem
            text="OAuth: The app uses GitHub OAuth for authentication. No login
            credentials are stored; authentication is handled directly by
            GitHub."
          />
          <ListItem
            text="GitHub API: Any files or data displayed in the application are
            fetched directly from the GitHub API and are not stored on our
            servers."
          />
          <ListItem
            text="Cookies and Tracking: This app does not use cookies or any form of
            tracking."
          />
        </ul>
        <p>
          If you have any questions about privacy, feel free to reach out via
          the Support section.
        </p>
      </div>
    </div>
  );
};

export default Page;
