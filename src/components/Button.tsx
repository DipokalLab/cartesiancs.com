/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button
      css={css({
        zIndex: 200,
        position: "absolute",
        bottom: "4rem",
        padding: "0.25rem 0.5rem",
        border: "none",
        backgroundColor: "#1a1a1f",
        color: "#e8e8ed",
        cursor: "pointer",
        transition: "0.2s",
        borderRadius: "0.25rem",
        ":hover": {
          padding: "0.25rem 6rem",
          backgroundColor: "#3e3e42",
        },
      })}
      {...props}
    >
      {props.children}
    </button>
  );
}
