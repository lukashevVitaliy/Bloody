import { React } from 'services/imports-npm';

import spinner from '../../ui/spinner/spinner.svg';

export const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-24">
      <img src={spinner} alt="loading" className="object-cover" />
    </div>
  );
};
