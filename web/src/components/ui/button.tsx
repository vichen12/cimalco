import { cva, type VariantProps } from "class-variance-authority";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.18em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-charcoal px-6 py-4 text-sm text-white hover:bg-black",
        secondary:
          "border border-white/20 bg-white/8 px-6 py-4 text-sm text-white/76 hover:bg-white/14 hover:text-white",
        accent:
          "bg-brand-yellow px-6 py-4 text-sm text-brand-charcoal hover:opacity-90",
        outline:
          "border border-white/22 bg-transparent px-6 py-4 text-sm text-white/70 hover:bg-white/8 hover:text-white",
        ghost:
          "px-4 py-3 text-xs text-white/56 hover:bg-white/8 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    const { className, variant, children, href, ...rest } = props;

    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { className, variant, children, ...rest } = props;

  return (
    <button className={cn(buttonVariants({ variant }), className)} {...rest}>
      {children}
    </button>
  );
}
