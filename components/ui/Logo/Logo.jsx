import { audiowide } from "public/fonts/fonts";
import clsx from "clsx";

const sizes = {
  small: "text-xl sm:text-2xl",
  medium: "text-2xl sm:text-3xl",
  large: "text-4xl sm:text-5xl",
};

export const Logo = async ({ className, size, ...logoProps }) => {
  return (
    <span
      {...logoProps}
      aria-label="Kodierung Logo"
      className={clsx(
        className,
        audiowide.className,
        sizes[size] || sizes.medium,
        "pointer-events-none font-bold uppercase underline",
      )}
    >
      Kodierung
    </span>
  );
};
