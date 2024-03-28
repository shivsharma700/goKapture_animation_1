"use client"

import { useEffect, useRef } from 'react';
import FlipCard from '@/components/FlipCard';
import { images } from '@/components/images';

export default function Home() {
  const sliderRef = useRef();

  useEffect(() => {
    const slider = sliderRef.current;

    const handleClick = (e) => {
      FlipCard(slider);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={sliderRef} className="slider">
      {images.map((item, index) => (
        <div className="item rounded-lg overflow-hidden bg-slate-300 " key={index}>
          <img src={item.src} alt="img" />
        </div>
      ))}
    </div>
  );
}
