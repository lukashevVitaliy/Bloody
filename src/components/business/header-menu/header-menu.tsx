import { React, NavLink } from 'services/imports-npm';

const HeaderMenu = () => {
  const menuItems = [
    { id: 1, title: 'o bloody', path: '/about' },
    { id: 2, title: 'поддержка', path: '/support' },
    { id: 3, title: 'пресс-центр', path: '/press-center' },
    { id: 4, title: 'галерея', path: '/gallery' },
    { id: 5, title: 'скачать', path: '/download' },
    { id: 6, title: 'магазин', path: '/shop' },
  ];

  return (
    <ul className="flex grow flex-col border-y border-[var(--black-col-4)] bg-[var(--black-col-2)]">
      {menuItems.map(({ id, title, path }) => (
        <li
          key={id}
          className={`group relative z-10 cursor-pointer`}
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
            <div className="z-20 flex h-8 w-full items-center">
              <div className="w-14 ">
                <span
                  className="mx-auto block h-1.5 w-1.5 rounded-full bg-[var(--gray-col-1)] 
								transition-all duration-300 group-hover:bg-[var(--white-col)]"
                ></span>
              </div>
              <span className="ml-1 text-sm font-bold uppercase">{title}</span>
            </div>
          </NavLink>
          <div className="transition-width absolute top-0 left-0 h-full w-0 bg-[var(--red-col-1)] duration-300 ease-in-out group-hover:w-full" />
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
