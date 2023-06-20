import { React } from 'services/imports-npm';
import { FC } from 'react';
import { ITemplateInfoPressCenter } from 'types/components-types';

export const TemplateInfoPressCenter: FC<ITemplateInfoPressCenter> = ({
  titleSection,
  pathTitle,
  pathButton,
  label,
  date,
  text,
  titleLinkButton,
  blank,
  slug,
}) => {
  return (
    <div className="border-b border-[var(--black-col-4)] py-2">
      {titleSection === 'Новости' ? (
        <>
          <div className="mt-2 mb-4">
            <a
              href={`press-center/${slug}`}
              target={blank}
              className="cursor-pointer font-medium text-[var(--red-col-1)]"
            >
              {label}
            </a>
          </div>
          <p className="font mb-2 text-sm">{date}</p>
          <p className="font mb-4 text-sm">{text}</p>
          <div className="text-right">
            <a
              href={`press-center/${slug}`}
              target={blank}
              className="cursor-pointer text-sm transition-all duration-150 hover:text-[var(--red-col-1)]"
            >
              {titleLinkButton}
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="mt-2 mb-4">
            <a
              href={`${pathTitle}`}
              target={blank}
              className="cursor-pointer font-medium text-[var(--red-col-1)]"
            >
              {label}
            </a>
          </div>
          <p className="font mb-2 text-sm">{date}</p>
          <p className="font mb-4 text-sm">{text}</p>
          <div className="text-right">
            <a
              href={`${pathButton}`}
              target={blank}
              className="cursor-pointer text-sm transition-all duration-150 hover:text-[var(--red-col-1)]"
            >
              {titleLinkButton}
            </a>
          </div>
        </>
      )}
    </div>
  );
};
