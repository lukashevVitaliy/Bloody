import { React, forwardRef, useState, useEffect } from 'services/imports-npm';
import { ISectionBg2 } from 'types/components-types';

const SectionBg2 = forwardRef<HTMLDivElement, ISectionBg2>(
  ({ background }, ref) => {
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

    const bgContent_2 = background.data.attributes.bg_content_2;
    const bgContent = isWebPSupported
      ? bgContent_2?.data.find(
          (content) => content.attributes.url.indexOf('.webp') !== -1
        )
      : bgContent_2?.data.find(
          (content) => content.attributes.url.indexOf('.jpg') !== -1
        );

    return (
      <div
        ref={ref}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_STRAPI_URL}${
            bgContent?.attributes.url
          })`,
        }}
      ></div>
    );
  }
);

export default SectionBg2;
