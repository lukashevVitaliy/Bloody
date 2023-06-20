import { React } from 'services/imports-npm';

import { ButtonMainSlider } from '../buttons';

import { getSlides } from './getSlides';
export const BulletsBlock = ({
  activeSlide,
  handleMouseEnter,
  handleMouseLeave,
  isHovering,
}) => {
  const slides = getSlides();

  return (
    <div className="absolute bottom-0 right-0 z-10 w-full bg-[#1a1a1d] px-4 pt-14 pb-4 text-center md:w-[500px] lg:w-[600px]">
      <div className="swiper-pagination"></div>
      <p className="mb-5 text-sm uppercase md:text-lg lg:text-2xl">
        {slides[activeSlide].title}
      </p>
      <ButtonMainSlider
        href={`${slides[activeSlide].path}${slides[activeSlide].slug}`}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isHovering={isHovering}
      />
    </div>
  );
};
