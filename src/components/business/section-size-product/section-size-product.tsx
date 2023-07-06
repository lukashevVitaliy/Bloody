import { FC } from 'react';
import { React, memo } from 'services/imports-npm';
import { ISectionSizeProduct } from 'types/components-types';

const SectionSizeProduct: FC<ISectionSizeProduct> = memo(({ size }) => {
  return (
    <div className="w-full bg-inherit px-3 py-7 md:p-7">
      <p className="mb-5 text-xl uppercase text-[var(--gray-col-2)] md:text-4xl">
        РАЗМЕР ПРОДУКТА
      </p>
      <div className="mb-5 max-w-[57.125rem]">
        {(size?.data.attributes.image1.data[0] ||
          size?.data.attributes.image1.data) && (
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}${
              size?.data.attributes.image1.data[0]?.attributes.url ||
              size?.data.attributes.image1.data?.attributes.url
            }`}
            alt={size?.data.attributes.model}
            className="object-cover"
          />
        )}

        {size?.data.attributes?.image2?.data && (
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}${
              size?.data.attributes.image2.data[0]?.attributes.url ||
              size?.data.attributes.image2.data.attributes.url
            }`}
            alt={size?.data.attributes.model}
            className="object-cover"
          />
        )}
      </div>
      <p className="text-[0.625rem] font-light text-[var(--gray-col-2)] md:text-xs">
        {size?.data.attributes.text}
      </p>
    </div>
  );
});

export default SectionSizeProduct;
