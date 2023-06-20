import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionNumberOfKey {
  uniqueNumberOfKeys: string[] | unknown[];
  accordionNumberOfKeys: boolean;
  onClick: () => void;
  setSelectNumberOfKeys: React.Dispatch<React.SetStateAction<null | string>>;
}

export const AccordionNumberOfKey: FC<IAccordionNumberOfKey> = memo(
  ({
    uniqueNumberOfKeys,
    accordionNumberOfKeys,
    onClick,
    setSelectNumberOfKeys,
  }) => {
    return (
      <>
        <Accordion
          id="numberOfKeys"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Кол-во клавиш'}
          accordion={accordionNumberOfKeys}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueNumberOfKeys}
            onClick={setSelectNumberOfKeys}
            name=""
            accordionToggle={accordionNumberOfKeys}
          />
        </Accordion>
      </>
    );
  }
);
