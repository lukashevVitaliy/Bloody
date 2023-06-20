import { React, memo } from 'services/imports-npm';

import { ReactComponent as LeftArrow } from '../../../assets/icons/arrow-left-square.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/arrow-right-square.svg';

interface IPagination {
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}

const Pagination = memo(
  ({ page, totalPages, nextPage, prevPage }: IPagination) => {
    return (
      <div className="mt-6 flex items-center justify-center text-sm font-light text-[var(--red-col-1)] md:mt-10 md:text-base">
        <button
          type="button"
          className="mr-5 flex h-8 w-10 items-center justify-center rounded-md border border-[var(--red-col-1)] shadow-md 
					shadow-[var(--gray-col-2)] transition-all hover:scale-95 hover:border-[var(--gray-col-2)] 
					hover:text-[var(--gray-col-2)] hover:shadow-none md:mr-10"
          onClick={prevPage}
        >
          <LeftArrow className="flex h-7 w-7" />
        </button>
        <span className="text-lg">
          {page} из {totalPages}
        </span>
        <button
          type="button"
          className="ml-5 flex h-8 w-10 items-center justify-center rounded-md border border-[var(--red-col-1)] shadow-md 
					shadow-[var(--gray-col-2)] transition-all hover:scale-95 hover:border-[var(--gray-col-2)] 
					hover:text-[var(--gray-col-2)] hover:shadow-none md:ml-10"
          onClick={nextPage}
        >
          <RightArrow className="flex h-7 w-7" />
        </button>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
export default Pagination;
