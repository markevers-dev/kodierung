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
      }
    ),
    onClick: onClick,
  };

  const buttonContent = (
    <>
      {animateBorder && (
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#8b479e_90deg,transparent_190deg)]" />
      )}
      <div className="relative z-20 flex gap-x-2 items-center justify-center px-[calc(1rem-4px)] py-[calc(0.5rem-4px)] w-full h-full rounded-[0.40rem]  bg-[#edede3] text-[#2a005a] group-active:text-[#8b479e] group-hover:bg-[#c8c8ab] transition-all duration-300 font-bold text-md">
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
