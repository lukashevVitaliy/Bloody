import { React, memo, useLoaderData, useState } from 'services/imports-npm';
import { IItemBackground } from 'types/components-types';

const Navbar = memo(({ ...props }) => {
  const [activeLink, setActiveLink] = useState<null>(null);

  const { background } = useLoaderData() as { background: IItemBackground };
  const { startRef, galleryRef, featuresRef, characteristicsRef } = props;

  const links = [
    { id: 1, title: 'Начало', ref: startRef },
    { id: 2, title: 'Галерея', ref: galleryRef },
    { id: 3, title: 'Особенности', ref: featuresRef },
    { id: 4, title: 'Характеристики', ref: characteristicsRef },
  ];
  const handleClick = (ref, id) => {
    setActiveLink(id);
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className="fixed top-0 z-20 flex w-[calc(100%-7.5rem)] items-center justify-between bg-gradient-to-b 
			from-black to-transparent px-3 py-3 ring-0 sm:w-[calc(100%-10rem)] sm:px-7 lg:w-[calc(100%-22.875rem)]"
    >
      <span className="text-3xl text-[var(--red-col-1)] sm:text-5xl md:text-6xl">
        {background?.data.attributes.model}
      </span>
      <ul className="flex flex-col justify-between xl:w-[36.5rem] xl:flex-row">
        {links.map(({ id, title, ref }) => (
          <li key={id}>
            <button
              className={`cursor-pointer text-xs font-bold uppercase text-[var(--white-col)] transition-all duration-150 
							hover:text-[var(--red-col-1)] md:text-sm ${
                activeLink !== id ? 'active' : 'text-[var(--red-col-2)]'
              }`}
              onClick={() => handleClick(ref, id)}
              tabIndex={0}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
