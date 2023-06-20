import { React } from 'services/imports-npm';
import { FC } from 'react';
import { IAccordionList } from 'types/components-types';

export const AccordionList: FC<IAccordionList> = ({
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

AccordionList.defaultProps = {
  children: null,
  classes: '',
};
