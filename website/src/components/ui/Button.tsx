import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost" | "glass" | "mesh";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-premium-gold/50 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      solid: "bg-premium-gold text-pure-white hover:bg-premium-gold/90 shadow-[0_0_15px_rgba(209,176,90,0.3)]",
      outline: "border border-premium-gold text-premium-gold hover:bg-premium-gold/10",
      ghost: "text-foreground hover:bg-midnight-slate/5",
      glass: "bg-white/10 backdrop-blur-md text-pure-white border border-white/20 hover:bg-white/20 shadow-xl",
      mesh: "bg-white/40 backdrop-blur-md text-midnight-slate border border-white/40 shadow-lg hover:shadow-xl hover:bg-white/50 relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-primary/20 before:to-cta/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
