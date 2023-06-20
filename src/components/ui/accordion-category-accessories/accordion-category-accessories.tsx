import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { FilterAccordionList } from 'components/business/filter-accordion-list';

import { Accordion } from '../accordion/accordion';

interface IAccordionСategoryAccessories {
  uniqueCategory: string[] | unknown[];
  accordionCategory: boolean;
  onClick: () => void;
  setSelectCategory: React.Dispatch<React.SetStateAction<null | string>>;
}

export const AccordionСategoryAccessories: FC<IAccordionСategoryAccessories> =
  memo(({ uniqueCategory, accordionCategory, onClick, setSelectCategory }) => {
    return (
      <>
        <Accordion
          id="category-accessories"
          classAcc={
            'relative border-y border-[var(--black-col-4)] py-2 md:py-4 px-4'
          }
          classTitle={'text-sm font-bold uppercase text-[#777]'}
          title={'Категория'}
          accordion={accordionCategory}
          onClick={onClick}
        >
          <FilterAccordionList
            items={uniqueCategory}
            onClick={setSelectCategory}
            name=""
            accordionToggle={accordionCategory}
          />
        </Accordion>
      </>
    );
  });
