import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { IPanelGallery } from 'types/components-types';

export const PanelGallery: FC<IPanelGallery> = memo(
  ({
    colors,
    colorsScheme,
    activeItem,
    activeItemGallery,
    setActiveItemGallery,
  }) => {
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
          {colorsScheme[activeItem]?.images.data.map((image, index) => (
            <button
              key={index}
              className="mr-1 flex h-16 w-16 sm:h-24 sm:w-24 md:h-[6.25rem] md:w-[6.25rem]"
              onClick={() => setActiveItemGallery(index)}
              tabIndex={0}
            >
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  image?.attributes.formats.thumbnail?.url
                }`}
                alt={`${import.meta.env.VITE_STRAPI_URL}${
                  colors?.data.attributes.model
                }`}
                className={
                  index === activeItemGallery
                    ? 'border-2 border-white/50 p-[0.125rem]'
                    : 'border-2 border-black p-[0.125rem]'
                }
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
);
