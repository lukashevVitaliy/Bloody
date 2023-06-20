import { React, forwardRef } from 'services/imports-npm';
import { ISectionMain } from 'types/components-types';

export const SectionMain = forwardRef<HTMLDivElement, ISectionMain>(
  ({ background, children }, ref) => {
    return (
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            background?.data.attributes.bg_content_1?.data &&
            `url(${import.meta.env.VITE_STRAPI_URL}${
              background?.data.attributes.bg_content_1.data.attributes.url
            })`,
        }}
        ref={ref}
      >
        <div className="w-full pt-[136px] pl-3 text-2xl leading-normal leading-[52px] sm:w-[500px] sm:pl-7 md:text-4xl md:leading-snug">
          {children}
        </div>
      </div>
    );
  }
);
