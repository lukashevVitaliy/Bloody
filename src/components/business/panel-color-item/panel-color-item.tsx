import { FC } from 'react';
import { React, memo, useState, useEffect } from 'services/imports-npm';
import { IPanelColorItemProps } from 'types/components-types';

export const PanelColorItem: FC<IPanelColorItemProps> = memo(
  ({ colors, colorsScheme, activeItem, activeItemGallery }) => {
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

    const imageUrl =
      colorsScheme[activeItem]?.images.data[activeItemGallery]?.attributes
        .formats.medium?.url;

    const shouldRender =
      imageUrl &&
      ((isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
        (!isWebPSupported && imageUrl.indexOf('.webp') === -1));

    return (
      <div
        className="mx-auto max-w-[43.75rem]"
        aria-label="большое изображение"
      >
        {shouldRender && (
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}${imageUrl}`}
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
