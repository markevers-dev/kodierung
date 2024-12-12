import { icons, sizes } from "./Icon.helpers";
import clsx from "clsx";

export const Icon = ({ className, name, size, ...iconProperties }) => {
  if (!name || !icons[name]) throw new Error(`Icon ${name} does not exist`);

  const IconComponent = icons[name];

  return (
    <IconComponent.type
      {...IconComponent.props}
      {...iconProperties}
      className={clsx(className, sizes[size] || "size-4", "transition-colors")}
    />
  );
};
