"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    number: "250+",
    label: "Properties Sold",
  },
  {
    number: "$1.8B",
    label: "Portfolio Value",
  },
  {
    number: "15+",
    label: "Global Markets",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function Excellence() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".stat",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#050505] text-white py-32 lg:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="mb-24">
          <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-4">
            Excellence
          </p>

          <h2 className="text-5xl md:text-7xl font-light tracking-tight">
            Excellence
            <br />
            In Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat"
            >
              <div className="text-5xl md:text-7xl font-extralight mb-4">
                {stat.number}
              </div>

              <div className="text-white/50 uppercase tracking-[0.25em] text-xs">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}