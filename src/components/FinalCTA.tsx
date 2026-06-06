"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap"; // Your existing project setup imports
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. DYNAMIC TEXT REVEAL WITH RESOLVING BLUR
      gsap.fromTo(
        ".cta-content",
        { y: 60, opacity: 0, filter: "blur(15px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          },
        }
      );

      // 2. DYNAMIC VIDEO BLUR UNVEIL (Matches the critique of image_e5a440.jpg)
      // As the user scrolls into the CTA zone, the chaotic background image details
      // slowly blend and smooth out, forcing absolute focus onto the typography.
      gsap.fromTo(
        videoRef.current,
        { scale: 1.2, filter: "blur(0px)" },
        {
          scale: 1.05,
          filter: "blur(12px)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // 3. HARDWARE-ACCELERATED LIGHT SWEEP MOTION
      gsap.fromTo(
        ".light-sweep",
        { x: "-120%" },
        {
          x: "120%",
          duration: 7,
          repeat: -1,
          ease: "linear",
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* BACKGROUND CINEMATIC MEDIA BLOCK */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/final-cta.mp4" type="video/mp4" />
        </video>
      </div>

      {/* TEXT PROTECTION OVERLAYS */}
      <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.9)_100%)]" />

      {/* AMBIENT LUXURY GLOW SHINE */}
      <div className="light-sweep absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-60 blur-3xl rotate-12 will-change-transform" />

      {/* CENTRAL SCENIC TYPOGRAPHY HUB */}
      <div className="cta-content relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">

        <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-6 font-light">
          AUREO Estates
        </p>

        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extralight leading-[1.15] tracking-tight antialiased">
          Exceptional Residences
          <br />
          <span className="inline-block mt-2 font-light">Extraordinary Living</span>
        </h2>

        <p className="mt-8 text-white/60 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed antialiased">
          Discover a curated collection of architectural masterpieces in the world’s
          most exclusive destinations.
        </p>

        {/* 
          CLEAN SOLID INVERTED BUTTON 
          Replicates the premium styling from image_e5a440.jpg perfectly.
          Uses a single clean text label path with mix-blend mode properties.
        */}
        <button 
          className="
            group 
            relative 
            mt-12 
            inline-flex 
            items-center 
            justify-center 
            px-10 
            py-4.5 
            border 
            border-white/40 
            bg-transparent
            overflow-hidden 
            transition-all 
            duration-500 
            ease-out
            hover:border-white
            active:scale-[0.98]
          "
        >
          {/* Animated Slide-Up Color Backing Fill */}
          <div className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          
          {/* Accessible Typography Label Layer */}
          <span className="relative z-10 text-xs uppercase tracking-[0.35em] text-white font-light transition-colors duration-500 ease-out group-hover:text-black group-hover:font-normal">
            Schedule a Private Consultation
          </span>
        </button>

        {/* REFINED BRAND TAGLINE */}
        <p className="mt-14 text-[10px] sm:text-xs text-white/30 tracking-[0.5em] font-mono">
          PRIVATE • DISCREET • GLOBAL
        </p>

      </div>
    </section>
  );
}