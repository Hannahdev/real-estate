"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const properties = [
  {
    id: "01",
    title: "The Elysian Villa",
    location: "Malibu, California",
    image: "/images/signature-1.jpg",
    details: [
      "5 Bedrooms",
      "7 Bathrooms",
      "Oceanfront",
      "9,800 sq ft",
    ],
  },
  {
    id: "02",
    title: "Desert Horizon Estate",
    location: "Palm Springs, California",
    image: "/images/signature-2.jpg",
    details: [
      "6 Bedrooms",
      "8 Bathrooms",
      "Mountain Views",
      "11,200 sq ft",
    ],
  },
  {
    id: "03",
    title: "Azure Cliff Residence",
    location: "Big Sur, California",
    image: "/images/signature-3.jpg",
    details: [
      "4 Bedrooms",
      "6 Bathrooms",
      "Private Coastline",
      "8,500 sq ft",
    ],
  },
];

export default function SignatureCollection() {
  return (
    <section className="bg-black text-white py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.45em] text-white/40 mb-5">
            Signature Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight leading-none max-w-4xl">
            Architecture That
            <br />
            Defines Luxury.
          </h2>
        </div>

        {/* Properties */}
        <div className="space-y-40">
          {properties.map((property, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={property.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-white/30 text-sm tracking-[0.4em]">
                    {property.id}
                  </span>

                  <h3 className="mt-6 text-4xl md:text-6xl font-extralight tracking-tight">
                    {property.title}
                  </h3>

                  <p className="mt-4 text-white/60 text-lg">
                    {property.location}
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-6">
                    {property.details.map((detail) => (
                      <div
                        key={detail}
                        className="border-t border-white/10 pt-4"
                      >
                        <span className="text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/80 hover:text-white transition-colors">
                    Explore Residence

                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}