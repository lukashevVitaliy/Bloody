import { React, Link } from 'services/imports-npm';

const PanelLanguage = () => {
  return (
    <div className="group relative z-10 flex h-[30px] items-center border-y border-[var(--black-col-4)] bg-[var(--black-col-2)]">
      <Link
        to="#lang"
        className="relative z-10 w-full duration-300 ease-in-out group-hover:fill-[var(--red-col-2)]"
      >
        <div className="flex justify-around text-xs font-bold">
          <span className="uppercase text-[var(--white-col)]">russia</span>
          <span className="uppercase text-[var(--gray-col-1)] transition-all duration-300 group-hover:text-[var(--white-col)]">
            language
          </span>
        </div>
      </Link>
      <div className="transition-width absolute top-0 left-0 h-full w-0 bg-[var(--red-col-1)] duration-300 ease-in-out group-hover:w-full" />
    </div>
  );
};

export default PanelLanguage;
