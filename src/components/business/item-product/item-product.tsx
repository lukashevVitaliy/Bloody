import { FC } from 'react';
import { React, memo, Link } from 'services/imports-npm';
import { ItemProductProps } from 'types/components-types';

export const ItemProduct: FC<ItemProductProps> = memo(
  ({ classes, path, urlImageItem, modelItem, titleItem, ...attrs }) => {
    return (
      <Link to={path} className={`group ${classes}`} {...attrs}>
        <img src={urlImageItem} alt={modelItem} className="object-cover" />
        <h2 className="mt-[0.625rem] mb-[0.3125rem]">{modelItem}</h2>
        <p className="text-base uppercase text-[var(--gray-col-1)] transition-all duration-300 group-hover:text-[var(--white-col)]">
          {titleItem}
        </p>
      </Link>
    );
  }
);
