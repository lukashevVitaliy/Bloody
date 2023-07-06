import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionBacklighting {
  uniqueBacklighting: string[];
  accordionBacklighting: boolean;
  onClick: () => void;
  setSelectBacklighting: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionBacklighting: FC<IAccordionBacklighting> = memo(
  ({
    uniqueBacklighting,
    accordionBacklighting,
    onClick,
    setSelectBacklighting,
  }) => {
    return (
      <>
        <Accordion
          id="backlighting"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Подсветка'}
          accordion={accordionBacklighting}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueBacklighting}
            onClick={setSelectBacklighting}
            accordionToggle={accordionBacklighting}
            name=""
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionBacklighting;
