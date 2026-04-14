export const typography = {
  display: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },
  h1: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  h2: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h4: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  body: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em',
  },
  bodySmall: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em',
  },
  caption: {
    fontFamily: 'var(--font-satoshi)',
    fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
} as const;

export const colors = {
  bg: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    tertiary: 'var(--color-bg-tertiary)',
  },
  red: {
    primary: 'var(--color-red-primary)',
    light: 'var(--color-red-light)',
    dark: 'var(--color-red-dark)',
  },
  orange: {
    primary: 'var(--color-orange-primary)',
    light: 'var(--color-orange-light)',
    dark: 'var(--color-orange-dark)',
  },
  amber: {
    primary: 'var(--color-amber-primary)',
    light: 'var(--color-amber-light)',
    dark: 'var(--color-amber-dark)',
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    accent: 'var(--color-text-accent)',
  },
  border: {
    subtle: 'var(--color-border-subtle)',
    medium: 'var(--color-border-medium)',
    strong: 'var(--color-border-strong)',
  },
  glass: {
    bg: 'var(--color-glass-bg)',
    border: 'var(--color-glass-border)',
  },
} as const;

export const spacing = {
  '4xs': 'var(--space-4xs)',
  '3xs': 'var(--space-3xs)',
  '2xs': 'var(--space-2xs)',
  xs: 'var(--space-xs)',
  s: 'var(--space-s)',
  m: 'var(--space-m)',
  l: 'var(--space-l)',
  xl: 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
  '3xl': 'var(--space-3xl)',
  '4xl': 'var(--space-4xl)',
} as const;

export const gradients = {
  hero: 'var(--gradient-hero)',
  red: 'var(--gradient-red)',
  orange: 'var(--gradient-orange)',
  glow: 'var(--gradient-glow)',
} as const;

export const easing = {
  outExpo: 'var(--ease-out-expo)',
  outQuart: 'var(--ease-out-quart)',
  inOutQuint: 'var(--ease-in-out-quint)',
} as const;
