import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
}

const variants: Record<AlertVariant, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-800",
  success: "border-green-200 bg-green-50 text-green-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-red-200 bg-red-50 text-red-800",
};

export function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={cn("rounded-lg border px-4 py-3 text-sm", variants[variant], className)} {...props}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div className="opacity-90">{children}</div>
    </div>
  );
}
