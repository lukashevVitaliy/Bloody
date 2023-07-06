import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionMode {
  uniqueMode: string[] | unknown[];
  accordionMode: boolean;
  onClick: () => void;
  setSelectMode: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionMode: FC<IAccordionMode> = memo(
  ({ uniqueMode, accordionMode, onClick, setSelectMode }) => {
    return (
      <>
        <Accordion
          id="mode"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Свитчи'}
          accordion={accordionMode}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueMode}
            onClick={setSelectMode}
            name=""
            accordionToggle={accordionMode}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionMode;
