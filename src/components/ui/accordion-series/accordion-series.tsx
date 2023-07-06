import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionSeries {
  uniqueSeries: string[] | unknown[];
  accordionSeries: boolean;
  onClick: () => void;
  setSelectSeries: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionSeries: FC<IAccordionSeries> = memo(
  ({ uniqueSeries, accordionSeries, onClick, setSelectSeries }) => {
    return (
      <>
        <Accordion
          id="series"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Серия'}
          accordion={accordionSeries}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueSeries}
            onClick={setSelectSeries}
            name=" - серия"
            accordionToggle={accordionSeries}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionSeries;
