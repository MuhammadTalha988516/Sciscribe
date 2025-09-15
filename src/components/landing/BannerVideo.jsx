import React from "react";

const BannerVideo = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" 
        poster="/bannerVideoFallback.webp" // 👈 shows instantly
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Optional fallback: Cover image for SEO & performance */}
      <noscript>
        <img
          src="/bannerVideoFallback.webp"
          alt="Research video background"
          className="w-full h-full object-cover"
        />
      </noscript>
    </div>
  );
};

export default BannerVideo;
