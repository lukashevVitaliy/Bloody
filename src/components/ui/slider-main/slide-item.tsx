import { FC } from 'react';
import { React, Link } from 'services/imports-npm';
import { ISlideItem } from 'types/components-types';

export const SlideItem: FC<ISlideItem> = ({ href, url, title }) => (
  <Link to={href}>
    <img src={url} alt={title} className="h-screen w-full object-cover" />
  </Link>
);
