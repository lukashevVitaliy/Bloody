import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { ISectionDescShortProps } from 'types/components-types';

const SectionDescShort: FC<ISectionDescShortProps> = memo(
  ({ shortDescPath }) => {
    return (
      <ul className="mt-5 grid grid-cols-2 border-b border-[#333] bg-inherit lg:grid-cols-3 xl:auto-cols-fr xl:grid-flow-col ">
        {shortDescPath.map(({ id, logo, title }, index, array) => (
          <li key={id} className="text-center">
            <div
              className={`mb-3 flex w-full justify-center ${
                index === array.length - 1
                  ? ''
                  : 'border-r border-dashed border-[#333]'
              }`}
            >
              <img
                src={`${import.meta.env.VITE_STRAPI_URL}${
                  logo.data.attributes?.url
                }`}
                alt={title}
                className="object-cover"
              />
            </div>
            <p className="mb-3 p-1 text-xs md:text-sm">{title}</p>
          </li>
        ))}
      </ul>
    );
  }
);

export default SectionDescShort;
