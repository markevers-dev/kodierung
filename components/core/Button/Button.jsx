import { Button as H_Button } from "@headlessui/react";
import { Icon } from "components";
import clsx from "clsx";
import Link from "next/link";

export const Button = ({
  className,
  onClick,
  content,
  animateBorder = false,
}) => {
  const { text, iconName, switchIconPosition, url } = content;

  const buttonProps = {
    className: clsx(
      className,
      "group gap-x-2 rounded-lg p-[4px] relative z-10 items-center justify-center overflow-hidden bg-[#edede3] hover:bg-[#c8c8ab] transition-all duration-300",
      {
        "flex-row-reverse": switchIconPosition,
      },
    ),
    onClick: onClick,
  };

  const buttonContent = (
    <>
      {animateBorder && (
        <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#8b479e_90deg,transparent_190deg)]" />
      )}
      <div className="text-md relative z-20 flex h-full w-full items-center justify-center gap-x-2 rounded-[0.40rem] bg-[#edede3] px-[calc(1rem-4px)] py-[calc(0.5rem-4px)] font-bold text-[#2a005a] transition-all duration-300 group-hover:bg-[#c8c8ab] group-active:text-[#8b479e]">
        {text}
        {iconName && <Icon name={iconName} size="medium" />}
      </div>
    </>
  );

  return (
    <>
      {url ? (
        <Link href={url.href} target={url.target} {...buttonProps}>
          {buttonContent}
        </Link>
      ) : (
        <H_Button {...buttonProps}>{buttonContent}</H_Button>
      )}
    </>
  );
};
