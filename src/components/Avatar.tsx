import { cn } from "../lib/cn";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, src, size = "md", className }: AvatarProps) {
  return src ? (
    <img
      src={src}
      alt={name}
      className={cn("rounded-full object-cover", sizes[size], className)}
    />
  ) : (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand/10 font-semibold text-brand",
        sizes[size],
        className
      )}
      aria-label={name}
    >
      {initials(name)}
    </span>
  );
}
