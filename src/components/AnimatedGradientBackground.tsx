import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlobState {
  x: number;
  y: number;
  size: number;
  opacity: number;
  r: number;
  g: number;
  b: number;
}

const AnimatedGradientBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const blobs = blobRefs.current.filter(Boolean) as HTMLDivElement[];
    if (blobs.length === 0) return;

    // 6 phases for ultra-smooth, gradual transitions — red/orange palette
    const phases: BlobState[][] = [
      // Phase 1: Red/Orange blend (hero - initial)
      [
        { x: 20, y: 30, size: 55, opacity: 0.85, r: 230, g: 57, b: 70 },
        { x: 78, y: 38, size: 48, opacity: 0.75, r: 255, g: 107, b: 53 },
        { x: 50, y: 62, size: 58, opacity: 0.80, r: 184, g: 45, b: 56 },
        { x: 12, y: 72, size: 42, opacity: 0.70, r: 255, g: 143, b: 94 },
        { x: 65, y: 20, size: 35, opacity: 0.65, r: 255, g: 184, b: 0 },
        { x: 40, y: 80, size: 30, opacity: 0.60, r: 204, g: 85, b: 41 },
      ],
      // Phase 2: Red fading, orange emerging
      [
        { x: 25, y: 32, size: 58, opacity: 0.82, r: 200, g: 50, b: 60 },
        { x: 74, y: 40, size: 50, opacity: 0.78, r: 230, g: 80, b: 50 },
        { x: 48, y: 60, size: 60, opacity: 0.82, r: 184, g: 45, b: 56 },
        { x: 15, y: 70, size: 44, opacity: 0.72, r: 240, g: 120, b: 70 },
        { x: 60, y: 22, size: 38, opacity: 0.68, r: 255, g: 160, b: 20 },
        { x: 45, y: 78, size: 32, opacity: 0.62, r: 204, g: 85, b: 41 },
      ],
      // Phase 3: Transition midpoint - balanced orange/red
      [
        { x: 28, y: 28, size: 60, opacity: 0.88, r: 255, g: 107, b: 53 },
        { x: 72, y: 42, size: 52, opacity: 0.82, r: 255, g: 143, b: 94 },
        { x: 48, y: 65, size: 62, opacity: 0.80, r: 230, g: 57, b: 70 },
        { x: 82, y: 68, size: 38, opacity: 0.68, r: 255, g: 184, b: 0 },
        { x: 35, y: 18, size: 40, opacity: 0.70, r: 255, g: 107, b: 53 },
        { x: 55, y: 78, size: 35, opacity: 0.62, r: 204, g: 85, b: 41 },
      ],
      // Phase 4: Orange dominant
      [
        { x: 30, y: 26, size: 62, opacity: 0.90, r: 255, g: 107, b: 53 },
        { x: 70, y: 44, size: 54, opacity: 0.84, r: 255, g: 143, b: 94 },
        { x: 46, y: 66, size: 64, opacity: 0.82, r: 230, g: 57, b: 70 },
        { x: 84, y: 66, size: 40, opacity: 0.65, r: 255, g: 184, b: 0 },
        { x: 32, y: 16, size: 42, opacity: 0.72, r: 255, g: 107, b: 53 },
        { x: 58, y: 80, size: 36, opacity: 0.60, r: 204, g: 85, b: 41 },
      ],
      // Phase 5: Deep red evolution
      [
        { x: 38, y: 22, size: 65, opacity: 0.90, r: 184, g: 45, b: 56 },
        { x: 62, y: 48, size: 55, opacity: 0.85, r: 230, g: 57, b: 70 },
        { x: 18, y: 75, size: 45, opacity: 0.75, r: 255, g: 143, b: 94 },
        { x: 80, y: 28, size: 40, opacity: 0.70, r: 204, g: 85, b: 41 },
        { x: 45, y: 55, size: 50, opacity: 0.65, r: 230, g: 57, b: 70 },
        { x: 70, y: 72, size: 32, opacity: 0.58, r: 184, g: 45, b: 56 },
      ],
      // Phase 6: Atmospheric shift - rich red with subtle amber return
      [
        { x: 32, y: 38, size: 68, opacity: 0.90, r: 255, g: 143, b: 94 },
        { x: 68, y: 28, size: 50, opacity: 0.80, r: 230, g: 57, b: 70 },
        { x: 50, y: 70, size: 55, opacity: 0.75, r: 184, g: 45, b: 56 },
        { x: 15, y: 48, size: 38, opacity: 0.65, r: 230, g: 57, b: 70 },
        { x: 75, y: 55, size: 42, opacity: 0.68, r: 255, g: 107, b: 53 },
        { x: 42, y: 15, size: 35, opacity: 0.60, r: 255, g: 143, b: 94 },
      ],
    ];

    const totalPhases = phases.length - 1;

    // Current interpolated state for each blob
    const currentStates: BlobState[] = phases[0].map((b) => ({ ...b }));

    // Build GSAP timeline with very long scroll distance and heavy scrub smoothing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: '+=800vh', // Very long scroll distance for gradual transitions
        scrub: 3, // Heavy smoothing - 3 second lag for butter-smooth feel
        onUpdate: (self) => {
          const progress = self.progress;
          const scaledProgress = progress * totalPhases;
          const currentIndex = Math.min(Math.floor(scaledProgress), totalPhases);
          const nextIndex = Math.min(currentIndex + 1, totalPhases);
          const phaseProgress = scaledProgress - currentIndex;

          blobs.forEach((blob, i) => {
            const start = phases[currentIndex][i % phases[currentIndex].length];
            const end = phases[nextIndex][i % phases[nextIndex].length];

            const cs = currentStates[i];
            cs.x = gsap.utils.interpolate(start.x, end.x, phaseProgress);
            cs.y = gsap.utils.interpolate(start.y, end.y, phaseProgress);
            cs.size = gsap.utils.interpolate(start.size, end.size, phaseProgress);
            cs.opacity = gsap.utils.interpolate(start.opacity, end.opacity, phaseProgress);
            cs.r = Math.round(gsap.utils.interpolate(start.r, end.r, phaseProgress));
            cs.g = Math.round(gsap.utils.interpolate(start.g, end.g, phaseProgress));
            cs.b = Math.round(gsap.utils.interpolate(start.b, end.b, phaseProgress));

            // Apply to DOM
            blob.style.left = `${cs.x}%`;
            blob.style.top = `${cs.y}%`;
            blob.style.width = `${cs.size}%`;
            blob.style.height = `${cs.size}%`;
            blob.style.opacity = String(cs.opacity);
            blob.style.background = `radial-gradient(ellipse at center, rgba(${cs.r},${cs.g},${cs.b},0.85) 0%, rgba(${cs.r},${cs.g},${cs.b},0.45) 35%, rgba(${cs.r},${cs.g},${cs.b},0.12) 65%, transparent 100%)`;
          });
        },
      },
    });

    // Subtle continuous breathing — animate via GSAP for smoothness
    const breatheTl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'sine.inOut' });
    blobs.forEach((blob, i) => {
      breatheTl.to(
        blob,
        {
          x: Math.sin(i * 1.2) * 30,
          y: Math.cos(i * 0.8) * 20,
          scale: 1.08 + i * 0.03,
          duration: 10 + i * 3,
          ease: 'sine.inOut',
        },
        0
      );
    });

    return () => {
      tl.kill();
      breatheTl.kill();
    };
  }, []);

  // Initial blob states for SSR/first render
  const initialBlobs: BlobState[] = [
    { x: 20, y: 30, size: 55, opacity: 0.85, r: 230, g: 57, b: 70 },
    { x: 78, y: 38, size: 48, opacity: 0.75, r: 255, g: 107, b: 53 },
    { x: 50, y: 62, size: 58, opacity: 0.80, r: 184, g: 45, b: 56 },
    { x: 12, y: 72, size: 42, opacity: 0.70, r: 255, g: 143, b: 94 },
    { x: 65, y: 20, size: 35, opacity: 0.65, r: 255, g: 184, b: 0 },
    { x: 40, y: 80, size: 30, opacity: 0.60, r: 204, g: 85, b: 41 },
  ];

  return (
    <>
      {/* Base dark background */}
      <div aria-hidden="true" className="fixed inset-0 -z-30 bg-[#1A0A0A]" />

      {/* Individual gradient blobs */}
      {initialBlobs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el; }}
          aria-hidden="true"
          className="fixed rounded-full"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}%`,
            height: `${blob.size}%`,
            opacity: blob.opacity,
            background: `radial-gradient(ellipse at center, rgba(${blob.r},${blob.g},${blob.b},0.85) 0%, rgba(${blob.r},${blob.g},${blob.b},0.45) 35%, rgba(${blob.r},${blob.g},${blob.b},0.12) 65%, transparent 100%)`,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform, left, top, width, height, opacity',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </>
  );
};

export default AnimatedGradientBackground;
