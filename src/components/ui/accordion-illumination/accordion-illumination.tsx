import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionIllumination {
  uniqueBacklighting: string[] | unknown[];
  accordionBacklighting: boolean;
  onClick: () => void;
  setSelectBacklighting: React.Dispatch<React.SetStateAction<null | string>>;
}

export const AccordionIllumination: FC<IAccordionIllumination> = memo(
  ({
    uniqueBacklighting,
    accordionBacklighting,
    onClick,
    setSelectBacklighting,
  }) => {
    return (
      <>
        <Accordion
          id="illumination"
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
            name=""
            accordionToggle={accordionBacklighting}
          />
        </Accordion>
      </>
    );
  }
);
