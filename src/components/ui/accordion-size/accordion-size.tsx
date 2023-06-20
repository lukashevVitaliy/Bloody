import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionSize {
  uniqueSize: string[] | unknown[];
  accordionSize: boolean;
  onClick: () => void;
  setSelectSize: React.Dispatch<React.SetStateAction<null | string>>;
}

export const AccordionSize: FC<IAccordionSize> = memo(
  ({ uniqueSize, accordionSize, onClick, setSelectSize }) => {
    return (
      <>
        <Accordion
          id="sizes"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Размер'}
          accordion={accordionSize}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueSize}
            onClick={setSelectSize}
            name=""
            accordionToggle={accordionSize}
          />
        </Accordion>
      </>
    );
  }
);
