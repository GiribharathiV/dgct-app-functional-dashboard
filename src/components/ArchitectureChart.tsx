
import React, { useRef, useEffect } from 'react';

const ArchitectureChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      
      ctx.scale(pixelRatio, pixelRatio);
      
      drawArchitecture(ctx, width, height);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  const drawArchitecture = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const componentHeight = 60;
    const componentWidth = Math.min(300, width - 40);
    const verticalSpacing = 30;
    const totalComponents = 4;
    
    // Calculate total height needed
    const totalHeight = totalComponents * componentHeight + (totalComponents - 1) * verticalSpacing;
    const startY = (height - totalHeight) / 2;
    
    // Define colors
    const frontendColor = '#3B82F6';
    const backendColor = '#3B82F6';
    const databaseColor = '#3B82F6';
    const cicdColor = '#3B82F6';
    
    // Define components
    const components = [
      { name: 'Frontend (React/TypeScript)', color: frontendColor, y: startY },
      { name: 'Backend (Node.js/Express)', color: backendColor, y: startY + componentHeight + verticalSpacing },
      { name: 'Database (MySQL/MongoDB)', color: databaseColor, y: startY + (componentHeight + verticalSpacing) * 2 },
      { name: 'CI/CD Pipeline (Render.com)', color: cicdColor, y: startY + (componentHeight + verticalSpacing) * 3 }
    ];
    
    // Draw components
    components.forEach((component, index) => {
      drawComponent(ctx, centerX - componentWidth / 2, component.y, componentWidth, componentHeight, component.name, component.color);
      
      // Draw connecting lines
      if (index < components.length - 1) {
        ctx.beginPath();
        ctx.moveTo(centerX, component.y + componentHeight);
        ctx.lineTo(centerX, component.y + componentHeight + verticalSpacing);
        ctx.strokeStyle = component.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
    
    // Add animations (simulate with setInterval)
    let animationFrame = 0;
    const animationInterval = setInterval(() => {
      animationFrame = (animationFrame + 1) % 60;
      
      // Redraw components to reset
      components.forEach((component, index) => {
        drawComponent(ctx, centerX - componentWidth / 2, component.y, componentWidth, componentHeight, component.name, component.color);
      });
      
      // Draw data flow animation
      if (animationFrame < 30) {
        // Data flowing down
        components.slice(0, -1).forEach((component, index) => {
          const progress = animationFrame / 30;
          const startY = component.y + componentHeight;
          const endY = components[index + 1].y;
          const y = startY + (endY - startY) * progress;
          
          drawDataPacket(ctx, centerX, y, component.color);
        });
      } else {
        // Data flowing up (responses)
        components.slice(1).forEach((component, index) => {
          const actualIndex = components.length - 1 - index;
          const progress = (animationFrame - 30) / 30;
          const startY = component.y;
          const endY = components[actualIndex - 1].y + componentHeight;
          const y = startY - (startY - endY) * progress;
          
          drawDataPacket(ctx, centerX - 5, y, '#10B981');
        });
      }
    }, 50);
    
    // Clean up animation on component unmount
    return () => clearInterval(animationInterval);
  };
  
  const drawComponent = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    name: string,
    color: string
  ) => {
    // Draw rounded rectangle
    const radius = 10;
    
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    
    // Fill rectangle
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    
    // Draw border
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Add text
    ctx.font = '14px SF Pro Display, Inter, sans-serif';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, x + width / 2, y + height / 2);
  };
  
  const drawDataPacket = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string) => {
    const size = 6;
    
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size, y);
    ctx.closePath();
    
    ctx.fillStyle = color;
    ctx.fill();
  };
  
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ArchitectureChart;
