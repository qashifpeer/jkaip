"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";


export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true},[Autoplay()]);  

  return (
    <div className="embla h-[30vh] lg:h-[90vh] w-full bg-green-300" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex justify-center items-start">
         <Image src="/Images/Carousal/c1.jpg" alt="" className="w-full" width={900} height={640} />
        </div>
        <div className="embla__slide flex justify-center items-start">
        <Image src="/Images/Carousal/c2.jpg" alt="" className="w-full" width={900} height={640} />

        </div>
        <div className="embla__slide flex justify-center items-start">
        <Image src="/Images/Carousal/c3.jpg" alt="" className="w-full" width={900} height={640} />
        </div>
        
      </div>
    </div>
  );
}

{
  /* <div className="embla border h-56 max-w-lg mt-12 mx-auto" ref={emblaRef}>
<div className="embla__container h-full">
  <div className="embla__slide flex justify-center items-center">Slide 1</div>
  <div className="embla__slide flex justify-center items-center">Slide 2</div>
  <div className="embla__slide flex justify-center items-center">Slide 3</div>
</div>
</div> */
}
