import { React, Outlet, Suspense } from 'services/imports-npm';
import { ToastContainer } from 'services/imports-npm';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'components/ui/spinner';

import Header from '../header/header';

export const Layout = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        limit={1}
        theme="dark"
        autoClose={1500}
      />
      <Header />
      <main className="ml-0 lg:ml-[209px]">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
