import { FC } from 'react';
import { IErrorFallback } from 'types/components-types';

import { React } from '../../../services/imports-npm';
import { ErrorMessage } from '../error-message';

export const ErrorFallback: FC<IErrorFallback> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <ErrorMessage text={'Something went wrong:'} message={error.message} />
    </div>
  );
};
