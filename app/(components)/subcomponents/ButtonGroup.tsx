import Image from 'next/image';
import React from 'react'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: Record<string, any>) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="w-full flex justify-center md:hidden carousel-button-group absolute">
      <button disabled={currentSlide === 0} className={currentSlide === 0 ? 'opacity-70' : ''} onClick={() => previous()}>
        <Image
          src="/arrow-left.svg"
          width={60}
          height={20}
          alt="prev"
        />
      </button>
      <button className="mr-8" onClick={() => next()}>
        <Image
          src="/arrow-right.svg"
          width={60}
          height={20}
          alt="prev"
        />
      </button>
    </div>
  );
}

export default ButtonGroup