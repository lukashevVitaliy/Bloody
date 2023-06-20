import { FC } from 'react';
import { React, Link } from 'services/imports-npm';

import { ReactComponent as LogoSVG } from '../../../assets/icons/logo.svg';

interface ILogo {
  classes: string;
}

const Logo: FC<ILogo> = ({ classes }) => {
  return (
    <div className={classes} role="logo">
      <Link to="/" className="group flex h-[148px] w-full justify-center">
        <LogoSVG
          className="transition-width relative z-10 h-full w-full fill-[var(--red-col-2)] py-3 duration-300 ease-in-out group-hover:fill-white"
          aria-label="Иконка Bloody"
        />
      </Link>
      <div
        className="transition-width absolute top-0 left-0 z-0 block h-full w-0 bg-[var(--red-col-1)] duration-300 
			ease-in-out group-hover:w-full"
      ></div>
    </div>
  );
};

export default Logo;
