"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Entrance Animation
    gsap.fromTo(
      navRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.2, // Gives the background video a moment to initialize
      }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Properties", "About", "Services", "Journal", "Contact"];

  return (
    <header
      ref={navRef}
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-700
        ease-in-out
        ${
          scrolled
            ? "h-20 bg-neutral-950/40 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            : "h-24 bg-gradient-to-b from-black/40 via-black/10 to-transparent backdrop-blur-[2px]"
        }
      `}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
        
        {/* Brand Logo */}
        <div className="group cursor-pointer">
          <h1
            className="
              text-xs
              font-light
              uppercase
              tracking-[0.6em]
              text-white
              transition-all
              duration-500
              ease-out
              group-hover:tracking-[0.7em]
            "
          >
            AUREO
          </h1>
        </div>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                group
                relative
                py-2
                text-[11px]
                font-light
                uppercase
                tracking-[0.3em]
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item}
              {/* Refined clean underline effect */}
              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[1px]
                  w-0
                  -translate-x-1/2
                  bg-white/80
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* Action Toggle (Menu) */}
        <button
          aria-label="Toggle Menu"
          className="
            group
            relative
            flex
            h-10
            w-10
            items-center
            justify-end
            text-white
          "
        >
          <Menu
            size={20}
            strokeWidth={1.25}
            className="
              transition-transform
              duration-500
              ease-out
              group-hover:scale-110
            "
          />
        </button>
      </div>
    </header>
  );
}