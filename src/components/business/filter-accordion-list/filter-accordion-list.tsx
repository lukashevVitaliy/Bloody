import { FC } from 'react';
import { React } from 'services/imports-npm';
import { AccordionList } from 'components/ui/accordion-list';
import { AccordionListItem } from 'components/ui/accordion-list-item';
import { IFilterAccordionList } from 'types/components-types';

export const FilterAccordionList: FC<IFilterAccordionList> = ({
  items,
  accordionToggle,
  onClick,
  name,
}) => {
  return (
    <AccordionList
      classes={
        accordionToggle
          ? 'block truncate transition-all duration-300'
          : 'hidden transition-all duration-300'
      }
    >
      {items.map((item, i) => (
        <AccordionListItem
          key={i}
          classes={
            'block cursor-pointer py-1.5 text-xs transition-all duration-300 hover:text-[var(--red-col-1)]'
          }
          item={item}
          name={name}
          onClick={() => onClick(item)}
        />
      ))}
    </AccordionList>
  );
};
