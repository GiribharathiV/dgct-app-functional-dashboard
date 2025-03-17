
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  index?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        "animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-2xl glass-dark hover:shadow-lg",
        className
      )}
      style={{ transitionDelay: `${100 * index}ms` }}
    >
      {Icon && (
        <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/60">{description}</p>
    </div>
  );
};

export default Card;
