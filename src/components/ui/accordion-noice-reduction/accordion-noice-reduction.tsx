import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionNoiceReduction {
  uniqueNoiceReduction: string[] | unknown[];
  accordionNoiceReduction: boolean;
  onClick: () => void;
  setSelectNoiceReduction: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionNoiceReduction: FC<IAccordionNoiceReduction> = memo(
  ({
    uniqueNoiceReduction,
    accordionNoiceReduction,
    onClick,
    setSelectNoiceReduction,
  }) => {
    return (
      <>
        <Accordion
          id="noiceReduction"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Шумоподавление'}
          accordion={accordionNoiceReduction}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueNoiceReduction}
            onClick={setSelectNoiceReduction}
            name=""
            accordionToggle={accordionNoiceReduction}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionNoiceReduction;
