import {
  React,
  defer,
  useRef,
  useLoaderData,
  useState,
} from 'services/imports-npm';
import { TopBlock } from 'components/business/top-block';
import { NavbarGallery } from 'components/business/navbar-gallery';
import { useScrollbar } from 'hooks/useScrollbar';
import { IGalleryPage } from 'types/components-types';

import { useToggleClassBody } from '../../hooks/useToogleClassBody';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

const Gallery = () => {
  const [activeNavMenu, setActiveNavMenu] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<boolean>(false);
  const [tempImage, setTempImage] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

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
        classes="flex h-[128px] md:h-[148px] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
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
            className="mx-auto h-auto px-4 lg:px-14"
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

        {(activeNavMenu?.includes('lifestyle') &&
          lifestyle.map(({ attributes }, i) => {
            return (
              <div
                key={i}
                className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                onClick={() =>
                  getImage(
                    `${import.meta.env.VITE_STRAPI_URL}${attributes.url}`
                  )
                }
              >
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${attributes.url}`}
                  alt={attributes.name}
                  className="w-full rounded object-cover"
                />
              </div>
            );
          })) ||
          (activeNavMenu?.includes('wallpaper') &&
            wallpaper.map(({ attributes }, i) => {
              return (
                <div
                  key={i}
                  className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                  onClick={() =>
                    getImage(
                      `${import.meta.env.VITE_STRAPI_URL}${attributes.url}`
                    )
                  }
                >
                  <img
                    src={`${import.meta.env.VITE_STRAPI_URL}${attributes.url}`}
                    alt={attributes.name}
                    className="w-full rounded object-cover"
                  />
                </div>
              );
            })) ||
          (activeNavMenu?.includes('models') &&
            models.map(({ attributes }, i) => {
              return (
                <div
                  key={i}
                  className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                  onClick={() =>
                    getImage(
                      `${import.meta.env.VITE_STRAPI_URL}${attributes.url}`
                    )
                  }
                >
                  <img
                    src={`${import.meta.env.VITE_STRAPI_URL}${attributes.url}`}
                    alt={attributes.name}
                    className="w-full rounded object-cover"
                  />
                </div>
              );
            })) ||
          (activeNavMenu?.includes('all') &&
            images.map(({ attributes }, i) => {
              return (
                <div
                  key={i}
                  className="pick mb-5 cursor-pointer transition-all duration-150 hover:scale-105"
                  onClick={() =>
                    getImage(
                      `${import.meta.env.VITE_STRAPI_URL}${attributes.url}`
                    )
                  }
                >
                  {isLoading && <span>Loading...</span>}
                  {isLoaded ? (
                    <img
                      src={`${import.meta.env.VITE_STRAPI_URL}${
                        attributes.url
                      }`}
                      alt={attributes.name}
                      className="w-full rounded object-cover"
                    />
                  ) : (
                    <img
                      src={`${import.meta.env.VITE_STRAPI_URL}${
                        attributes.url
                      }`}
                      alt={attributes.name}
                      className="w-full rounded object-cover"
                      style={{ display: 'none' }}
                      onLoad={handleImageLoad}
                    />
                  )}
                </div>
              );
            }))}
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
