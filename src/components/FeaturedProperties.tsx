"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    id: "01",
    title: "Aethel Redoubt",
    location: "Desert Modern · Palm Desert, CA",
    price: "$8.5M",
    image: "/images/download (6).jpg",
  },
  {
    id: "02",
    title: "Clifftop Minimalist",
    location: "Coastal Brutalism · Big Sur, CA",
    price: "$14.2M",
    image: "/images/hero-villa.jpg",
  },
  {
    id: "03",
    title: "The Historic Estate",
    location: "Renaissance · Florence, Italy",
    price: "$22.0M",
    image: "/images/property-3.jpg",
  },
];

export default function FeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      sections.forEach((panel: any) => {
        const img = panel.querySelector(".img");
        const title = panel.querySelector(".title");
        const meta = panel.querySelector(".meta");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
          },
        });

        tl.fromTo(
          img,
          { scale: 1.2, y: 80 },
          { scale: 1, y: 0, ease: "none" }
        )
          .fromTo(
            title,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1 },
            0.2
          )
          .fromTo(
            meta,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 },
            0.3
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white"
    >
      {/* HEADER (fixed feel) */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-xl py-10 px-6 lg:px-16 border-b border-white/10">
        <p className="text-xs tracking-[0.4em] text-white/50">
          CURATED PORTFOLIO
        </p>
        <h2 className="text-3xl md:text-5xl font-light mt-2">
          Featured Residences
        </h2>
      </div>

      {/* PANELS */}
      <div>
        {properties.map((p) => (
          <div
            key={p.id}
            className="panel relative h-screen flex items-center justify-center overflow-hidden"
          >
            {/* IMAGE */}
            <div className="absolute inset-0">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="img object-cover scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 text-center max-w-3xl px-6">
              <h3 className="title text-4xl md:text-6xl font-light tracking-tight">
                {p.title}
              </h3>

              <p className="meta mt-4 text-white/70 text-sm tracking-wide">
                {p.location}
              </p>

              <p className="meta mt-2 text-white/90 text-lg">
                {p.price}
              </p>

              <button className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase border border-white/20 px-5 py-3 hover:bg-white hover:text-black transition">
                View Property
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}