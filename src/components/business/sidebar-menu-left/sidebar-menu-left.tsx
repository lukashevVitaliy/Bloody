import { FC } from 'react';
import { React } from 'services/imports-npm';
import { ISidebarMenuLeft } from 'types/components-types';

const SidebarMenuLeft: FC<ISidebarMenuLeft> = ({ children, classes }) => {
  return (
    <div className={classes} aria-label="Sidebar меню">
      {children}
    </div>
  );
};

export default SidebarMenuLeft;

SidebarMenuLeft.defaultProps = {
  children: null,
  classes: '',
};
