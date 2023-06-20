import { FC } from 'react';
import { React, useState } from 'services/imports-npm';
import { ButtonMenuBurger } from 'components/ui/buttons';

import HeaderMenuProducts from '../header-menu-products/header-menu-products';
import HeaderMenu from '../header-menu/header-menu';
import Logo from '../logo/logo';
import { MenuBurger } from '../menu-burger';

const Header: FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const handleClickMenuBurger = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className={`? relative ${activeMenu ? 'scroll-off' : ''}`}>
      <ButtonMenuBurger onClick={handleClickMenuBurger} />
      <div className="absolute -left-[209px] top-0 flex h-full w-[209px] flex-col lg:fixed lg:left-0 lg:top-0">
        <Logo classes="group relative z-10 h-[148px] w-full bg-[var(--black-col-2)]" />
        <HeaderMenuProducts />
        <HeaderMenu />
      </div>
      <MenuBurger activeMenu={activeMenu} onClick={handleClickMenuBurger} />
    </header>
  );
};

export default Header;
