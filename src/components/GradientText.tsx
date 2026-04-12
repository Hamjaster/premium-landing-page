interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function GradientText({ children, className = '', as: Component = 'span' }: GradientTextProps) {
  return (
    <Component className={`text-gradient-gold ${className}`}>
      {children}
    </Component>
  );
}
