import { FC } from 'react';
import { React, Link } from 'services/imports-npm';
import { IErrorMessage } from 'types/components-types';

import errorIcon from '../../../assets/icons/logo-2.png';

export const ErrorMessage: FC<IErrorMessage> = ({ text, message }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="max-w-xl px-4 text-center">
        <Link
          to="/"
          className="flex rounded-full transition-all duration-150 hover:scale-95"
        >
          <img
            src={errorIcon}
            alt="error"
            className="mx-auto flex object-cover"
          />
        </Link>

        <p className="mt-10 text-2xl font-bold text-[var(--red-col-1)]">
          {text}
        </p>
        <p className="mt-5 text-base font-light text-[var(--red-col-1)]">
          {message}
        </p>
      </div>
    </div>
  );
};
