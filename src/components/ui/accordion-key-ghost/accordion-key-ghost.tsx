import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionNumberKeyGhost {
  uniqueKeyGhost: string[] | unknown[];
  accordionKeyGhost: boolean;
  onClick: () => void;
  setSelectKeyGhost: React.Dispatch<React.SetStateAction<null | string>>;
}

const AccordionKeyGhost: FC<IAccordionNumberKeyGhost> = memo(
  ({ uniqueKeyGhost, accordionKeyGhost, onClick, setSelectKeyGhost }) => {
    return (
      <>
        <Accordion
          id="keyGhost"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Клавиши Ghost'}
          accordion={accordionKeyGhost}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueKeyGhost}
            onClick={setSelectKeyGhost}
            name=""
            accordionToggle={accordionKeyGhost}
          />
        </Accordion>
      </>
    );
  }
);

export default AccordionKeyGhost;
