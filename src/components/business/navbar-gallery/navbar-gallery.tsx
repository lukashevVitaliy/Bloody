import { React } from 'services/imports-npm';
import { Dispatch, FC, SetStateAction } from 'react';

const links = [
  { id: 1, title: 'lifestyle' },
  { id: 2, title: 'wallpaper' },
  { id: 3, title: 'models' },
  { id: 4, title: 'all' },
];

interface INavbarGallery {
  setActiveNavMenu: Dispatch<SetStateAction<string>>;
  activeNavMenu: string;
}

const NavbarGallery: FC<INavbarGallery> = ({
  activeNavMenu,
  setActiveNavMenu,
}) => {
  const handleClick = (title: string) => {
    setActiveNavMenu(title);
  };

  return (
    <ul className="flex w-[20rem] justify-between ">
      {links.map(({ id, title }) => (
        <li
          key={id}
          className={
            activeNavMenu === title
              ? 'cursor-pointer text-sm uppercase text-[var(--red-col-1)] transition-all duration-150'
              : 'cursor-pointer text-sm uppercase text-[var(--gray-col-2)] transition-all duration-150 hover:text-[var(--red-col-1)]'
          }
          onClick={() => handleClick(title)}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default NavbarGallery;
