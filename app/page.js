"use client"

import { useEffect, useRef } from 'react';
import FlipCard from '@/components/FlipCard';
import { images } from '@/components/images';


export default function Home() {
  const sliderRef = useRef(null);

  let slider = null;
  useEffect(()=>{
    slider = sliderRef.current;
  })

  document.body.addEventListener("click", (e) => {
    FlipCard(slider)
  });

  return (
    <div ref={sliderRef}  className="slider">
      {
        images.map((item,index) => (
          <div className="item rounded-lg overflow-hidden " key={index} >
            <img src={item.src} alt='img' />
          </div>
        ))
      }
    </div>
  );
}
