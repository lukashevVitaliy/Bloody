import { FC, useEffect, useState } from 'react';
import { React } from 'services/imports-npm';
import { IDownloadTemplate } from 'types/components-types';

const DownloadTemplate: FC<IDownloadTemplate> = ({
  name,
  version,
  update,
  image,
  description,
  info,
  link,
  label,
  target,
}) => {
  const [isWebPSupported, setIsWebPSupported] = useState<boolean>(false);

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

  return (
    <div className="mb-10 grid grid-cols-6 border-2 border-[var(--black-col-4)] text-xs text-[var(--gray-col-2)]">
      <div className="col-span-6 border-b border-r border-[var(--black-col-4)] py-2 pl-2 text-[var(--red-col-1)] md:col-span-2">
        {name}
      </div>
      <div className="col-span-6 border-b border-[var(--black-col-4)] py-2 pl-2 md:col-span-4">
        <span className="mr-5">{version}</span> <span>{update}</span>
      </div>
      {image.data?.map(({ id, attributes }) => {
        const imageUrl = `${import.meta.env.VITE_STRAPI_URL}${attributes.url}`;
        const shouldRender =
          (isWebPSupported && imageUrl.indexOf('.webp') !== -1) ||
          (!isWebPSupported && imageUrl.indexOf('.webp') === -1);

        return shouldRender ? (
          <img
            key={id}
            src={imageUrl}
            alt={name}
            className="col-span-4 w-full border-r border-b border-[var(--black-col-4)] py-2 px-2 md:col-span-2 md:border-r-0"
          />
        ) : null;
      })}

      <div className="col-span-4 border-r border-b border-[var(--black-col-4)] py-2 px-2 md:col-span-3">
        {description}
      </div>
      <div className="col-span-2 col-start-5 col-end-7 row-start-3 row-end-6 flex items-center md:col-span-1 md:row-span-2">
        <a
          href={link}
          target={target}
          className="mx-4 w-full rounded-sm bg-[var(--black-col-4)] py-2 text-center transition-all duration-150 hover:bg-[var(--red-col-1)] 
					hover:text-[var(--black-col-1)]"
        >
          {`${label}`}
        </a>
      </div>
      <div className="col-span-4 border-r border-[var(--black-col-4)] p-2 md:col-span-5">
        {info}
      </div>
    </div>
  );
};

export default DownloadTemplate;
