/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import TopNavBar from "../components/TopNavbar";
import Footer from "../components/Footer";

const pageStyle = css({
  display: "flex",
  minHeight: "100%",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});

const contentStyle = css({
  width: "100%",
  maxWidth: "720px",
  padding: "6rem 2rem 8rem 2rem",
  boxSizing: "border-box",
  "@media (max-width: 640px)": {
    padding: "7rem 1.5rem 6rem 1.5rem",
  },
});

const backStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  fontSize: "0.85rem",
  color: "#8a8a8f",
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#ffffff",
  },
  ":hover svg": {
    transform: "translateX(-4px)",
  },
});

const backIconStyle = css({
  width: "16px",
  height: "16px",
  transition: "transform 0.3s ease",
});

const titleStyle = css({
  margin: "1.5rem 0 0 0",
  fontSize: "clamp(2rem, 5vw, 2.75rem)",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: "#ffffff",
});

const metaStyle = css({
  marginTop: "0.6rem",
  marginBottom: 0,
  fontSize: "0.9rem",
  color: "#8a8a8f",
});

const summaryStyle = css({
  marginTop: "2rem",
  marginBottom: 0,
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#e6e6eb",
  fontWeight: 200,
});

const sectionTitleStyle = css({
  margin: "2.5rem 0 0 0",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#8a8a8f",
});

const listStyle = css({
  marginTop: "1rem",
  marginBottom: 0,
  paddingLeft: "1.1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: "#e6e6eb",
  fontWeight: 200,
  "& li::marker": {
    color: "#5a5a63",
  },
});

const applyStyle = css({
  marginTop: "1rem",
  marginBottom: 0,
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#e6e6eb",
  fontWeight: 200,
});

const mailStyle = css({
  color: "#ffffff",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  textDecorationColor: "rgb(70, 70, 80)",
  transition: "text-decoration-color 0.3s ease",
  ":hover": {
    textDecorationColor: "#ffffff",
  },
});

export function CareerProductEngineer() {
  return (
    <div css={pageStyle}>
      <TopNavBar />

      <div css={contentStyle}>
        <Link css={backStyle} to="/career">
          <ArrowLeft css={backIconStyle} />
          Careers
        </Link>

        <h1 css={titleStyle}>Product Engineer</h1>
        <p css={metaStyle}>Engineering · Full-time · Remote</p>

        <p css={summaryStyle}>
          You will work on landlink, a communication network individuals run
          themselves over LoRa. Engineers here own an area from decision to
          release.
        </p>

        <h2 css={sectionTitleStyle}>Responsibilities</h2>
        <ul css={listStyle}>
          <li>
            Ship features across the web client, backend, and device firmware.
          </li>
          <li>Own an area end to end, including its reliability.</li>
          <li>Work in public repositories under MIT.</li>
          <li>Build interfaces for maps, telemetry, and network topology.</li>
          <li>Prototype pilot products under Project Fleet.</li>
        </ul>

        <h2 css={sectionTitleStyle}>Requirements</h2>
        <ul css={listStyle}>
          <li>Shipped products you can show us.</li>
          <li>TypeScript, and one systems language.</li>
          <li>Able to work across the stack without handoffs.</li>
          <li>Clear writing. The team is distributed and async.</li>
        </ul>

        <h2 css={sectionTitleStyle}>Bonus</h2>
        <ul css={listStyle}>
          <li>LoRa, RF, or mesh networking.</li>
          <li>Embedded work in Rust, C, or C++.</li>
          <li>WebGL, Three.js, or GIS.</li>
          <li>Drones or robotics.</li>
        </ul>

        <h2 css={sectionTitleStyle}>Apply</h2>
        <p css={applyStyle}>
          Send your GitHub and one thing you shipped to{" "}
          <a
            css={mailStyle}
            href="mailto:info@cartesiancs.com?subject=Product Engineer"
          >
            info@cartesiancs.com
          </a>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
}
