/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Footer() {
  return (
    <footer
      css={css({
        color: "#e6e6eb",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <p
        css={css({
          color: "#8a8a8f",
          fontSize: "0.9rem",
          width: "100%",
          textAlign: "center",
        })}
      >
        &copy; {new Date().getFullYear()} cartesiancs
      </p>
    </footer>
  );
}

export default Footer;
