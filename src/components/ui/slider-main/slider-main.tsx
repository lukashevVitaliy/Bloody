import {
  React,
  useRef,
  useState,
  Swiper,
  SwiperSlide,
  Autoplay,
  Pagination,
  useLoaderData,
} from 'services/imports-npm';

import { getSlides } from './getSlides';
import { BulletsBlock } from './bullets-block';
import { AutoplayProgress } from './autoplay-progress';
import { SlideItem } from './slide-item';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'overlayscrollbars/overlayscrollbars.css';

const SliderMain = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };

  const { mouse, keyboard_1, keyboard_2, headset, bluetooth, accessory } =
    useLoaderData();
  const slides = getSlides();

  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <Swiper
      pagination={pagination}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="home relative h-screen w-full"
      onSlideChange={handleSlideChange}
    >
      {slides.map(({ id, title, url, slug, path }) => (
        <SwiperSlide key={id}>
          {mouse && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            ) &&
            keyboard_1 && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            ) &&
            headset && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            ) &&
            bluetooth && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            ) &&
            accessory && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            ) &&
            keyboard_2 && (
              <SlideItem href={`${path}${slug}`} url={url} title={title} />
            )}
        </SwiperSlide>
      ))}
      <AutoplayProgress
        progressCircle={progressCircle}
        progressContent={progressContent}
      />
      <BulletsBlock
        activeSlide={activeSlide}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovering={isHovering}
      />
    </Swiper>
  );
};

export default SliderMain;
