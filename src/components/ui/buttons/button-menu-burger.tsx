import { FC } from 'react';
import { React } from 'services/imports-npm';

interface IButtonMenuBurger {
  onClick: () => void;
}

const ButtonMenuBurger: FC<IButtonMenuBurger> = ({ onClick }) => {
  return (
    <div
      className="group absolute left-4 top-7 z-10 flex cursor-pointer flex-col items-center justify-center rounded-md bg-[var(--red-col-1)] 
		p-2 transition-all hover:scale-90 hover:bg-[var(--black-col-2)] hover:shadow-md hover:shadow-[var(--red-col-1)] lg:hidden"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <span className="my-1 h-0.5 w-7 bg-white group-hover:bg-[var(--red-col-1)]"></span>
        <span className="my-1 h-0.5 w-7 bg-white group-hover:bg-[var(--red-col-1)]"></span>
        <span className="my-1 h-0.5 w-7 bg-white group-hover:bg-[var(--red-col-1)]"></span>
      </div>
      <p className="mt-1 text-xs  uppercase group-hover:font-bold group-hover:text-[var(--red-col-1)]">
        Menu
      </p>
    </div>
  );
};

export default ButtonMenuBurger;
