import { React } from 'services/imports-npm';
import { FC } from 'react';

interface IButtonClose {
  classes: string;
  onClick: () => void;
}

export const ButtonClose: FC<IButtonClose> = ({ classes, onClick }) => {
  return (
    <>
      <button className={classes} onClick={onClick}>
        <span
          className="my-1 h-0.5 w-7 rounded-sm bg-white transition-all group-hover:origin-top-left group-hover:rotate-45 
						group-hover:bg-[var(--red-col-1)]"
        ></span>
        <span className="my-1 h-0.5 w-7 rounded-sm bg-white  transition-all group-hover:w-0"></span>
        <span
          className="my-1 h-0.5 w-7 rounded-sm bg-white  transition-all group-hover:origin-top-left group-hover:-rotate-45 
						group-hover:bg-[var(--red-col-1)]"
        ></span>
      </button>
    </>
  );
};
