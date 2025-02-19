/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Markdown from "marked-react";

export function MarkdownContent({ content }: { content?: string }) {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      })}
    >
      <div
        css={css({
          display: "flex",
          padding: "1rem",
          maxWidth: "600px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "2rem",
          gap: "1rem",
          width: "100%",
        })}
      >
        <div
          css={css({
            paddingTop: "1.5rem",
            minHeight: "100%",
            padding: "1rem",
          })}
        >
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </div>
  );
}
