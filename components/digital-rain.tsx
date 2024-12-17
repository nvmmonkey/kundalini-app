"use client";

import { useEffect, useRef } from "react";

// Add configuration object for shadow effects
const shadowConfig = {
  color: "#31f583", // Base color
  blurRadius: 3.3,
  neonIntensity: 5,
  spreadRadius: 8,
  opacity: 0.88,
  chromaticOffset: 6, // Pixel offset for RGB splitting
};

export default function DigitalRain({
  shadowColor = shadowConfig.color,
  blurRadius = shadowConfig.blurRadius,
  neonIntensity = shadowConfig.neonIntensity,
  spreadRadius = shadowConfig.spreadRadius,
  opacity = shadowConfig.opacity,
  chromaticOffset = shadowConfig.chromaticOffset,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const candyColors = [
      "#FF99C9", // Pink
      "#FFB6C1", // Light Pink
      "#87CEEB", // Sky Blue
      "#98FB98", // Pale Green
      "#DDA0DD", // Plum
      "#F0E68C", // Khaki
      "#FFB347", // Pastel Orange
      "#B19CD9", // Light Purple
    ];

    const drops: Array<{ position: number; colorIndex: number }> = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        position: 3,
        colorIndex: Math.floor(Math.random() * candyColors.length),
      };
    }

    const characters =
      "クンダリーニは本物の女の子です Kundalini is a real girl ";

    function createTextMask() {
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = canvas.width;
      maskCanvas.height = canvas.height;
      const maskCtx = maskCanvas.getContext("2d");
      if (!maskCtx) return null;

      maskCtx.fillStyle = "white";
      maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

      maskCtx.fillStyle = "white";
      maskCtx.font = "bold 80px Arial";
      maskCtx.textAlign = "center";
      maskCtx.textBaseline = "middle";
      maskCtx.fillText(
        "KUNDALINI",
        maskCanvas.width / 2,
        maskCanvas.height / 2
      );

      maskCtx.filter = "blur(12px)";

      return maskCanvas;
    }

    const maskCanvas = createTextMask();

    function createChromaticText(
      ctx: CanvasRenderingContext2D,
      text: string,
      x: number,
      y: number
    ) {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 80px Mono";

      // Function to create shifting RGB colors
      const getRGBColor = (time: number) => {
        const phase = time / 1000;
        return {
          r: Math.sin(phase) * 127 + 128,
          g: Math.sin(phase + 2) * 127 + 128,
          b: Math.sin(phase + 4) * 127 + 128,
        };
      };

      const time = Date.now();
      const rgbColor = getRGBColor(time);

      // Draw RGB channels with offset for chromatic aberration
      ctx.globalCompositeOperation = "screen";

      // Red channel
      ctx.shadowColor = `rgba(${rgbColor.r}, 0, 0, ${opacity})`;
      ctx.shadowBlur = blurRadius;
      ctx.shadowOffsetX = chromaticOffset;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = `rgba(${rgbColor.r}, 0, 0, ${opacity})`;
      ctx.fillText(text, x, y);

      // Green channel
      ctx.shadowColor = `rgba(0, ${rgbColor.g}, 0, ${opacity})`;
      ctx.shadowOffsetX = 0;
      ctx.fillStyle = `rgba(0, ${rgbColor.g}, 0, ${opacity})`;
      ctx.fillText(text, x, y);

      // Blue channel
      ctx.shadowColor = `rgba(0, 0, ${rgbColor.b}, ${opacity})`;
      ctx.shadowOffsetX = -chromaticOffset;
      ctx.fillStyle = `rgba(0, 0, ${rgbColor.b}, ${opacity})`;
      ctx.fillText(text, x, y);

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      // Add final sharp edge
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fillText(text, x, y);
    }

    function draw() {
      if (!ctx || !canvas || !maskCanvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      const maskCtx = maskCanvas.getContext("2d");
      if (!maskCtx) return;
      const maskData = maskCtx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i].position * fontSize;

        const pixelIndex = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
        const maskValue = maskData[pixelIndex];

        if (maskValue > 50) {
          const text = characters.charAt(
            Math.floor(Math.random() * characters.length)
          );

          ctx.fillStyle = candyColors[drops[i].colorIndex];
          ctx.fillText(text, x, y);
        }

        if (Math.random() > 0.95) {
          drops[i].colorIndex = (drops[i].colorIndex + 1) % candyColors.length;
        }

        if (
          drops[i].position * fontSize > canvas.height &&
          Math.random() > 0.95
        ) {
          drops[i].position = 0;
          drops[i].colorIndex = Math.floor(Math.random() * candyColors.length);
        }

        drops[i].position++;
      }

      // Apply chromatic text effect
      createChromaticText(
        ctx,
        "$Kundalini is a real girl",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    const intervalId = setInterval(draw, 33);

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newMaskCanvas = createTextMask();
      if (newMaskCanvas) {
        maskCanvas.width = newMaskCanvas.width;
        maskCanvas.height = newMaskCanvas.height;
        const maskCtx = maskCanvas.getContext("2d");
        if (maskCtx) {
          maskCtx.drawImage(newMaskCanvas, 0, 0);
        }
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, [
    shadowColor,
    blurRadius,
    neonIntensity,
    spreadRadius,
    opacity,
    chromaticOffset,
  ]);

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none', // This ensures clicks pass through
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}