import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-2xl text-card-foreground transition-all duration-300 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card border border-border/50 shadow-sm",
        elevated: "bg-card border border-border/30 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        glass: "backdrop-blur-xl bg-card/80 border border-border/40 shadow-sm",
        accent: "bg-accent/5 border border-accent/20 shadow-sm hover:border-accent/40",
        highlight: "bg-highlight/5 border border-highlight/20 shadow-sm hover:border-highlight/40",
        interactive: "bg-card border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 cursor-pointer",
        soft: "bg-soft/50 border border-soft/30 shadow-sm hover:bg-soft/60",
        peach: "bg-gradient-to-br from-peach-50 to-peach-100/50 border border-peach-200/50 shadow-sm",
        gradient: "bg-gradient-to-br from-card to-secondary/30 border border-border/30 shadow-md",
        ghost: "bg-transparent border border-border/20 hover:bg-secondary/30",
        outline: "bg-transparent border-2 border-border hover:border-accent/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-5 sm:p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg sm:text-xl font-display font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm sm:text-base text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 sm:p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 sm:p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };