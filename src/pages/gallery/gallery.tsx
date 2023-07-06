import {
  React,
  defer,
  useRef,
  useLoaderData,
  useState,
  lazy,
  useEffect,
} from 'services/imports-npm';

// ===== static imports /start/ =====
import { useScrollbar } from 'hooks/useScrollbar';
// import { TopBlock } from 'components/business/top-block';
// import { NavbarGallery } from 'components/business/navbar-gallery';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const TopBlock = lazy(() => import('components/business/top-block/top-block'));
const NavbarGallery = lazy(
  () => import('components/business/navbar-gallery/navbar-gallery')
);
// ===== lazy imports /end/ =====

import { IGalleryPage } from 'types/components-types';

import { useToggleClassBody } from '../../hooks/useToogleClassBody';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

const Gallery = () => {
  const [activeNavMenu, setActiveNavMenu] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<boolean>(false);
  const [tempImage, setTempImage] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [isWebPSupported, setIsWebPSupported] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  // Определение поддержки формата WebP
  useEffect(() => {
    const checkWebPSupport = () => {
      return new Promise((res) => {
        const webP = new Image();
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = () => {
          res(webP.height === 2);
        };
      });
    };

    checkWebPSupport().then((hasWebP) => {
      setIsWebPSupported(hasWebP);
    });
  }, []);

  useToggleClassBody(activeImage);

  const { gallery } = useLoaderData() as { gallery: IGalleryPage };

  const images = gallery.data.attributes.images.data;
  const lifestyle = images.filter(
    (item) => item.attributes.caption === 'lifestyle'
  );
  const wallpaper = images.filter(
    (item) => item.attributes.caption === 'wallpaper'
  );
  const models = images.filter((item) => item.attributes.caption === 'models');

  const getImage = (image: string) => {
    setTempImage(image);
    setActiveImage(true);
  };
  const onCloseImage = () => {
    setActiveImage(false);
  };

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title={gallery.data.attributes.titleSection}
        classes="flex h-[8rem] md:h-[9.25rem] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
      />
      <div className="flex justify-end bg-[var(--black-col-4)] py-3 px-5">
        <NavbarGallery
          setActiveNavMenu={setActiveNavMenu}
          activeNavMenu={activeNavMenu}
        />
      </div>
      <div className="gallery columns-2 bg-[var(--black-col-4)] p-5 md:columns-3 xl:columns-4">
        <div
          className={`fixed top-0 left-0 z-20 flex h-screen w-full items-center justify-center overflow-hidden bg-[var(--black-col-4)]
					transition-all duration-300 ${
            activeImage
              ? 'visible scale-100 opacity-100'
              : 'invisible scale-0 opacity-0'
          }`}
        >
          <img
            src={tempImage}
            alt="image"
            className="mx-auto max-h-full px-4 lg:px-14"
          />
          <Close
            className={
              activeImage
                ? 'fixed top-5 right-5 h-4 w-4 cursor-pointer stroke-white transition-all duration-150'
                : 'fixed top-5 right-5 h-4 w-4 rotate-45 cursor-pointer stroke-white transition-all duration-150'
            }
            onClick={onCloseImage}
          />
        </div>

        {/* Отображение изображений из категории "lifestyle" */}
        {(activeNavMenu === 'lifestyle' ||
          !activeNavMenu ||
          activeNavMenu === '') &&
          lifestyle.map(({ attributes, id }) => {
            const imageUrl = `${import.meta.env.VITE_STRAPI_URL}${
              attributes.url
            }`;

            const shouldRender =
              (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

            return shouldRender ? (
              <div
                key={id}
                className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                onClick={() => getImage(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={attributes.name}
                  className="w-full rounded object-cover"
                />
              </div>
            ) : null;
          })}

        {/* Отображение изображений из категории "wallpaper" */}
        {(activeNavMenu === 'wallpaper' ||
          !activeNavMenu ||
          activeNavMenu === '') &&
          wallpaper.map(({ attributes, id }) => {
            const imageUrl = `${import.meta.env.VITE_STRAPI_URL}${
              attributes.url
            }`;

            const shouldRender =
              (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

            return shouldRender ? (
              <div
                key={id}
                className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                onClick={() => getImage(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={attributes.name}
                  className="w-full rounded object-cover"
                />
              </div>
            ) : null;
          })}

        {/* Отображение изображений из категории "models" */}
        {(activeNavMenu === 'models' ||
          !activeNavMenu ||
          activeNavMenu === '') &&
          models.map(({ attributes, id }) => {
            const imageUrl = `${import.meta.env.VITE_STRAPI_URL}${
              attributes.url
            }`;

            const shouldRender =
              (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

            return shouldRender ? (
              <div
                key={id}
                className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                onClick={() => getImage(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={attributes.name}
                  className="w-full rounded object-cover"
                />
              </div>
            ) : null;
          })}

        {/* Отображение всех изображений */}
        {(activeNavMenu === 'all' || !activeNavMenu || activeNavMenu === '') &&
          images.map(({ attributes }, i) => {
            // Извлекаем URL изображения
            const imageUrl = `${import.meta.env.VITE_STRAPI_URL}${
              attributes.url
            }`;
            // Проверка формата изображения
            const shouldRender =
              (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
              (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

            return shouldRender ? (
              <div
                key={i}
                className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                onClick={() => getImage(imageUrl)}
              >
                {isLoading && <span>Loading...</span>}
                {isLoaded ? (
                  <img
                    src={imageUrl}
                    alt={attributes.name}
                    className="w-full rounded object-cover"
                  />
                ) : (
                  <img
                    src={imageUrl}
                    alt={attributes.name}
                    className="w-full rounded object-cover"
                    style={{ display: 'none' }}
                    onLoad={handleImageLoad}
                  />
                )}
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

const getGallery = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/gallery?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const galleryLoader = async () => {
  return defer({ gallery: await getGallery() });
};

export default Gallery;
