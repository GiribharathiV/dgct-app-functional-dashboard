
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  animate = true,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!animate) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [animate]);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto",
        className
      )}
    >
      <div className="max-w-3xl mx-auto mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 className={cn("text-3xl md:text-4xl font-bold", titleClassName)}>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-foreground/60">{subtitle}</p>
        )}
      </div>
      
      {children}
    </section>
  );
};

export default Section;
