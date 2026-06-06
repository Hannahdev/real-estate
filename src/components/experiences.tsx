"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Private Aviation",
    description:
      "Seamless travel experiences with unparalleled comfort, privacy, and global access.",
    image: "/images/aviation.jpg",
  },
  {
    number: "02",
    title: "Yachting Lifestyle",
    description:
      "Explore breathtaking coastlines aboard world-class yachts designed for extraordinary journeys.",
    image: "/images/yacht.jpg",
  },
  {
    number: "03",
    title: "Fine Dining",
    description:
      "Exceptional culinary experiences curated by internationally renowned chefs.",
    image: "/images/dining.jpg",
  },
  {
    number: "04",
    title: "Wellness Retreats",
    description:
      "Exclusive sanctuaries focused on balance, wellness, and personal rejuvenation.",
    image: "/images/spa.jpg",
  },
  {
    number: "05",
    title: "Elite Concierge",
    description:
      "Dedicated professionals ensuring every detail is handled with precision.",
    image: "/images/concierge.jpg",
  },
];

export default function ArtOfLiving() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-black text-white py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* HEADER */}

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-5">
              Lifestyle Experiences
            </p>

            <h2 className="font-light text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              The Art
              <br />
              of Living
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Beyond extraordinary residences lies a world of curated
              experiences designed for those who seek excellence in every
              aspect of life.
            </p>
          </div>
        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={experiences[active].image}
              alt={experiences[active].title}
              fill
              priority
              className="object-cover transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* LIST */}

          <div>
            {experiences.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setActive(index)}
                  className={`group cursor-pointer border-b border-white/10 py-8 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <div className="text-sm text-white/40 mb-2">{item.number}</div>

                      <h3
                        className={`font-light transition-all duration-500 ${
                          isActive ? "text-4xl" : "text-2xl"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? "max-h-40 mt-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-white/60 max-w-md leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`transition-all duration-500 ${
                        isActive ? "translate-x-2 opacity-100" : "opacity-40"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
