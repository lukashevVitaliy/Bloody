import { React, NavLink } from 'services/imports-npm';

import { ReactComponent as Mouse } from '../../../assets/icons/navigate/mouse.svg';
import { ReactComponent as Keyboard } from '../../../assets/icons/navigate/keyboard.svg';
import { ReactComponent as Headset } from '../../../assets/icons/navigate/headset.svg';
import { ReactComponent as Bluetooth } from '../../../assets/icons/navigate/bluethooth.svg';
import { ReactComponent as Accessories } from '../../../assets/icons/navigate/accessories.svg';

const HeaderMenuProducts = () => {
  const navigateMenu = [
    {
      id: 1,
      icon: (
        <Mouse
          className="h-[2.75rem] w-[2.75rem] fill-[var(--gray-col-1)] transition-all duration-300 group-hover:fill-[var(--white-col)]"
          aria-label="иконка мышки"
        />
      ),
      title: 'мыши',
      path: '/mice',
    },
    {
      id: 2,
      icon: (
        <Keyboard
          className={`h-[2.75rem] w-[2.75rem] fill-[var(--gray-col-1)] transition-all duration-300 group-hover:fill-[var(--white-col)]`}
          aria-label="иконка клавиатуры"
        />
      ),
      title: 'клавиатуры',
      path: '/keyboards',
    },
    {
      id: 3,
      icon: (
        <Headset
          className={`h-[2.75rem] w-[2.75rem] fill-[var(--gray-col-1)] transition-all duration-300 group-hover:fill-[var(--white-col)]`}
          aria-label="иконка гарнитуры"
        />
      ),
      title: 'гарнитуры',
      path: '/headsets',
    },
    {
      id: 4,
      icon: (
        <Bluetooth
          className={`h-[2.75rem] w-[2.75rem] fill-[var(--gray-col-1)] transition-all duration-300 group-hover:fill-[var(--white-col)]`}
          aria-label="иконка блютуз"
        />
      ),
      title: 'bluetooth',
      path: '/bluetooth',
    },
    {
      id: 5,
      icon: (
        <Accessories
          className={`h-[2.75rem] w-[2.75rem] fill-[var(--gray-col-1)] transition-all duration-300 group-hover:fill-[var(--white-col)]`}
          aria-label="иконка аксессуары"
        />
      ),
      title: 'аксессуары',
      path: '/accessories',
    },
  ];

  return (
    <nav className="border-y border-[var(--black-col-4)] bg-[var(--black-col-2)]">
      <ul>
        {navigateMenu.map(({ id, icon, title, path }) => (
          <li
            key={id}
            className={`group relative cursor-pointer`}
            aria-label={title}
          >
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive
                  ? `relative flex items-center border-l-4 border-[var(--red-col-1)] bg-[var(--black-col-3)] py-1`
                  : `relative flex items-center border-l-4 border-transparent py-1`
              }
            >
              <div className="z-20 flex h-full w-full items-center">
                <div className="flex w-20 justify-center">{icon}</div>
                <span className="ml-1 h-full w-full text-sm font-bold uppercase">
                  {title}
                </span>
              </div>
            </NavLink>
            <div className="transition-width absolute top-0 left-0 h-full w-0 bg-[var(--red-col-1)] duration-300 ease-in-out group-hover:w-full" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenuProducts;
