import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video from "../assets/video.mp4"
gsap.registerPlugin(ScrollTrigger);

interface ScrollCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  media: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
  };
}

const cards: ScrollCard[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Design & Innovation',
    description: 'We design gifts, awards, and bespoke products that reflect each client\'s identity and success. From concept to creation, we turn ideas into designs that communicate the message and add a touch of distinction to every experience.',
    bullets: [
      'Designing corporate and seasonal gifts.',
      'Developing gifts for national and cultural occasions.',
      'Designing awards and recognition items.',
      'Creating bespoke VIP gifts.',
    ],
    media: {
      type: 'video',
      src: video,
      poster: '',
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Flexible & Precise Manufacturing',
    description: 'We turn creative ideas into quality products by blending advanced technology and handcrafted artistry. Our integrated processes and flexible production lines ensure precision, perfect 3D printing, and more.',
    bullets: [
      'Flexible manufacturing integration from design to delivery.',
      'Flexible, multi-material manufacturing techniques.',
      'Large-scale gifting and printing operations.',
      'Managing small to large production runs.',
    ],
    media: {
      type: 'video',
      src: video,
      poster: '',
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality & Craftsmanship',
    description: 'Every product passes through rigorous quality checks, combining traditional Saudi craftsmanship with modern precision engineering. We ensure each piece meets the highest standards of excellence.',
    bullets: [
      'Multi-stage quality inspection processes.',
      'Premium material sourcing and verification.',
      'Traditional craftsmanship meets modern precision.',
      'Certified quality management standards.',
    ],
    media: {
      type: 'video',
      src: video,
      poster: '',
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Reach, Local Roots',
    description: 'Rooted in Saudi heritage, we deliver world-class products to clients across the region and beyond. Our deep understanding of local culture combined with international standards sets us apart.',
    bullets: [
      'Serving clients across the GCC and beyond.',
      'Deep understanding of Saudi cultural identity.',
      'International quality with local authenticity.',
      'Customized solutions for every market.',
    ],
    media: {
      type: 'video',
      src: video,
      poster: '',
    },
  },
];

function CardMedia({ media }: { media: ScrollCard['media'] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  if (media.type === 'video') {
    return (
      <div ref={containerRef} className="relative h-full w-full">
        {isInView && media.src ? (
          <video
            ref={videoRef}
            src={media.src}
            poster={media.poster}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0d1a14] via-[#0a1210] to-[#080e0c]" />
        )}
      </div>
    );
  }

  return (
    <img
      src={media.src}
      alt=""
      className="h-full w-full object-cover"
      loading="lazy"
    />
  );
}

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const totalScrollWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -totalScrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Our Craft"
      className="relative z-30 overflow-hidden"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-[#081a14]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(8, 38, 31, 0.8) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 60%, rgba(99, 82, 43, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(13, 61, 49, 0.5) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle glass overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      />

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-screen w-max items-center"
        style={{ willChange: 'transform' }}
      >
        {/* Title card */}
        <div className="flex h-screen w-screen shrink-0 items-center justify-center">
          <div className="animate-title-fade text-center">
            <h2 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-white/90">
              <span className="animate-title-line inline-block">We Craft</span>
              <br />
              <span className="animate-title-line-delayed inline-block">With Mastery</span>
            </h2>
            <div className="animate-title-divider mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
          </div>
        </div>

        {/* Content cards */}
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="flex h-screen w-screen shrink-0 items-center justify-center px-[clamp(20px,4vw,60px)]"
          >
            <div className="mx-auto w-full max-w-[1280px]">
              {/* Card container */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d1110]/80 backdrop-blur-sm">
                <div className="flex min-h-[520px] max-[768px]:flex-col">
                  {/* Media side */}
                  <div className="relative flex-[1.2] overflow-hidden max-[768px]:min-h-[280px]">
                    <div className="absolute inset-3 overflow-hidden rounded-[18px]">
                      <CardMedia media={card.media} />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex flex-1 flex-col justify-center px-[clamp(28px,4vw,56px)] py-[clamp(32px,4vw,56px)] max-[768px]:py-8">
                    {/* Icon + Title */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 text-[#C9A96E]">
                        {card.icon}
                      </div>
                      <h2 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium leading-[1.2] tracking-[-0.01em] text-white/90">
                        {card.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-[clamp(0.85rem,1.1vw,0.95rem)] font-light leading-[1.75] text-white/50">
                      {card.description}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-6 space-y-3">
                      {card.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E]" />
                          <span className="text-[clamp(0.82rem,1vw,0.9rem)] font-light leading-[1.6] text-white/60">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
