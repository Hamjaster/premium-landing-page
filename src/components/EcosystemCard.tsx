import type { ReactNode } from 'react';

interface EcosystemCardProps {
  icon: ReactNode;
  title: string;
}

export default function EcosystemCard({ icon, title }: EcosystemCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Subtle top-left highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Subtle bottom-right edge highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background: 'linear-gradient(315deg, rgba(255,255,255,0.06) 0%, transparent 40%)',
        }}
      />

      <div className="relative flex items-center gap-5 p-6">
        {/* Icon container */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div className="text-[#c9a96e]">{icon}</div>
        </div>

        {/* Divider */}
        <div className="h-10 w-px shrink-0 bg-white/10" />

        {/* Text */}
        <p className="text-[1.05rem] font-light leading-[1.45] tracking-[0.01em] text-white/90">
          {title}
        </p>
      </div>
    </div>
  );
}
