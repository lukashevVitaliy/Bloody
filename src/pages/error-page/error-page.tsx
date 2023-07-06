import {
  React,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from 'services/imports-npm';

import errorIcon from '../../assets/icons/logo-2.png';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="max-w-xl px-4 text-center">
          <Link
            to="/"
            className="flex transition-all duration-150 hover:scale-95"
          >
            <img
              src={errorIcon}
              alt="error"
              className="mx-auto flex object-cover"
            />
          </Link>
          <p className="mt-10 text-6xl font-bold text-[var(--red-col-1)]">
            {error.status}
          </p>
          <p className="center mt-5 text-2xl font-bold text-[var(--red-col-1)]">
            {error.statusText || 'Что-то пошло не так!'}
          </p>
        </div>
      </div>
    );
  }

  throw error;
};

export default ErrorPage;
