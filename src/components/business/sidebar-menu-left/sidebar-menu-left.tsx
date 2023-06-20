import { FC } from 'react';
import { React } from 'services/imports-npm';
import { ISidebarMenuLeft } from 'types/components-types';

export const SidebarMenuLeft: FC<ISidebarMenuLeft> = ({
  children,
  classes,
}) => {
  return (
    <div className={classes} aria-label="Sidebar меню">
      {children}
    </div>
  );
};

SidebarMenuLeft.defaultProps = {
  children: null,
  classes: '',
};
