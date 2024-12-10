import { Button as H_Button } from "@headlessui/react";
import { Icon } from "components";
import clsx from "clsx";

export const Button = ({ className, onClick, content }) => {
  const { text, iconName, switchIconPosition } = content;

  return (
    <H_Button
      className={clsx(
        className,
        "flex gap-x-2 items-center justify-center px-4 py-2 rounded-md bg-[#edede3] text-[#2a005a] active:text-[#8b479e] hover:bg-[#c8c8ab] transition-all duration-100 font-bold text-md",
        { "flex-row-reverse": switchIconPosition }
      )}
      onClick={onClick}
    >
      {text}
      {iconName && <Icon name={iconName} size="medium" />}
    </H_Button>
  );
};
