
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);
  
  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [end]);
  
  const startAnimation = () => {
    const animateNumber = (timestamp: number) => {
      if (startTime.current === null) {
        startTime.current = timestamp;
      }
      
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const currentValue = progress * end;
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animateNumber);
      }
    };
    
    animationFrameId.current = requestAnimationFrame(animateNumber);
  };
  
  const formattedValue = displayValue.toFixed(decimals);
  
  return (
    <div ref={elementRef} className={cn("font-semibold", className)}>
      {prefix}
      {formattedValue}
      {suffix}
    </div>
  );
};

export default AnimatedNumber;
