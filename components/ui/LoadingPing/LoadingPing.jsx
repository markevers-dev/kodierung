import clsx from "clsx";

export const LoadingPing = ({
  color = "white",
  size = "large",
  whatIsLoading,
}) => {
  return (
    <span
      className={clsx(
        { "bg-[#2a005a]/25": color === "orange" },
        { "bg-[#edede3]/25": color === "white" },
        { "h-16 w-16": size === "large" },
        { "h-8 w-8": size === "small" },
        "relative inline-flex animate-ping rounded-full",
      )}
      role="status"
      aria-label={`Loading ${whatIsLoading}...`}
    />
  );
};
