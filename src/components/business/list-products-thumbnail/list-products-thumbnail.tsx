import { FC } from 'react';
import { React } from 'services/imports-npm';
import { IListProductsThumbnail } from 'types/components-types';

export const ListProductsThumbnail: FC<IListProductsThumbnail> = ({
  children,
  classes,
  ...attrs
}) => {
  return (
    <ul className={classes} {...attrs}>
      {children}
    </ul>
  );
};

ListProductsThumbnail.defaultProps = {
  children: null,
  classes: '',
};
