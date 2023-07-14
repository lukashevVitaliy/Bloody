import { React, forwardRef, useState, useEffect } from 'services/imports-npm';
import { ISectionMain } from 'types/components-types';

const SectionMain = forwardRef<HTMLDivElement, ISectionMain>(
  ({ background, children }, ref) => {
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

    const bgContent_1 = background.data.attributes.bg_content_1;
    const bgContent = isWebPSupported
      ? bgContent_1?.data.find(
          (content) => content.attributes.url.indexOf('.webp') !== -1
        )
      : bgContent_1?.data.find(
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
        ref={ref}
      >
        <div className="w-full pt-[8.5rem] pl-3 text-2xl leading-normal leading-[3.25rem] sm:w-[31.25rem] sm:pl-7 md:text-4xl md:leading-snug">
          {children}
        </div>
      </div>
    );
  }
);

export default SectionMain;
