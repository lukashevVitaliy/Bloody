import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { IPanelColorsItem } from 'types/components-types';

export const PanelColors: FC<IPanelColorsItem> = memo(
  ({ colors, colorsScheme, classes, activeItem, setActiveItem }) => {
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
          {colorsScheme.map(({ id, images }, i) => (
            <button
              key={id}
              className="flex h-16 h-12 w-16 w-12 items-center justify-center md:mr-1"
              onClick={() => setActiveItem(i)}
              tabIndex={0}
            >
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  images?.data[0].attributes.formats.thumbnail?.url
                }`}
                alt={`${import.meta.env.VITE_STRAPI_URL}${
                  colors?.data.attributes.model
                }`}
                className={
                  i === activeItem
                    ? 'border-2 border-white/50 p-[2px]'
                    : 'border-2 border-black p-[2px]'
                }
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
);
