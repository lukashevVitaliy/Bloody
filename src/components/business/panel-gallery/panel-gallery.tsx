import { FC } from 'react';
import { React, memo, useState, useEffect } from 'services/imports-npm';
import { IPanelGallery } from 'types/components-types';

export const PanelGallery: FC<IPanelGallery> = memo(
  ({
    colors,
    colorsScheme,
    activeItem,
    activeItemGallery,
    setActiveItemGallery,
  }) => {
    const [isWebPSupported, setIsWebPSupported] = useState<boolean>(false);
    const [firstSupportedIndex, setFirstSupportedIndex] = useState<number>(0);

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

      setActiveItemGallery(0);
    }, []);

    useEffect(() => {
      // Поиск первого элемента с поддерживаемым форматом
      const firstSupportedIndex = colorsScheme[
        activeItem
      ]?.images.data.findIndex((image) => {
        const imageUrl = image.attributes.formats.thumbnail.url;
        return (
          (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
          (!isWebPSupported && imageUrl.indexOf('.webp') === -1)
        );
      });
      setFirstSupportedIndex(firstSupportedIndex);
      setActiveItemGallery(firstSupportedIndex);
    }, [activeItem, colorsScheme, isWebPSupported]);

    return (
      <div>
        <span className="mb-3 inline-block text-xl uppercase text-[var(--gray-col-1)] md:text-4xl">
          Галерея
        </span>
        <div
          className="grid auto-rows-fr grid-cols-4 justify-items-center gap-[0.125rem] bg-[var(--black-col-4)] p-4 md:grid-cols-2"
          role="grid"
          aria-label="вид с разных сторон"
        >
          {colorsScheme[activeItem].images.data.map(({ attributes }, i) => {
            const imageUrl = attributes.formats.thumbnail.url;

            const shouldRender =
              (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

            return shouldRender ? (
              <button
                key={i}
                className="mr-1 flex h-16 w-16 sm:h-24 sm:w-24 md:h-[6.25rem] md:w-[6.25rem]"
                onClick={() => setActiveItemGallery(i)}
                tabIndex={0}
              >
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${imageUrl}`}
                  alt={colors?.data.attributes.model}
                  className={
                    i === activeItemGallery
                      ? 'border-2 border-white/50 p-[0.125rem]'
                      : 'border-2 border-black p-[0.125rem]'
                  }
                />
              </button>
            ) : null;
          })}
        </div>
      </div>
    );
  }
);

{
  /* <div>
        <span className="mb-3 inline-block text-xl uppercase text-[var(--gray-col-1)] md:text-4xl">
          Галерея
        </span>
        <div
          className="grid auto-rows-fr grid-cols-4 justify-items-center gap-[0.125rem] bg-[var(--black-col-4)] p-4 md:grid-cols-2"
          role="grid"
          aria-label="вид с разных сторон"
        >
          {colorsScheme[activeItem]?.images.data.map((image, i) => (
            <button
              key={i}
              className="mr-1 flex h-16 w-16 sm:h-24 sm:w-24 md:h-[6.25rem] md:w-[6.25rem]"
              onClick={() => setActiveItemGallery(i)}
              tabIndex={0}
            >
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  image?.attributes.formats.thumbnail?.url
                }`}
                alt={colors?.data.attributes.model}
                className={
                  i === activeItemGallery
                    ? 'border-2 border-white/50 p-[0.125rem]'
                    : 'border-2 border-black p-[0.125rem]'
                }
              />
            </button>
          ))}
        </div>
      </div> */
}
