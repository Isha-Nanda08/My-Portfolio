import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocoScroll() {
  useEffect(() => {
    // ✅ Select the main scroll container
    const scrollEl = document.querySelector("#main-container");

    // ✅ Check if the container exists
    if (!scrollEl) {
      console.warn(
        "Locomotive Scroll: #main-container not found! Make sure the ID is correct."
      );
      return;
    }

    // ✅ Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.8, // Scroll speed
      lerp: 0.08, // Smoothness
      class: "is-reveal", // Class added on reveal
      reloadOnContextChange: true,
      touchMultiplier: 3, // Touch sensitivity
      smoothMobile: 0, // Disable smooth scroll on mobile
      smartphone: {
        smooth: true,
        breakpoint: 767, // Enable smooth scroll on small screens
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
    });

    // ✅ Optional: Update scroll on window resize
    const resizeObserver = new ResizeObserver(() => locoScroll.update());
    resizeObserver.observe(document.querySelector("[data-scroll-container]"));

    // ✅ Clean up to prevent memory leaks
    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
      resizeObserver.disconnect(); // Stop observing when component unmounts
    };
  }, []);
}
