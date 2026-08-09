/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { ArrowRight } from "lucide-react";

const navBarStyle = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 100000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "1rem",
  overflow: "hidden",
  transition: "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(13, 14, 15, 0.72)",
    backdropFilter: "blur(12px)",
    // Inverted gradient: opaque at the top (mask fully applied, blur visible),
    // fading to transparent at the bottom.
    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
    maskImage: "linear-gradient(to bottom, black, transparent)",
    zIndex: -1,
  },
});

const navBarHiddenStyle = css({
  opacity: 0,
  transform: "translateY(-100%)",
  visibility: "hidden",
  pointerEvents: "none",
});

const navListStyle = css({
  display: "flex",
  zIndex: 100000,
});

const navItemStyle = css({
  margin: "0 0.5rem",
  fontSize: "0.9rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  transition: "color 0.3s ease",
  zIndex: 100000,
  color: "#bfbfc7",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    margin: "0 0rem",
  },
  ":hover svg": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const arrowIconStyle = css({
  marginLeft: "0.25rem",
  opacity: 0,
  transform: "translateX(-5px)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  width: "16px",
  height: "16px",
  zIndex: 100000,
});

const navItems = [
  { name: "/", link: "/" },
  { name: "Product", link: "/product" },
  { name: "GitHub", link: "https://github.com/cartesiancs" },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/cartesiancs" },
];

const SCROLL_THRESHOLD = 8;

const TopNavBar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // App.css sets height:100% + overflow-x:hidden on body, which can make
    // <body> the scroll container instead of the window.
    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    lastScrollY.current = getScrollTop();
    let ticking = false;

    const update = () => {
      ticking = false;
      const currentY = getScrollTop();
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      // Always keep it visible at the very top of the page
      setVisible(currentY <= 0 || delta < 0);
      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    // Scroll events do not bubble, so listen in the capture phase to catch
    // scrolling on window / documentElement / body alike.
    const options = { capture: true, passive: true } as const;
    window.addEventListener("scroll", onScroll, options);
    return () => window.removeEventListener("scroll", onScroll, options);
  }, []);

  return (
    <div css={[navBarStyle, !visible && navBarHiddenStyle]}>
      <div css={navListStyle}>
        {navItems.map((item, index) => (
          <div
            key={index}
            css={navItemStyle}
            onClick={() => {
              window.location.href = item.link;
            }}
          >
            {item.name}
            <ArrowRight css={arrowIconStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavBar;
