import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { ISectionDescProps } from 'types/components-types';

export const SectionDesc: FC<ISectionDescProps> = memo(({ descPath }) => {
  return (
    <ul className="mb-5 grid w-full bg-inherit md:grid-cols-2 xl:grid-cols-3">
      {descPath?.length > 0 &&
        descPath.map(({ id, logo, title, text }) => (
          <li
            key={id}
            className="border-b border-r border-[#333] p-5 text-center"
          >
            {logo?.data.attributes.url ? (
              <div className="mx-auto mb-3 max-w-[350px]">
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${
                    logo?.data.attributes.url
                  }`}
                  alt={title}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mx-auto mb-3 max-w-[350px]">
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${
                    logo.data.attributes.url
                  }`}
                  alt={title}
                  className="object-cover"
                />
              </div>
            )}
            {title && (
              <p className="mb-5 text-base font-bold text-[var(--red-col-1)] md:text-lg">
                {title}
              </p>
            )}
            {text && <p className="text-sm font-light md:text-base">{text}</p>}
          </li>
        ))}
    </ul>
  );
});
