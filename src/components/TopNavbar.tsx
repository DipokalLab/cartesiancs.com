/** @jsxImportSource @emotion/react */
import React from "react";
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
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(13, 14, 15, 0.72)",
    backdropFilter: "blur(12px)",
    // 그라데이션을 반대로 적용: 상단이 검은색(마스크가 완전 적용되어 블러 효과가 보임), 하단은 투명
    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
    maskImage: "linear-gradient(to bottom, black, transparent)",
    zIndex: -1,
  },
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
  { name: "About", link: "/about" },
  { name: "Product", link: "/product" },
  { name: "Sheet", link: "/sheet" },
  { name: "GitHub", link: "https://github.com/cartesiancs" },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/cartesiancs" },
];

const TopNavBar = () => {
  return (
    <div css={navBarStyle}>
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
