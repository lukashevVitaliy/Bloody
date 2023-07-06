import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionHeadband {
  uniqueHeadband: string[] | unknown[];
  accordionHeadband: boolean;
  onClick: () => void;
  setSelectHeadband: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionHeadband: FC<IAccordionHeadband> = memo(
  ({ uniqueHeadband, accordionHeadband, onClick, setSelectHeadband }) => {
    return (
      <>
        <Accordion
          id="headband"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Оголовье'}
          accordion={accordionHeadband}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueHeadband}
            onClick={setSelectHeadband}
            name=""
            accordionToggle={accordionHeadband}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionHeadband;
