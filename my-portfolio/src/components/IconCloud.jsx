import React, { useEffect, useRef, useState } from "react";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const imageUrls = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const IconCloud = ({ className }) => {
  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageCanvases = useRef([]);
  const positions = useRef([]);

  // Generate 3D positions for icons in a spherical layout
  const createSphere = (numIcons) => {
    const tempPositions = [];
    const phiIncrement = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const radius = 120; // Radius of the sphere

    for (let i = 0; i < numIcons; i++) {
      const y = 1 - (i / (numIcons - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const phi = phiIncrement * i;

      const x = Math.cos(phi) * radiusAtY * radius;
      const z = Math.sin(phi) * radiusAtY * radius;

      tempPositions.push({ x, y: y * radius, z });
    }

    positions.current = tempPositions;
  };

  // Preload images into circular offscreen canvases
  useEffect(() => {
    imageUrls.forEach((url, idx) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;
      img.onload = () => {
        const offscreen = document.createElement("canvas");
        offscreen.width = 40;
        offscreen.height = 40;
        const offCtx = offscreen.getContext("2d");
        offCtx.beginPath();
        offCtx.arc(20, 20, 20, 0, Math.PI * 2);
        offCtx.clip();
        offCtx.drawImage(img, 0, 0, 40, 40);
        imageCanvases.current[idx] = offscreen;
      };
    });

    createSphere(slugs.length);
  }, []);

  // Render icons with 3D rotation and cloud effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      positions.current.forEach((pos, index) => {
        if (!imageCanvases.current[index]) return;

        // Apply rotation around X and Y axis
        const xRot = pos.x * Math.cos(rotation.x) - pos.z * Math.sin(rotation.x);
        const zRot = pos.x * Math.sin(rotation.x) + pos.z * Math.cos(rotation.x);
        const yRot = pos.y * Math.cos(rotation.y) - zRot * Math.sin(rotation.y);
        const finalZ = pos.y * Math.sin(rotation.y) + zRot * Math.cos(rotation.y);

        // Perspective projection
        const scale = 300 / (300 + finalZ);
        const xPos = xRot * scale + canvas.width / 2;
        const yPos = yRot * scale + canvas.height / 2;

        // Draw the icon
        const size = 40 * scale;
        ctx.globalAlpha = Math.max(0.1, scale);
        ctx.drawImage(imageCanvases.current[index], xPos - size / 2, yPos - size / 2, size, size);
      });

      requestAnimationFrame(render);
    };

    render();
  }, [rotation]);

  // Handle mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  // Handle mouse move - with slower sensitivity
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setRotation((prev) => ({
      x: prev.x + (e.clientY - lastMousePos.current.y) * 0.002, // Smoother drag
      y: prev.y + (e.clientX - lastMousePos.current.x) * 0.002, // Smoother drag
    }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  // Handle mouse up
  const handleMouseUp = () => setIsDragging(false);

  // Optional: Auto-rotation for smooth effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 0.001,
        y: prev.y + 0.001,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};

export default IconCloud;
