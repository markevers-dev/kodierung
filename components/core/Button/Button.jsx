import { Button as H_Button } from "@headlessui/react";
import { Icon } from "components";
import clsx from "clsx";

export const Button = ({ className, onClick, content }) => {
  const { text, iconName, switchIconPosition } = content;

  return (
    <H_Button
      className={clsx(
        className,
        "gap-x-2 rounded-lg p-[2px] relative z-10 items-center justify-center overflow-hidden bg-[#edede3] active:text-[#8b479e] hover:bg-[#c8c8ab]",
        {
          "flex-row-reverse": switchIconPosition,
        }
      )}
      onClick={onClick}
    >
      <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#df97f4_20deg,transparent_120deg)]" />
      <div className="relative z-20 flex gap-x-2 items-center justify-center px-4 py-2 w-full h-full rounded-[0.40rem]  bg-[#edede3] text-[#2a005a] active:text-[#8b479e] hover:bg-[#c8c8ab] transition-all duration-300 font-bold text-md">
        {text}
        {iconName && <Icon name={iconName} size="medium" />}
      </div>
    </H_Button>
  );
};
