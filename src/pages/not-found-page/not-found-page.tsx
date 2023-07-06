import { React } from 'services/imports-npm';

import errorIcon from '../../assets/icons/logo-2.png';

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="max-w-xl px-4 text-center">
        <a href="/" className="flex transition-all duration-150 hover:scale-95">
          <img
            src={errorIcon}
            alt="error"
            className="mx-auto flex object-cover"
          />
        </a>

        <p className="mt-10 text-6xl font-bold text-[var(--red-col-1)]">404</p>
        <p className="mt-5 text-2xl font-bold text-[var(--red-col-1)]">
          Not Found Page
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
