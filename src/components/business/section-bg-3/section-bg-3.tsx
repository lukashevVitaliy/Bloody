import { FC } from 'react';
import { React, memo, useState, useEffect } from 'services/imports-npm';
import { ISectionBg3 } from 'types/components-types';

const SectionBg3: FC<ISectionBg3> = memo(({ background, title, subtitle }) => {
  const [isWebPSupported, setIsWebPSupported] = useState<boolean>(false);

  // Определение поддержки формата WebP
  useEffect(() => {
    const checkWebPSupport = () => {
      return new Promise((res) => {
        const webP = new Image();
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = () => {
          res(webP.height === 2);
        };
      });
    };

    checkWebPSupport().then((hasWebP) => {
      setIsWebPSupported(hasWebP);
    });
  }, []);

  const bgContent_3 = background.data.attributes.bg_content_1;
  const bgContent = isWebPSupported
    ? bgContent_3?.data.find(
        (content) => content.attributes.url.indexOf('.webp') !== -1
      )
    : bgContent_3?.data.find(
        (content) => content.attributes.url.indexOf('.jpg') !== -1
      );

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_STRAPI_URL}${
          bgContent?.attributes.url
        })`,
      }}
    >
      <div className="pt-24 text-center">
        <p className="mb-5 text-lg uppercase sm:text-3xl xl:text-5xl">
          {title}
        </p>
        <p className="mx-auto w-5/6 text-xs md:text-base">{subtitle}</p>
      </div>
    </div>
  );
});

export default SectionBg3;
