"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Ready for your GSAP animations
  useEffect(() => {
    // If you want to add your GSAP reveal here later:
    // gsap.fromTo(videoRef.current, { scale: 1.1 }, { scale: 1, duration: 2, ease: "power2.out" });
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden bg-neutral-950"
    >
      {/* 
        1. Fixed Navbar Layering 
        We wrap it or ensure it handles its own fixed/absolute positioning cleanly above the video 
      */}
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      {/* Background Video / Cinematic Media */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-100 will-change-transform"
        >
          <source src="/images/luxury-villa.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 
        2. Enhanced Text Contrast Overlays 
        Combines a baseline dimming layer with a subtle bottom/top vignette 
        to protect text over light pool concrete or busy tree leaves.
      */}
      <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

      {/* Main Content Area */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 lg:px-16">
        <div ref={contentRef} className="max-w-5xl text-center text-white">
          
          {/* Subtle Label */}
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/75 sm:text-sm">
            Luxury Real Estate
          </p>

          {/* 
            3. Typography Fixes 
            Switched to tracking-normal/tight so the delicate Cormorant Garamond letters 
            don't overlap unnaturally when fluidly scaling. Added leading-tight.
          */}
          <h1
            ref={titleRef}
            className="font-heading text-5xl font-light leading-[1.1] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            Exceptional
            <br />
            <span className="inline-block mt-2">Living Starts Here</span>
          </h1>

          {/* Description Paragraph */}
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg antialiased">
            Experience timeless architecture, exclusive locations, and luxury
            homes designed to inspire your next chapter.
          </p>

          {/* 
            4. Minimalist Action Link 
            Cleaned up the formatting to use semantic elements and utility classes 
            matching the high-end editorial direction.
          */}
          <div className="mt-12 flex justify-center">
            <button
              className="
                group 
                inline-flex 
                items-center 
                gap-2 
                border-b 
                border-white/60 
                pb-1.5 
                text-xs 
                uppercase 
                tracking-[0.3em] 
                text-white 
                transition-all 
                duration-300 
                ease-out 
                hover:border-white 
                hover:text-white
              "
            >
              <span>View Collection</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 
        5. Elegant Animated Scroll Indicator 
        Replaced the static line with a CSS-animated sleek looping track.
      */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="relative h-16 w-[1px] overflow-hidden bg-white/20">
          <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent via-white to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}