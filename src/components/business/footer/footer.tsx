import { React, Link } from 'services/imports-npm';

import VK from '../../../assets/icons/social/vk.jpg';

const productsList = [
  { id: '1p', title: 'Мыши', path: '/mice' },
  { id: '2p', title: 'Клавиатуры', path: '/keyboards' },
  { id: '3p', title: 'Гарнитуры', path: '/headsets' },
  { id: '4p', title: 'Аксессуары', path: '/accessories' },
  // { id: '5p', title: 'Кресла', path: '#' },
  { id: '6p', title: 'Bluetooth', path: '/bluetooth' },
];
const about = [{ id: '1a', title: 'Наша история', path: '/about' }];
const support = [
  { id: '1s', title: 'Поддержка', path: '/support' },
  { id: '2s', title: 'Сотрудничество', path: '/support' },
];
const press = [
  { id: '1pr', title: 'Новости', path: '/press-center' },
  { id: '2pr', title: 'Тесты/Обзоры', path: '/press-center' },
  { id: '3pr', title: 'Видео', path: '/press-center' },
];
const download = [
  { id: '1в', title: 'Программное обеспечение', path: '/download' },
];
const socialLinks = [
  {
    id: 'vk',
    title: 'VK',
    icon: VK,
    path: 'https://vk.com/bloody_official',
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-10">
      <div
        className="grid grid-cols-3 justify-center gap-3 border-b border-[var(--black-col-4)] p-4 md:grid-cols-4 lg:grid-cols-6
			lg:gap-x-3"
      >
        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">
            Продукты
          </p>
          <ul>
            {productsList.map(({ id, title, path }) => (
              <li key={id} className="sm:mb-1">
                <Link
                  to={path}
                  className="text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">
            O Bloody
          </p>
          <ul>
            {about.map(({ id, title, path }) => (
              <li key={id} className="mb-1">
                <Link
                  to={path}
                  className="text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">
            Поддержка
          </p>
          <ul>
            {support.map(({ id, title, path }) => (
              <li key={id} className="mb-1">
                <Link
                  to={path}
                  className="text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">
            Пресс-центр
          </p>
          <ul>
            {press.map(({ id, title, path }) => (
              <li key={id} className="mb-1">
                <Link
                  to={path}
                  className="text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">Скачать</p>
          <ul>
            {download.map(({ id, title, path }) => (
              <li key={id} className="mb-1">
                <Link
                  to={path}
                  className="text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-1 text-sm font-bold sm:mb-3 sm:text-base">
            Мы в соцсетях
          </p>
          <ul>
            {socialLinks.map(({ id, title, icon, path }) => (
              <li key={id} className="mb-1">
                <Link
                  to={path}
                  className="flex items-center text-xs font-light transition-all duration-300 hover:text-[var(--red-col-1)] sm:text-sm"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="h-[1.375rem] w-[1.375rem] rounded-full"
                  />
                  <span className="ml-1">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4">
        <p className="text-center text-xs font-bold text-[var(--gray-col-1)]">
          Все права защищены: www.bloody.com{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
