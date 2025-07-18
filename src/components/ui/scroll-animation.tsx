import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'slide-up';
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({ 
  children, 
  className, 
  animation = 'fade-in', 
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-left':
        return 'scroll-slide-left';
      case 'slide-right':
        return 'scroll-slide-right';
      case 'slide-up':
        return 'scroll-fade-in';
      default:
        return 'scroll-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        isVisible && 'visible',
        className
      )}
    >
      {children}
    </div>
  );
}