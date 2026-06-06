import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70',
        variant === 'primary'
          ? 'bg-gradient-to-r from-accent to-accent2 text-slate-950 shadow-glow hover:brightness-105'
          : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}
