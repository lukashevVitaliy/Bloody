import { FC } from 'react';
import { React, useRef } from 'services/imports-npm';
import { ButtonClose } from 'components/ui/buttons/button-close';
import { useScrollbar } from 'hooks/useScrollbar';

import HeaderMenuProducts from '../header-menu-products/header-menu-products';
import HeaderMenu from '../header-menu/header-menu';
import { Logo } from '../logo';

interface IMenuBurger {
  activeMenu: boolean;
  onClick: () => void;
}

export const MenuBurger: FC<IMenuBurger> = ({ activeMenu, onClick }) => {
  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div
      className={`content-product fixed top-0 left-0 z-20 h-screen w-full overflow-y-auto backdrop-blur-sm  transition-all ${
        activeMenu ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      {...activeMenu}
      ref={contentWrapper}
    >
      <div className="min-h-screen w-4/5 border-r-2 border-[var(--red-col-1)] bg-[var(--black-col-2)]  p-5 md:w-2/5">
        <div className="relative flex flex-col">
          <ButtonClose
            classes="group absolute top-0 right-0 flex flex-col"
            onClick={onClick}
          />
          <div className="mt-10 h-full">
            <Logo classes="group relative z-10 h-[148px] w-full bg-[var(--black-col-2)]" />
            <HeaderMenuProducts />
            <HeaderMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBurger.defaultProps = {
  activeMenu: false,
};
