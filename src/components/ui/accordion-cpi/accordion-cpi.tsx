import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionCPI {
  uniqueCPI: string[] | unknown[];
  accordionCPI: boolean;
  onClick: () => void;
  setSelectCPI: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionCPI: FC<IAccordionCPI> = memo(
  ({ uniqueCPI, accordionCPI, onClick, setSelectCPI }) => {
    return (
      <>
        <Accordion
          id="cpi"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'CPI'}
          accordion={accordionCPI}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueCPI}
            onClick={setSelectCPI}
            name="cpi"
            accordionToggle={accordionCPI}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionCPI;
