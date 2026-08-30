/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import TopNavBar from "../components/TopNavbar";
import Footer from "../components/Footer";

const pageStyle = css({
  width: "100%",
});

// Stills are filled with background-image instead of <img> so a missing asset
// falls back to the dark background rather than a broken image.
const sectionStyle = css({
  position: "relative",
  width: "100%",
  height: "100vh",
  // On mobile, 100vh measures the viewport with the browser chrome retracted,
  // so the bottom of the section sits behind the address bar. svh is the
  // height with the chrome shown, which stays exact as the bar collapses.
  "@supports (height: 100svh)": {
    height: "100svh",
  },
  overflow: "hidden",
  backgroundColor: "#0d0e0f",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const videoStyle = css({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
});

const overlayStyle = css({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(13, 14, 15, 0.92) 0%, rgba(13, 14, 15, 0.45) 35%, rgba(13, 14, 15, 0.1) 65%, rgba(13, 14, 15, 0.35) 100%)",
});

const captionStyle = css({
  position: "absolute",
  left: "4rem",
  bottom: "4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.75rem",
  "@media (max-width: 600px)": {
    left: "1.5rem",
    bottom: "2.5rem",
  },
});

const titleStyle = css({
  margin: 0,
  fontSize: "clamp(2.75rem, 9vw, 7rem)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  color: "#ffffff",
});

const linkStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "0.35rem",
  fontSize: "1.1rem",
  color: "#bfbfc7",
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#ffffff",
  },
  ":hover svg": {
    transform: "translateX(4px)",
  },
  "@media (max-width: 600px)": {
    fontSize: "1rem",
  },
});

const linkIconStyle = css({
  width: "18px",
  height: "18px",
  transition: "transform 0.3s ease",
});

export function Product() {
  return (
    <div css={pageStyle}>
      <TopNavBar />

      <section css={sectionStyle}>
        <video
          css={videoStyle}
          src="/v-landlink.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div css={overlayStyle} />
        <div css={captionStyle}>
          <h2 css={titleStyle}>Landlink</h2>
          <a
            css={linkStyle}
            href="https://landlink.sh/"
            target="_blank"
            rel="noreferrer"
          >
            Visit
            <ArrowRight css={linkIconStyle} />
          </a>
        </div>
      </section>

      <section
        css={[sectionStyle, css({ backgroundImage: 'url("/i-nugget.webp")' })]}
      >
        <div css={overlayStyle} />
        <div css={captionStyle}>
          <h2 css={titleStyle}>CartCut</h2>
          <Link css={linkStyle} to="/cartcut">
            Visit
            <ArrowRight css={linkIconStyle} />
          </Link>
        </div>
      </section>

      <section
        css={[sectionStyle, css({ backgroundImage: 'url("/i-map3d.webp")' })]}
      >
        <div css={overlayStyle} />
        <div css={captionStyle}>
          <h2 css={titleStyle}>Map3d</h2>
          <a
            css={linkStyle}
            href="https://github.com/cartesiancs/map3d"
            target="_blank"
            rel="noreferrer"
          >
            Visit
            <ArrowRight css={linkIconStyle} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
