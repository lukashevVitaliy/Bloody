import { FC } from 'react';
import { React, memo, Link } from 'services/imports-npm';
import { IItemProductThumbnail } from 'types/components-types';

export const ItemProductThumbnail: FC<IItemProductThumbnail> = memo(
  ({ classes, path, urlImageItem, modelItem, ...attrs }) => {
    return (
      <li className={`${classes}`} {...attrs}>
        <Link to={path}>
          <img src={urlImageItem} alt={modelItem} className="object-cover" />
          <p className="mt-1 text-base text-[var(--white-col)] transition-all duration-150 group-hover:text-[var(--red-col-1)]">
            {modelItem}
          </p>
        </Link>
      </li>
    );
  }
);
