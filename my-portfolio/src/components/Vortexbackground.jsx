import React, { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

// Constants
const TAU = 2 * Math.PI;
const BASE_TTL = 50;
const RANGE_TTL = 150;
const PARTICLE_PROP_COUNT = 9;
const RANGE_HUE = 100;
const NOISE_STEPS = 3;
const X_OFF = 0.00125;
const Y_OFF = 0.00125;
const Z_OFF = 0.0005;

const VortexBackground = ({
  className = '',
  particleCount = 700,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  baseHue = 220,
  backgroundColor = '#000000',
  children,
}) => {
  const canvasRef = useRef(null);
  const [tick, setTick] = useState(0);
  const [center, setCenter] = useState([0, 0]);
  const animationFrameRef = useRef(null);
  const particlePropsRef = useRef(null);
  const ctxRef = useRef(null);

  const noise3D = createNoise3D();

  // Random functions
  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  // Init particle
  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas || !particlePropsRef.current) return;

    const props = particlePropsRef.current;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = BASE_TTL + rand(RANGE_TTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(RANGE_HUE);

    props.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  // Update particle
  const updateParticle = (i) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const props = particlePropsRef.current;
    if (!canvas || !ctx || !props) return;

    const [x, y, vx, vy, life, ttl, speed, radius, hue] = props.slice(i, i + PARTICLE_PROP_COUNT);

    const n = noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * TAU;
    const nextVx = lerp(vx, Math.cos(n), 0.5);
    const nextVy = lerp(vy, Math.sin(n), 0.5);
    const nextX = x + nextVx * speed;
    const nextY = y + nextVy * speed;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();
    ctx.restore();

    props.set([nextX, nextY, nextVx, nextVy, life + 1, ttl, speed, radius, hue], i);

    if (
      nextX > canvas.width ||
      nextX < 0 ||
      nextY > canvas.height ||
      nextY < 0 ||
      life > ttl
    ) {
      initParticle(i);
    }
  };

  // Draw particles
  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const props = particlePropsRef.current;

    if (!canvas || !ctx || !props) return;

    setTick((prev) => prev + 1);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < props.length; i += PARTICLE_PROP_COUNT) {
      updateParticle(i);
    }

    ctx.save();
    ctx.filter = 'blur(8px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = 'blur(4px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    animationFrameRef.current = requestAnimationFrame(draw);
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setCenter([canvas.width / 2, canvas.height / 2]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext('2d');
    if (!ctxRef.current) return;

    handleResize();

    const particlePropsLength = particleCount * PARTICLE_PROP_COUNT;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
      initParticle(i);
    }

    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VortexBackground;
