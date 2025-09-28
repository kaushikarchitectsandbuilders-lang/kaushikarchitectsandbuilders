import React, { useState } from "react";

export default function MediaCarousel({ mediaItems , onClose}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % mediaItems.length);
  };

  const current = mediaItems[currentIndex];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "12px",
        width: "90vw",
        height: "90vh",
        position: 'fixed',
        top: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        margin: '5vw 5vw'

      }}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {/* Previous arrow */}
      <div
        onClick={prev}
        style={{
          cursor: "pointer",
          fontSize: "2rem",
          marginRight: "20px",
          color: "var(--primary-blue)",
          userSelect: "none",
        }}
      >
        &lt;
      </div>

      {/* Media content */}
      <div style={{ textAlign: "center", opacity:'1 !important' }}>
        {current.type === "image" && (
          <img
            src={current.src}
            alt="media"
            style={{ maxWidth: "100%", borderRadius: "8px", maxHeight: '80vh' }}
          />
        )}
        {current.type === "video" && (
          <video
            src={current.src}
            controls
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        )}
      </div>

      {/* Next arrow */}
      <div
        onClick={next}
        style={{
          cursor: "pointer",
          fontSize: "2rem",
          marginLeft: "20px",
          color: "var(--primary-blue)",
          userSelect: "none",
        }}
      >
        &gt;
      </div>
    </div>
  );
}
