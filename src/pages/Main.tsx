/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import "../App.css";
import { Button } from "../components/Button";

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
  const [removedSubstrCoord, setRemovedSubstrCoord] = useState("oordinate");
  const [removedSubstrSystem, setRemovedSubstrSystem] = useState("ystem");

  const [stageCoord, setStageCoord] = useState(0);
  const [stageSystem, setStageSystem] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const intervalCoord = setInterval(() => {
        setRemovedSubstrCoord((prev) => {
          if (prev.length === 0) {
            clearInterval(intervalCoord);
            setStageCoord(1);
            return "";
          }
          return prev.slice(1);
        });
      }, 300);

      const intervalSystem = setInterval(() => {
        setRemovedSubstrSystem((prev) => {
          if (prev.length === 0) {
            clearInterval(intervalSystem);
            setStageSystem(1);
            return "";
          }

          return prev.slice(1);
        });
      }, 600);

      return () => {
        clearInterval(intervalCoord);
        clearInterval(intervalSystem);
      };
    }, 1000);
  }, []);

  const handleClickReplay = () => {
    setRemovedSubstrCoord("oordinate");
    setRemovedSubstrSystem("ystem");
    setStageCoord(0);
    setStageCoord(0);

    const intervalCoord = setInterval(() => {
      setRemovedSubstrCoord((prev) => {
        if (prev.length === 0) {
          clearInterval(intervalCoord);
          setStageCoord(1);
          return "";
        }
        return prev.slice(1);
      });
    }, 300);

    const intervalSystem = setInterval(() => {
      setRemovedSubstrSystem((prev) => {
        if (prev.length === 0) {
          clearInterval(intervalSystem);
          setStageSystem(1);
          return "";
        }

        return prev.slice(1);
      });
    }, 600);
  };

  let displayedText = `cartesian c${removedSubstrCoord} s${removedSubstrSystem}`;

  if (stageCoord === 1 && stageSystem === 1) {
    displayedText = "cartesiancs";
  }

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
        {displayedText}
      </h1>
      {stageCoord === 1 && stageSystem === 1 && (
        <Button onClick={handleClickReplay}>replay</Button>
      )}
    </div>
  );
}

function Coordinate() {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
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
        width: "100%",
        height: "100%",
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
        alt="header"
      />
    </div>
  );
}

function Main() {
  return (
    <>
      <Coordinate />
      <Header />
    </>
  );
}

export default Main;
