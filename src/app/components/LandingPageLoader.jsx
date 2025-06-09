// components/
"use client";

import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function useMediaLoaded(mediaSources = []) {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (!mediaSources.length) {
      setAllLoaded(true);
      return;
    }

    let loaded = 0;
    const total = mediaSources.length;
    let cancelled = false;

    function checkDone() {
      loaded++;
      if (loaded === total && !cancelled) setAllLoaded(true);
    }

    mediaSources.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.oncanplaythrough = checkDone;
        video.onerror = checkDone;
      } else {
        const img = new window.Image();
        img.src = src;
        img.onload = checkDone;
        img.onerror = checkDone;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [mediaSources]);

  return allLoaded;
}

export default function LandingPageLoader({ loadingMedia = [], children }) {
  const allLoaded = useMediaLoaded(loadingMedia);
  const [showContent, setShowContent] = useState(false);

  function handleLoaderDone() {
    setShowContent(true);
  }

  return (
    <>
      {!showContent && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[9999] bg-white flex items-center justify-center"
        >
          <Loader done={allLoaded} onDone={handleLoaderDone} />
        </div>
      )}
      {showContent && children}
    </>
  );
}
