import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 w-full rounded-lg border bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-slate-300 focus:border-brand focus:ring-brand/40",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
