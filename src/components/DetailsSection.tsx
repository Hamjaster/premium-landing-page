import { FadeIn } from './FadeIn';

const detailCards = [
  {
    label: 'Scale',
    value: '80+',
    title: 'Experts Crafting Excellence',
    description: 'A multidisciplinary team shaping each brief with precision, speed, and a disciplined finish.',
    variant: 'rings',
  },
  {
    label: 'Experience',
    value: '14+',
    title: 'Years Of Refinement',
    description: 'Long-term operational depth that protects quality when projects move from concept to delivery.',
    variant: 'stat',
  },
  {
    label: 'Capacity',
    value: '10+',
    title: 'Integrated Production Lines',
    description: 'A system built for bespoke work, recurring volume, and careful control across formats.',
    variant: 'stat',
  },
  {
    label: 'Ecosystem',
    value: '1,000+',
    title: 'Clients Who Trust Us',
    description: 'Partnerships built on reliability, cultural fluency, and a standard that stays consistent.',
    variant: 'wide',
  },
  {
    label: 'Space',
    value: '2,500 m²',
    title: 'Of Creativity And Technology',
    description: 'A controlled environment where design, fabrication, and finishing remain closely connected.',
    variant: 'frame',
  },
  {
    label: 'Reach',
    value: '18,000+',
    title: 'National Projects Delivered',
    description: 'A delivery record that reflects range, scale, and the ability to keep detail intact.',
    variant: 'seal',
  },
] as const;

function DetailCard({
  label,
  value,
  title,
  description,
  variant,
}: (typeof detailCards)[number]) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.12] ${
        variant === 'rings'
          ? 'min-h-[360px] lg:row-span-2'
          : variant === 'wide'
            ? 'min-h-[170px] lg:col-span-2'
            : 'min-h-[170px]'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(201,169,110,0.12) 0%, transparent 45%)' }} />

      {variant === 'rings' ? (
        <div className="relative flex h-full min-h-[360px] flex-col justify-between p-[clamp(24px,3vw,38px)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-white/35">{label}</p>
              <p className="mt-2 text-[clamp(2.4rem,5vw,4rem)] font-light leading-none tracking-[-0.04em] text-white/92">{value}</p>
            </div>
            <div className="h-12 w-12 rounded-full border border-white/10 bg-white/[0.04]" />
          </div>

          <div className="mx-auto grid place-items-center py-4">
            <div className="relative h-[240px] w-[240px] rounded-full border border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_42%,transparent_72%)]">
              <span className="absolute inset-8 rounded-full border border-white/[0.07]" />
              <span className="absolute inset-16 rounded-full border border-white/[0.09]" />
              <span className="absolute inset-24 rounded-full border border-white/[0.12]" />
              <span className="absolute inset-[45%] rounded-full bg-[#C9A96E] shadow-[0_0_32px_rgba(201,169,110,0.18)]" />
            </div>
          </div>

          <div className="max-w-[24rem]">
            <h3 className="text-[clamp(1.4rem,2vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white/92">{title}</h3>
            <p className="mt-4 text-[0.95rem] font-light leading-[1.75] text-white/52">{description}</p>
          </div>
        </div>
      ) : (
        <div
          className={`relative flex h-full flex-col justify-between p-[clamp(22px,2.8vw,34px)] ${
            variant === 'frame' ? 'min-h-[220px]' : 'min-h-[170px]'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-white/32">{label}</p>
              <p className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-light leading-none tracking-[-0.04em] text-white/90">{value}</p>
            </div>
            <div className="mt-1 h-9 w-9 rounded-full border border-[#C9A96E]/18 bg-[#C9A96E]/8" />
          </div>

          <div className="mt-10 max-w-[32rem]">
            <h3 className="text-[clamp(1.1rem,1.6vw,1.35rem)] font-medium leading-[1.25] tracking-[-0.015em] text-white/90">{title}</h3>
            <p className="mt-3 text-[0.88rem] font-light leading-[1.75] text-white/50">{description}</p>
          </div>

          {variant === 'frame' ? (
            <div className="absolute inset-x-0 bottom-0 h-[44%] overflow-hidden">
              <div className="absolute left-[-10%] bottom-[-22%] h-[140%] w-[70%] rounded-full border border-white/[0.06]" />
              <div className="absolute left-[6%] bottom-[-40%] h-[150%] w-[76%] rounded-full border border-white/[0.04]" />
              <div className="absolute right-[-4%] bottom-[-18%] h-[80%] w-[54%] rotate-45 rounded-[44px] border border-white/[0.06]" />
            </div>
          ) : null}

          {variant === 'seal' ? (
            <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full border border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_68%)]" />
          ) : null}
        </div>
      )}
    </article>
  );
}

export default function DetailsSection() {
  return (
    <section aria-label="Details That Matter" className="relative z-30 overflow-hidden bg-[#061411]">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 25%, rgba(99, 82, 43, 0.22) 0%, transparent 68%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 65% 70%, rgba(8, 38, 31, 0.65) 0%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(88px,11vw,144px)] max-[1100px]:w-[calc(100%-36px)]">
        <FadeIn direction="up" className="mx-auto mb-[clamp(44px,5vw,72px)] max-w-[760px] text-center">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/34">The Signals We Track</p>
          <h2 className="mt-5 text-[clamp(2.2rem,4.8vw,4rem)] font-light leading-[1.08] tracking-[-0.03em] text-white/92">
            Details That Matter
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[clamp(0.95rem,1.3vw,1.05rem)] font-light leading-[1.8] text-white/48">
            This section keeps the page grounded with measurable proof, then pushes into more atmospheric storytelling below.
          </p>
          <div className="mx-auto mt-7 h-px w-20 bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(170px,auto)]">
          {detailCards.map((card, index) => (
            <div
              key={card.title}
              className={`${
                index === 0
                  ? 'lg:col-span-5 lg:row-span-2'
                  : index === 1
                    ? 'lg:col-span-3'
                    : index === 2
                      ? 'lg:col-span-4'
                      : index === 3
                        ? 'lg:col-span-4'
                        : index === 4
                          ? 'lg:col-span-5'
                          : 'lg:col-span-3'
              }`}
            >
              <FadeIn direction="up" delay={index * 0.06}>
                <DetailCard {...card} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}