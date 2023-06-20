import { FC } from 'react';
import { React } from 'services/imports-npm';
import { ITemplateShop } from 'types/components-types';

export const TemplateShop: FC<ITemplateShop> = ({
  path,
  imagePath,
  imageAlt,
  title,
  subTitle,
  imagePathST,
  imageAltST,
}) => {
  return (
    <div
      className="my-5 h-[380px] w-[320px] rounded-3xl bg-[var(--black-col-4)] shadow-md shadow-[var(--white-col)] transition-all 
			duration-150 hover:scale-95 hover:shadow-md hover:shadow-[var(--red-col-1)] md:my-0 "
    >
      <a
        href={path}
        target="blank"
        className="flex h-full flex-col justify-between py-10"
      >
        <img
          src={imagePath}
          alt={imageAlt}
          className="h-1/2 object-contain px-10"
        />

        <div className="bg-[var(--gray-col-2)] py-2 text-center text-2xl">
          {title}
        </div>
        <div className="flex items-center justify-center text-xs">
          {subTitle}
          {imagePathST && (
            <div className="w-14">
              <img
                src={imagePathST}
                alt={imageAltST}
                className="ml-2 rounded-md bg-[var(--white-col)] object-cover p-1"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
