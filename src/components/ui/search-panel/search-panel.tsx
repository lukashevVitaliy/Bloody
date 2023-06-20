import { FC } from 'react';
import { React, useState } from 'services/imports-npm';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

interface ISearchPanel {
  productQuery: string | undefined;
  setSearchParams: () => void;
}

export const SearchPanel: FC<ISearchPanel> = ({
  setSearchParams,
  productQuery,
}) => {
  const [search, setSearch] = useState(productQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value.toLowerCase();

    setSearchParams({ product: query });
  };

  return (
    <form
      className="mb-5 flex h-10 w-[240px] items-center border-r border-[#5a5a5a] bg-[var(--black-col-4)] md:mb-0  "
      onSubmit={handleSubmit}
      role="search"
    >
      <label htmlFor="search" className="hidden">
        Поиск
      </label>
      <input
        type="search"
        name="search"
        className="h-full w-[200px] border-r border-[#5a5a5a] bg-[var(--black-col-4)] px-4 text-xs outline-none placeholder:text-[var(--gray-col-1)] "
        placeholder="Model #"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Поле поиска по содержимому на сайте"
      />
      <button className="w-10 cursor-pointer" type="submit" aria-label="Найти">
        <SearchIcon className="h-full w-full p-3 " />
      </button>
    </form>
  );
};
