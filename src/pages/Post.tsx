/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { MarkdownContent } from "../components/Markdown";
import TopNavBar from "../components/TopNavbar";
import Footer from "../components/Footer";

export default function Post() {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Try to fetch the markdown content from the server
        const response = await fetch(`/docs/post/${slug}.md`);

        if (!response.ok) {
          throw new Error("Post not found");
        }

        const content = await response.text();
        setPostContent(content);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError(true);
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

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

      {loading ? (
        <div css={css({ color: "#e6e6eb", marginTop: "2rem" })}>Loading...</div>
      ) : error ? (
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            color: "#e6e6eb",
            textAlign: "center",
          })}
        >
          <h2 css={css({ marginBottom: "1rem" })}>Post Not Found</h2>
          <p>The post you are looking for does not exist or is unavailable.</p>
        </div>
      ) : (
        <MarkdownContent content={postContent || ""} />
      )}
    </div>
  );
}
