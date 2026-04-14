import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Palette, Users, Gem, Lightbulb } from 'lucide-react';
import watchHeroImage from './assets/shoe-group.png';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';
import EcosystemCard from './components/EcosystemCard';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import ApproachSection from './components/ApproachSection';
import { RingShowcaseSection, SiteFooter } from './components';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const shoeWrapperRef = useRef<HTMLDivElement>(null);
  const shoeGlowRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Shoe float animation: hero right → ecosystem center
  useGSAP(() => {
    if (!shoeWrapperRef.current || !ecosystemSectionRef.current) return;

    gsap.to(shoeWrapperRef.current, {
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      scale: 0.72,
      width: '55vw',
      maxWidth: '700px',
      ease: 'none',
      scrollTrigger: {
        trigger: ecosystemSectionRef.current,
        start: 'top bottom',
        end: 'top 10%',
        scrub: 1.5,
      },
    });

    // Glow follows the shoe
    if (shoeGlowRef.current) {
      gsap.to(shoeGlowRef.current, {
        left: '50%',
        top: '50%',
        xPercent: -50,
        yPercent: -50,
        scale: 0.72,
        width: '55vw',
        ease: 'none',
        scrollTrigger: {
          trigger: ecosystemSectionRef.current,
          start: 'top bottom',
          end: 'top 10%',
          scrub: 1.5,
        },
      });
    }
  });

  // Ecosystem section animations
  useGSAP(() => {
    if (!ecosystemSectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    // Cards float in from their respective directions
    cards.forEach((card, i) => {
      const isLeft = i % 2 === 0;
      const isTop = i < 2;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isLeft ? -80 : 80,
          y: isTop ? -60 : 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ecosystemSectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1.5,
          },
        },
      );
    });
  });

  return (
    <main className="text-white">
      {/* Animated gradient background */}
      <AnimatedGradientBackground />

      {/* Global fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between w-[min(1380px,calc(100%-64px))] gap-5 pt-[18px] max-[1100px]:w-[calc(100%-36px)] max-[1100px]:grid-cols-[auto_auto] max-[1100px]:gap-y-4">
        {/* Nike-style logo */}
        <div className="flex items-center gap-3 justify-self-start max-[1100px]:order-1">
          <svg viewBox="0 0 69 32" className="h-8 w-auto fill-white" aria-label="Nike">
            <path d="M68.56 4.05c-0.28 0.14-1.44 0.72-3.48 1.72-3.48 1.72-8.28 4.08-12.72 6.28-4.44 2.2-8.52 4.24-11.28 5.64-1.38 0.7-2.4 1.22-2.96 1.5-0.56 0.28-0.84 0.42-0.84 0.42s-0.28-0.14-0.84-0.42c-0.56-0.28-1.58-0.8-2.96-1.5-2.76-1.4-6.84-3.44-11.28-5.64-4.44-2.2-9.24-4.56-12.72-6.28-2.04-1-3.2-1.58-3.48-1.72C1.44 3.33 0.28 2.75 0 2.61 0 2.61 0.28 2.75 1.44 3.33c1.16 0.58 3.48 1.72 6.96 3.44 3.48 1.72 8.28 4.08 12.72 6.28 4.44 2.2 8.52 4.24 11.28 5.64 1.38 0.7 2.4 1.22 2.96 1.5 0.56 0.28 0.84 0.42 0.84 0.42s0.28-0.14 0.84-0.42c0.56-0.28 1.58-0.8 2.96-1.5 2.76-1.4 6.84-3.44 11.28-5.64 4.44-2.2 9.24-4.56 12.72-6.28 3.48-1.72 5.8-2.86 6.96-3.44C68.72 2.75 69 2.61 69 2.61c0 0-0.28 0.14-0.44 0.22z" />
          </svg>
        </div>

        <nav
          aria-label="Primary"
          className="flex items-center gap-[clamp(22px,2.3vw,48px)] max-[1100px]:static max-[1100px]:order-3 max-[1100px]:col-span-2 max-[1100px]:translate-x-0 max-[1100px]:justify-center max-[1100px]:gap-x-[22px] max-[1100px]:gap-y-4 max-[1100px]:flex-wrap"
        >
          <a className="text-[13px] font-light text-white/86 no-underline transition-colors duration-200 hover:text-[#FF8F8F] max-[768px]:text-[12px]" href="#">New Releases</a>
          <a className="text-[13px] font-light text-white/86 no-underline transition-colors duration-200 hover:text-[#FF8F8F] max-[768px]:text-[12px]" href="#">Men</a>
          <a className="text-[13px] font-light text-white/86 no-underline transition-colors duration-200 hover:text-[#FF8F8F] max-[768px]:text-[12px]" href="#">Women</a>
          <a className="text-[13px] font-light text-white/86 no-underline transition-colors duration-200 hover:text-[#FF8F8F] max-[768px]:text-[12px]" href="#">Sale</a>
          <a className="text-[13px] font-light text-white/86 no-underline transition-colors duration-200 hover:text-[#FF8F8F] max-[768px]:text-[12px]" href="#">Collaboration</a>
        </nav>

        <div
          role="group"
          aria-label="Header actions"
          className="inline-flex justify-self-end items-center gap-3 max-[1100px]:order-2"
        >
          <button type="button" className="text-white/70 hover:text-white transition-colors" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button type="button" className="text-white/70 hover:text-white transition-colors" aria-label="Favorites">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button type="button" className="text-white/70 hover:text-white transition-colors" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section aria-label="Hero" className="relative min-h-screen flex items-center">
        <div className="relative z-20 mx-auto w-[min(1380px,calc(100%-64px))] grid grid-cols-2 items-center gap-8 pt-[80px] max-[1100px]:w-[calc(100%-36px)] max-[768px]:grid-cols-1 max-[768px]:gap-12">

          {/* Left: Text content */}
          <div className="flex flex-col gap-6 max-[768px]:text-center max-[768px]:items-center">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#FF8F8F]/70">
              Nike Mercurial
            </p>

            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Vapor XI FG
            </h1>

            <p className="max-w-md text-[clamp(0.9rem,1.2vw,1.05rem)] font-light leading-[1.7] text-white/55 max-[768px]:max-w-full">
              Create a difference on the pitch with an updated design that looks as fast as you play. The hand upper has textured patterns that are engineered to help you place your shots with pinpoint accuracy.
            </p>

            <div className="flex items-center gap-4 max-[768px]:justify-center">
              <span className="text-[1.1rem] font-light text-white/40 line-through">€210</span>
              <span className="text-[1.8rem] font-bold text-white">€170</span>
            </div>

            <button
              type="button"
              className="self-start rounded-full bg-[#E63946] px-8 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_24px_rgba(230,57,70,0.4)] transition-all duration-200 hover:bg-[#FF5C6A] hover:shadow-[0_6px_32px_rgba(230,57,70,0.55)] hover:-translate-y-0.5 max-[768px]:self-center"
            >
              Get these product
            </button>
          </div>

          {/* Right: Placeholder to reserve space for the floating shoe */}
          <div className="relative flex items-center justify-center max-[768px]:order-first">
            {/* Placeholder — same size as the shoe, invisible */}
            <div className="w-full max-w-[920px] opacity-0" aria-hidden="true">
              <img
                src={watchHeroImage}
                alt=""
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLOATING SHOE (fixed, animates from hero right to ecosystem center) ===== */}
      <div
        ref={shoeWrapperRef}
        className="fixed z-30 pointer-events-none"
        style={{
          right: '5%',
          top: '10%',
          transform: 'translateY(-50%)',
          width: '45vw',
          maxWidth: '920px',
        }}
      >
        {/* Circular background glow */}
        <div
          ref={shoeGlowRef}
          className="absolute aspect-square w-[80%] rounded-full"
          style={{
            left: '10%',
            top: '10%',
            background: 'radial-gradient(circle, rgba(230,57,70,0.35) 0%, rgba(230,57,70,0.12) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Secondary orange glow */}
        <div
          className="absolute aspect-square w-[60%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 60%)',
            filter: 'blur(30px)',
            top: '10%',
            right: '5%',
          }}
        />

        {/* Shoe image */}
        <div className="relative z-10">
          <img
            src={watchHeroImage}
            alt="Nike Vapor XI FG football boot"
            className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* ===== ECOSYSTEM SECTION ===== */}
      <section ref={ecosystemSectionRef} aria-label="Ecosystem" className="relative h-screen">
        <div className="relative mx-auto flex h-full w-[min(1380px,calc(100%-64px))] items-center justify-center max-[1100px]:w-[calc(100%-36px)]">
          {/* Cards grid */}
          <div className="relative z-20 grid h-full w-full grid-cols-2 grid-rows-2 gap-6 py-16 max-[768px]:grid-cols-1 max-[768px]:grid-rows-4 max-[768px]:gap-4">
            {/* Top-left card */}
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              className="flex items-start justify-start pt-8 max-[768px]:order-1 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Palette size={26} strokeWidth={1.8} />}
                title="An Integrated Ecosystem That Unites Creativity And Manufacturing."
              />
            </div>

            {/* Top-right card */}
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="flex items-start justify-end pt-8 max-[768px]:order-2 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Users size={26} strokeWidth={1.8} />}
                title="A Dedicated Team Driving Success And Trusted Partnerships."
              />
            </div>

            {/* Bottom-left card */}
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className="flex items-end justify-start pb-8 max-[768px]:order-3 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Gem size={26} strokeWidth={1.8} />}
                title="A Saudi Identity Fusing Authenticity With Modern Expression."
              />
            </div>

            {/* Bottom-right card */}
            <div
              ref={(el) => { cardRefs.current[3] = el; }}
              className="flex items-end justify-end pb-8 max-[768px]:order-4 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Lightbulb size={26} strokeWidth={1.8} />}
                title="Advanced Manufacturing Enabling Customization And Innovation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HORIZONTAL SCROLL SECTION ===== */}
      <HorizontalScrollSection />
      <ApproachSection />
      <RingShowcaseSection />
      <SiteFooter />



    </main>
  );
}

export default App;
