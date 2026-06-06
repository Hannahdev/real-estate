"use client";

import { useEffect } from "react";

export default function HideDevTools() {
  useEffect(() => {
    const removeDevButton = () => {
      // find buttons that look like Next.js devtools triggers
      const buttons = Array.from(document.querySelectorAll("button"));
      for (const b of buttons) {
        try {
          const label = (
            b.getAttribute("aria-label") ||
            b.getAttribute("title") ||
            b.textContent ||
            ""
          ).toLowerCase();
          if (
            label.includes("next.js") ||
            label.includes("nextjs") ||
            label.includes("open next.js dev tools") ||
            label.includes("open next.js devtools") ||
            label.includes("open next.js dev tools")
          ) {
            b.remove();
          }
        } catch (e) {
          // ignore
        }
      }
    };

    // attempt immediately and on DOM changes (devtools may inject later)
    removeDevButton();
    const observer = new MutationObserver(removeDevButton);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
