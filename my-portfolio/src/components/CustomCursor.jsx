import { useEffect, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure DOM elements are fully rendered
    const timer = setTimeout(() => {
      const bigBall = document.querySelector(".cursor__ball--big");
      const smallBall = document.querySelector(".cursor__ball--small");
      const hoverables = document.querySelectorAll(".hoverable");

      if (!bigBall || !smallBall) {
        console.error("Cursor elements not found");
        return;
      }

      setCursorVisible(true);

      const onMouseMove = (e) => {
        gsap.to(bigBall, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.4 });
        gsap.to(smallBall, { x: e.clientX - 5, y: e.clientY - 7, duration: 0.1 });
      };

      const onMouseHover = () => {
        gsap.to(bigBall, { scale: 4, duration: 0.3 });
      };

      const onMouseHoverOut = () => {
        gsap.to(bigBall, { scale: 1, duration: 0.3 });
      };

      // Make sure mouse events are captured
      document.addEventListener("mousemove", onMouseMove);
      
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseHover);
        el.addEventListener("mouseleave", onMouseHoverOut);
      });

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseHover);
          el.removeEventListener("mouseleave", onMouseHoverOut);
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cursor pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]" style={{ visibility: cursorVisible ? 'visible' : 'hidden' }}>
      <div className="cursor__ball cursor__ball--big absolute mix-blend-difference">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa95" />
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small absolute mix-blend-difference">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;