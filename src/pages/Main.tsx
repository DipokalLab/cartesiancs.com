/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import "../App.css";

const fade = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }

  100% {
    transform: scale(1.2);
    opacity: 100;

  }
`;

const fadeReverse = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0;

  }

  100% {
    transform: scale(1);
    opacity: 100;

  }
`;

function Header() {
  return (
    <div
      css={css({
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <h1
        css={css({
          fontSize: "2rem",
          margin: "1rem",
          textAlign: "center",
          zIndex: 200,
          animation: `${fadeReverse} 2s ease`,
          animationFillMode: "forwards",
        })}
      >
        Cartesian Coordinate System
      </h1>
    </div>
  );
}

function Coordinate() {
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: any) => {
    const rate = 50;
    setTransform({
      x: -(e.clientX - window.innerWidth / 2) / rate,
      y: -(e.clientY - window.innerHeight / 2) / rate,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      css={css({
        position: "absolute",

        zIndex: 100,
        overflow: "hidden",
      })}
      style={{
        top: transform.y,
        left: transform.x,
      }}
    >
      <img
        css={css({
          backgroundImage: `url(/grid.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          position: "relative",
          height: "100vh",
          width: "100vw",
          outline: "none !important",
          boxShadow: "0 0 500px rgba(13,14,15,0.9) inset",
          animation: `${fade} 2s ease`,
          animationFillMode: "forwards",
        })}
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      ></img>
    </div>
  );
}

function Main() {
  return (
    <>
      <Coordinate></Coordinate>

      <Header></Header>
    </>
  );
}

export default Main;
