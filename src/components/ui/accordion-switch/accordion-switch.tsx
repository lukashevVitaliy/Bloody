import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionSwitch {
  uniqueSwitch: string[] | unknown[];
  accordionSwitch: boolean;
  onClick: () => void;
  setSelectSwitch: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionSwitch: FC<IAccordionSwitch> = memo(
  ({ uniqueSwitch, accordionSwitch, onClick, setSelectSwitch }) => {
    return (
      <>
        <Accordion
          id="switch"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Свитчи'}
          accordion={accordionSwitch}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueSwitch}
            onClick={setSelectSwitch}
            name=""
            accordionToggle={accordionSwitch}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionSwitch;
