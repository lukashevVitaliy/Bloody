import { FC } from 'react';
import { React, memo, Link, useState, useEffect } from 'services/imports-npm';
import { IItemProductThumbnail } from 'types/components-types';

const ItemProductThumbnail: FC<IItemProductThumbnail> = memo(
  ({ classes, path, urlImageItemArray, modelItem, ...attrs }) => {
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
      <li className={`${classes}`} {...attrs}>
        <Link to={path}>
          {urlImageItemArray?.data?.map(({ id, attributes }) => {
            const imageUrl = attributes.formats.thumbnail?.url;

            const shouldRender =
              (isWebPSupported && imageUrl?.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl?.indexOf('.webp') === -1);

            return shouldRender ? (
              <img
                key={id}
                src={`${import.meta.env.VITE_STRAPI_URL}${imageUrl}`}
                alt={modelItem}
                className="object-cover"
              />
            ) : null;
          })}
          <p className="mt-1 text-base text-[var(--white-col)] transition-all duration-150 group-hover:text-[var(--red-col-1)]">
            {modelItem}
          </p>
        </Link>
      </li>
    );
  }
);

export default ItemProductThumbnail;
