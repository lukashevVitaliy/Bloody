import { FC } from 'react';
import { React } from 'services/imports-npm';
import { IListProductsProps } from 'types/components-types';

export const ListProducts: FC<IListProductsProps> = ({
  children,
  classes,
  tag: Tag,
}) => {
  return (
    <Tag className={classes} role="grid">
      {children}
    </Tag>
  );
};

ListProducts.defaultProps = {
  children: null,
  classes: '',
  tag: 'div',
};
