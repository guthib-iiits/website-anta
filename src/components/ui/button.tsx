import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import React from 'react';

const buttonStyles = cva(
  'inline-flex items-center gap-2 rounded-full font-semibold transition-all focus-visible:focus-visible disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-neon-blue to-neon-magenta text-night px-5 py-3 shadow-glow hover:shadow-[0_0_35px_rgba(72,181,255,0.6)]',
        ghost: 'border border-white/10 text-white px-5 py-3 hover:border-neon-blue hover:text-neon-blue',
        subtle: 'bg-white/5 text-white px-4 py-2 hover:bg-white/10',
      },
      size: {
        sm: 'text-xs px-3 py-2',
        md: 'text-sm px-5 py-3',
        lg: 'text-base px-6 py-3.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
