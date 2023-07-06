import {
  React,
  useRef,
  defer,
  useLoaderData,
  ReactMarkdown,
  lazy,
} from 'services/imports-npm';

// ===== static imports /start/ =====
import {
  getPressCenter,
  getPressCenterNews,
} from 'services/request-press-center-news';
import { useScrollbar } from 'hooks/useScrollbar';
// import { TopBlock } from 'components/business/top-block';
// import Footer from 'components/business/footer/footer';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const TopBlock = lazy(() => import('components/business/top-block/top-block'));
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { IPressCenterNewsLoaderProps } from 'types/input-types';
import { IPressCenterNews } from 'types/components-types';

const PressCenterNews = () => {
  const { pressCenter, newsPressCenter } = useLoaderData() as IPressCenterNews;

  const content = newsPressCenter.data.attributes;

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div
      className="content-product h-screen text-[var(--gray-col-2)]"
      ref={contentWrapper}
    >
      <TopBlock
        title={pressCenter.data.attributes.titlePages}
        classes="flex h-[9.25rem] w-full items-center justify-between px-4 border-b border-[var(--black-col-4)]"
      />
      <div className="mx-auto flex w-[68.75rem] justify-between">
        <div className="mb-5 w-[50rem] border-b border-[var(--black-col-4)] pb-3">
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.titleSection}
          </h3>
          <h3 className="mb-5 border-b border-[var(--black-col-4)] pt-5 pb-3 text-center">
            {content.titleNews}
          </h3>
          <p className="mb-3 text-sm">{content.textTop}</p>
          <div className="mx-auto mb-3 w-full">
            <img
              src={`${import.meta.env.VITE_STRAPI_URL}${
                content.image.data.attributes.formats.medium.url
              }`}
              alt="news info"
              className="w-full object-cover"
            />
          </div>
          {content.info.map(({ id, titleBlock, textBlock }) => (
            <div key={id}>
              <p className="my-3 text-sm font-bold">{titleBlock}</p>
              <ReactMarkdown children={textBlock} className="mb-3 text-sm" />
            </div>
          ))}
          <div className="text-right text-sm">
            <a
              href="/press-center"
              className="text-[var(--red-col-1)] transition-all duration-150 hover:text-[var(--white-col)]"
            >
              Вернуться к списку новостей
            </a>
          </div>
        </div>

        <div className="w-[13.75rem] pt-5 pb-3">
          <time className=" text-center text-sm text-[var(--gray-col-2)]">
            Дата новости: {content.dateNews}
          </time>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const pressCenterNewsLoader = async ({
  params,
}: IPressCenterNewsLoaderProps) => {
  const id = params.id;

  return defer({
    pressCenter: await getPressCenter(),
    newsPressCenter: await getPressCenterNews(id),
    id,
  });
};

export default PressCenterNews;
