import { FC } from 'react';
import { React } from 'services/imports-npm';
import { IListProductsThumbnail } from 'types/components-types';

const ListProductsThumbnail: FC<IListProductsThumbnail> = ({
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

export default ListProductsThumbnail;

ListProductsThumbnail.defaultProps = {
  children: null,
  classes: '',
};
