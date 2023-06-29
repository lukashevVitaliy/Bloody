import { FC } from 'react';
import { React } from 'services/imports-npm';
import { IAccordion } from 'types/components-types';

import { ReactComponent as Close } from '../../../assets/icons/close.svg';

export const Accordion: FC<IAccordion> = ({
  children,
  classAcc,
  classTitle,
  title,
  accordion,
  onClick,
  ...attrs
}) => {
  return (
    <div className={classAcc} {...attrs} role="navigation" aria-label={title}>
      <p className={classTitle}>{title}</p>
      <Close
        className={
          accordion
            ? 'absolute top-[0.75rem] right-5 h-3 w-3 cursor-pointer stroke-white transition-all duration-150 md:top-[1.25rem]'
            : 'absolute top-[0.75rem] right-5 h-3 w-3 rotate-45 cursor-pointer stroke-white transition-all duration-150 md:top-[1.25rem]'
        }
        onClick={onClick}
      />
      {children}
    </div>
  );
};
