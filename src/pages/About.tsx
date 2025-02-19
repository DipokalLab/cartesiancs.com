/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import "../App.css";
import { Button } from "../components/Button";
import TopNavBar from "../components/TopNavbar";
import { MarkdownContent } from "../components/Markdown";

export function About() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const getText = async () => {
    const response = await fetch("/docs/about.md");
    const text = await response.text();
    setContent(text);
  };

  useEffect(() => {
    getText();
  }, []);

  return (
    <div
      css={css({
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      })}
    >
      <TopNavBar />

      <MarkdownContent content={content} />
    </div>
  );
}
