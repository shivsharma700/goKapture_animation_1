"use client"

import moveCard from "./moveCard";
import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function FlipCard(slider){
    let state = Flip.getState(".item");
    
    moveCard(slider);
    
    Flip.from(state, {
          targets: ".item",
          ease: "sine.inOut",
          absolute: true,
          onEnter: (elements) => {
            return gsap.from(elements, {
              yPercent: 20,
              opacity: 0,
              ease: "sine.out"
            });
          },
          onLeave: (element) => {
            return gsap.to(element, {
              yPercent: 20,
              xPercent: -20,
              transformOrigin: "bottom left",
              opacity: 0,
              ease: "sine.out",
              onComplete () {
                console.log("logging", element[0])
                slider.removeChild(element[0]);
              }
            });
          }
    });
}