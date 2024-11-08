import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded text-sm font-medium transition-all duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      look: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border bg-background hover:bg-accent",
        ghost: "hover:bg-accent",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      look: "primary",
      size: "md",
    },
  },
);

type ButtonProps = (
  | (PropsOf<"button"> & { asChild?: false | undefined })
  | (PropsOf<"div"> & { asChild: true })
) &
  VariantProps<typeof buttonVariants>;

export const Button = component$<ButtonProps>(({ size, look, asChild, ...props }) => {
  const Comp = asChild ? "div" : "button";
  return (
    <Comp 
      {...(props as any)} 
      class={cn(buttonVariants({ size, look }), props.class)}
    >
      <Slot />
    </Comp>
  );
});
