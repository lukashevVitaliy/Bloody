import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { IAccordionListItem } from 'types/components-types';

export const AccordionListItem: FC<IAccordionListItem> = memo(
  ({ classes, item, name, onClick, ...attrs }) => {
    return (
      <li className={classes} onClick={onClick} {...attrs} tabIndex={0}>
        {`${item} ${name}`}
      </li>
    );
  }
);

AccordionListItem.defaultProps = {
  classes: '',
  item: '',
  name: '',
  onClick: () => {},
};
