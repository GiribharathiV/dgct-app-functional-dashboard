
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6">
        <div className="inline-block">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
            Technical Documentation
          </span>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 opacity-0 translate-y-8"
        >
          Education Dashboard
          <span className="block text-primary mt-2">Backend Documentation</span>
        </h1>
        
        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto mt-6 animate-fade-in animation-delay-200">
          A comprehensive overview of the architecture, functionality, security measures, and operational aspects of the Education Dashboard Backend service.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in animation-delay-300">
          <a
            href="#overview"
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Documentation
          </a>
          <a
            href="#architecture"
            className="px-6 py-3 rounded-full bg-white border border-gray-200 text-foreground font-medium hover:bg-gray-50 transition-colors"
          >
            View Architecture
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-subtle">
        <a
          href="#overview"
          className="flex flex-col items-center text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll to learn more</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
