"use client";

import { useState } from "react";
import Image from "next/image";

const stories = [
  {
    quote:
      "Working with Horizon Estates was an experience defined by discretion, expertise, and exceptional results.",
    author: "Sarah Mitchell",
    location: "London",
    image: "/images/client-1.jpg",
  },
  {
    quote:
      "Every detail was handled flawlessly. Their understanding of architecture and lifestyle made all the difference.",
    author: "Michael Carter",
    location: "Dubai",
    image: "/images/client-2.jpg",
  },
  {
    quote:
      "From the first consultation to the final signature, the process felt effortless and highly personalized.",
    author: "Emma Richardson",
    location: "New York",
    image: "/images/client-3.jpg",
  },
];

export default function ClientStories() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-black text-white py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.45em] text-white/40 mb-4">
            Client Stories
          </p>

          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight leading-none">
            Trusted By
            <br />
            Extraordinary People
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src={stories[active].image}
              alt={stories[active].author}
              fill
              className="object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          {/* Quote Side */}
          <div>
            <div className="mb-12">
              <span className="text-8xl md:text-9xl font-extralight text-white/10">
                "
              </span>

              <p className="text-2xl md:text-4xl font-extralight leading-relaxed -mt-10">
                {stories[active].quote}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-light">
                {stories[active].author}
              </h3>

              <p className="text-white/50 mt-1">
                {stories[active].location}
              </p>
            </div>

            {/* Story Selector */}
            <div className="mt-16 flex gap-4">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-[2px] transition-all duration-500 ${
                    active === index
                      ? "w-20 bg-white"
                      : "w-10 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}