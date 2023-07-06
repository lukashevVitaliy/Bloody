import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionConnecting {
  uniqueConnecting: string[] | unknown[];
  accordionConnecting: boolean;
  onClick: () => void;
  setSelectConnecting: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionConnecting: FC<IAccordionConnecting> = memo(
  ({ uniqueConnecting, accordionConnecting, onClick, setSelectConnecting }) => {
    return (
      <>
        <Accordion
          id="connecting"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Подключение'}
          accordion={accordionConnecting}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueConnecting}
            onClick={setSelectConnecting}
            name=""
            accordionToggle={accordionConnecting}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionConnecting;
