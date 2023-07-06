import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionSpeakers {
  uniqueSpeakers: string[] | unknown[];
  accordionSpeakers: boolean;
  onClick: () => void;
  setSelectSpeakers: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionSpeakers: FC<IAccordionSpeakers> = memo(
  ({ uniqueSpeakers, accordionSpeakers, onClick, setSelectSpeakers }) => {
    return (
      <>
        <Accordion
          id="speakers"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Динамики'}
          accordion={accordionSpeakers}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueSpeakers}
            onClick={setSelectSpeakers}
            name=""
            accordionToggle={accordionSpeakers}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionSpeakers;
