import { FC } from 'react';
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
  return (
    <div className="mb-10 grid grid-cols-6 border-2 border-[var(--black-col-4)] text-xs text-[var(--gray-col-2)]">
      <div className="col-span-6 border-b border-r border-[var(--black-col-4)] py-2 pl-2 text-[var(--red-col-1)] md:col-span-2">
        {name}
      </div>
      <div className="col-span-6 border-b border-[var(--black-col-4)] py-2 pl-2 md:col-span-4">
        <span className="mr-5">{version}</span> <span>{update}</span>
      </div>
      <img
        src={image}
        alt={name}
        className="col-span-4 w-full border-r border-b border-[var(--black-col-4)] py-2 px-2 md:col-span-2 md:border-r-0"
      />
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
