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

  const buttonProperties = {
    className: clsx(
      className,
      "group gap-x-2 rounded-lg p-[4px] relative z-10 items-center justify-center overflow-hidden",
      "bg-[#edede3] hover:bg-[#c8c8ab] transition-all duration-300",
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
      <div
        className={clsx(
          "relative z-20 flex h-full w-full items-center justify-center gap-x-2 rounded-[0.40rem] py-[calc(0.5rem-4px)]",
          "text-md bg-[#edede3] font-bold text-[#2a005a] transition-all duration-300 group-hover:bg-[#c8c8ab] group-active:text-[#8b479e]",
          { "px-1": !text && iconName },
          { "px-3": text },
        )}
      >
        {text}
        {iconName && <Icon name={iconName} size="medium" />}
      </div>
    </>
  );

  return (
    <>
      {url ? (
        <Link href={url.href} target={url.target} {...buttonProperties}>
          {buttonContent}
        </Link>
      ) : (
        <H_Button {...buttonProperties}>{buttonContent}</H_Button>
      )}
    </>
  );
};
