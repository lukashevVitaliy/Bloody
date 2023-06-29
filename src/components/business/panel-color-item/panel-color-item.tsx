import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { IPanelColorItemProps } from 'types/components-types';

export const PanelColorItem: FC<IPanelColorItemProps> = memo(
  ({ colors, colorsScheme, activeItem, activeItemGallery }) => {
    return (
      <div
        className="mx-auto max-w-[43.75rem]"
        aria-label="большое изображение"
      >
        {colorsScheme[activeItem]?.images.data && (
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}
					${
            colorsScheme[activeItem]?.images.data[activeItemGallery].attributes
              .formats.medium?.url
          }`}
            alt={`${import.meta.env.VITE_STRAPI_URL}${
              colors?.data.attributes.model
            }`}
            className="object-cover"
          />
        )}
      </div>
    );
  }
);
