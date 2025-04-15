import React, { useEffect, useRef } from 'react';

const CircuitBoardBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Circuit board properties
    const gridSize = 40;
    const nodeRadius = 3;
    const nodeCount = 120;
    let nodes = [];
    let connections = [];
    
    // Get random color from blue-purple palette
    function getRandomColor() {
      const colors = [
        '#390ca3ca', '#4362eea5', '#4ccaf0c8', '#7109b7a7', '#570bada3',
        '#480ca89d', '#3e37c997', '#4896ef96', '#b5179dc0', '#f72584af'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Generate random nodes
    function generateNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        nodes.push({ x, y, color: getRandomColor() });
      }
    }
    
    // Generate connections between nodes
    function generateConnections() {
      connections = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Find closest nodes to connect to (1-3 connections)
        const connectionsCount = Math.floor(Math.random() * 3) + 1;
        const otherNodes = [...nodes];
        otherNodes.splice(i, 1);
        
        // Sort by distance
        otherNodes.sort((a, b) => {
          const distA = Math.sqrt(Math.pow(a.x - node.x, 2) + Math.pow(a.y - node.y, 2));
          const distB = Math.sqrt(Math.pow(b.x - node.x, 2) + Math.pow(b.y - node.y, 2));
          return distA - distB;
        });
        
        // Connect to closest nodes
        for (let j = 0; j < Math.min(connectionsCount, otherNodes.length); j++) {
          if (j < connectionsCount) {
            connections.push({
              x1: node.x,
              y1: node.y,
              x2: otherNodes[j].x,
              y2: otherNodes[j].y,
              color: getRandomColor(),
              activeOffset: Math.random() * 2000,
              progress: 0
            });
          }
        }
      }
    }
    
    // Draw the circuit board
    function drawCircuitBoard() {
      generateNodes();
      generateConnections();
    }
    
    // Draw node
    function drawNode(x, y, color) {
      ctx.beginPath();
      ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      
      // Glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    
    // Draw connection line
    function drawConnection(x1, y1, x2, y2, color, progress) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      
      // Calculate direction
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Draw line with progress
      const endX = x1 + dx * progress;
      const endY = y1 + dy * progress;
      
      ctx.lineTo(endX, endY);
      
      // Line style
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCircuitBoard();
    };
    
    // Animation loop
    let lastTime = 0;
    function animate(timestamp) {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
    
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      connections.forEach(connection => {
        // Update progress
        const elapsed = (timestamp + connection.activeOffset) % 4000;
        connection.progress = Math.min(1, elapsed / 2000);
        
        // Draw connection
        drawConnection(
          connection.x1, connection.y1,
          connection.x2, connection.y2,
          connection.color,
          connection.progress
        );
      });
      
      // Draw nodes
      nodes.forEach(node => {
        drawNode(node.x, node.y, node.color);
      });
      
      requestAnimationFrame(animate);
    }
    
    // Add event listener and start
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="circuit-board-container">
      <canvas ref={canvasRef} className="circuit-board-canvas" />
      <style jsx>{`
        .circuit-board-container {
          position: relative;
          /* top: 0; */
          /* left: 0; */
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }
        
        .circuit-board-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default CircuitBoardBackground;