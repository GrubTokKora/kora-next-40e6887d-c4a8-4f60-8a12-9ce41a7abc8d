"use client";

import { useState, useEffect } from 'react';

interface HeroSliderProps {
  images: string[];
  title: string;
  subtitle: string;
}

export function HeroSlider({ images, title, subtitle }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className="hero">
      {images.map((image, index) => (
        <div
          key={index}
          className="hero-slide"
          style={{ backgroundImage: `url(${image})`, opacity: index === currentIndex ? 1 : 0 }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p className="eyebrow">{subtitle}</p>
      </div>
    </section>
  );
}