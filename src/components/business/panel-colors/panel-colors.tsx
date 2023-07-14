import { FC } from 'react';
import { React, memo, useState, useEffect } from 'services/imports-npm';
import { IPanelColorsItem } from 'types/components-types';

export const PanelColors: FC<IPanelColorsItem> = memo(
  ({ colors, colorsScheme, classes, activeItem, setActiveItem }) => {
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

    return (
      <div className={classes}>
        <span className="mb-3 inline-block text-xl uppercase text-[var(--gray-col-1)] md:text-4xl">
          Цвет
        </span>
        <div
          className="flex flex-wrap items-center justify-around bg-[var(--black-col-4)] p-4 md:flex-nowrap"
          role="grid"
          aria-label="цветовая гамма"
        >
          {colorsScheme.map(({ id, images }, i) => {
            const firstImage = images.data.find((image) => {
              if (
                isWebPSupported &&
                image.attributes.formats.thumbnail.url.endsWith('.webp')
              ) {
                return true; // Поддерживается .webp
              } else if (
                !isWebPSupported &&
                !image.attributes.formats.thumbnail.url.endsWith('.webp')
              ) {
                return true; // Не поддерживается .webp
              }
            });

            return (
              <button
                key={i}
                className="flex h-16 h-12 w-16 w-12 items-center justify-center md:mr-1"
                onClick={() => setActiveItem(i)}
                tabIndex={0}
              >
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${
                    firstImage?.attributes.url
                  }`}
                  alt={colors?.data.attributes.model}
                  className={
                    i === activeItem
                      ? 'border-2 border-white/50 p-[0.125rem]'
                      : 'border-2 border-black p-[0.125rem]'
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);
