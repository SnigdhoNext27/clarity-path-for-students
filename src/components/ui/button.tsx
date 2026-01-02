import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border-2 border-border bg-transparent hover:bg-secondary hover:border-accent/50 text-foreground shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-secondary/80 hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline hover:text-highlight",
        accent: "bg-gradient-to-r from-accent to-highlight text-accent-foreground hover:opacity-90 shadow-md hover:shadow-lg hover:shadow-accent/20 font-semibold",
        soft: "bg-soft text-soft-foreground hover:bg-soft/80 shadow-sm",
        hero: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 font-semibold",
        "hero-outline": "border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/5 hover:border-primary/40 shadow-sm font-semibold",
        highlight: "bg-highlight text-highlight-foreground hover:bg-highlight/90 shadow-sm hover:shadow-md hover:shadow-highlight/20",
        glass: "bg-background/50 backdrop-blur-md border border-border/50 text-foreground hover:bg-background/70 hover:border-accent/30",
        subtle: "bg-soft/80 text-foreground/80 hover:bg-soft hover:text-foreground",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-6 text-base",
        xl: "h-14 rounded-2xl px-8 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };