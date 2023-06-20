import { React, forwardRef } from 'services/imports-npm';
import { ISectionBg2 } from 'types/components-types';

export const SectionBg2 = forwardRef<HTMLDivElement, ISectionBg2>(
  ({ background }, ref) => {
    return (
      <div
        ref={ref}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            background?.data?.attributes.bg_content_2?.data &&
            `url(${import.meta.env.VITE_STRAPI_URL}${
              background?.data?.attributes.bg_content_2.data.attributes?.url
            })`,
        }}
      ></div>
    );
  }
);
