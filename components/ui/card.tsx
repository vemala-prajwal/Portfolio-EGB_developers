import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn('glass-card rounded-3xl p-8 shadow-glow', className)} {...props} />;
}
