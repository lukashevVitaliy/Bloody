import { FC } from 'react';
import { React, memo, Link, useState, useEffect } from 'services/imports-npm';
import { ItemProductProps } from 'types/components-types';

export const ItemProduct: FC<ItemProductProps> = memo(
  ({ classes, path, urlImageArray, modelItem, titleItem, ...attrs }) => {
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
      <Link to={path} className={`group ${classes}`} {...attrs}>
        {urlImageArray.data?.map(({ id, attributes }) => {
          const shouldRender =
            (isWebPSupported &&
              attributes.formats.small.url.indexOf('.webp') !== -1) ||
            (!isWebPSupported &&
              attributes.formats.small.url.indexOf('.webp') === -1);

          return shouldRender ? (
            <img
              key={id}
              src={`${import.meta.env.VITE_STRAPI_URL}${
                attributes.formats.small.url
              }`}
              alt={modelItem}
              className="object-cover"
            />
          ) : null;
        })}
        <h2 className="mt-[0.625rem] mb-[0.3125rem]">{modelItem}</h2>
        <p className="text-base uppercase text-[var(--gray-col-1)] transition-all duration-300 group-hover:text-[var(--white-col)]">
          {titleItem}
        </p>
      </Link>
    );
  }
);
