import { FC } from 'react';
import { React } from 'services/imports-npm';
import {
  IPressCenterNews,
  ITemplatePressCenterTotalSection,
} from 'types/components-types';
import { usePagination } from 'hooks/usePagination';
import Pagination from 'components/ui/pagination/pagination';

import { TemplateInfoPressCenter } from '../template-info-press-center';

const TemplatePressCenterTotalSection: FC<ITemplatePressCenterTotalSection> = ({
  title,
  active,
  content,
}) => {
  // pagination
  const {
    totalPages,
    nextPage,
    prevPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({
    contentPerPage: 8,
    count: content.length,
  });

  return (
    <div
      className={
        active
          ? 'text-[var(--gray-col-2)] transition-all delay-500'
          : 'hidden transition-all delay-500'
      }
    >
      <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
        {title}
      </h3>

      {content
        .slice(firstContentIndex, lastContentIndex)
        .map(
          ({
            id,
            datePublication,
            linkButton,
            linkTitle,
            slug,
            text,
          }: IPressCenterNews) => (
            <TemplateInfoPressCenter
              key={id}
              titleSection={title}
              pathTitle={linkTitle.href}
              pathButton={linkButton.href}
              label={linkTitle.label}
              blank={linkTitle.target}
              date={datePublication}
              text={text}
              titleLinkButton={linkButton.label}
              slug={slug}
            />
          )
        )}

      <div className="pb-20">
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
};

export default TemplatePressCenterTotalSection;
