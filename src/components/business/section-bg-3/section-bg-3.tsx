import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { ISectionBg3 } from 'types/components-types';

const SectionBg3: FC<ISectionBg3> = memo(({ background, title, subtitle }) => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          background?.data?.attributes.bg_content_3.data &&
          `url(${import.meta.env.VITE_STRAPI_URL}${
            background?.data?.attributes.bg_content_3.data.attributes.url
          })`,
      }}
    >
      <div className="pt-24 text-center">
        <p className="mb-5 text-lg uppercase sm:text-3xl xl:text-5xl">
          {title}
        </p>
        <p className="mx-auto w-5/6 text-xs md:text-base">{subtitle}</p>
      </div>
    </div>
  );
});

export default SectionBg3;
