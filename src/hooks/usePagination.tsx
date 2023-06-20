import { useState } from 'services/imports-npm';

interface IPaginationProps {
  contentPerPage: number;
  count: number;
}

interface IPaginationHook {
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  page: number;
}

export const usePagination = ({
  contentPerPage,
  count,
}: IPaginationProps): IPaginationHook => {
  const [page, setPage] = useState<number>(1);
  // общее количество страниц (всего элементов/контента на каждой странице)
  const pageCount = Math.ceil(count / contentPerPage);
  // индекс последнего элемента текущей страницы
  const lastContentIndex = page * contentPerPage;
  // индекс первого элемента текущей страницы
  const firstContentIndex = lastContentIndex - contentPerPage;

  // изменить страницу в зависимости от направления вперед или назад
  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
