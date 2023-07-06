import {
  React,
  useState,
  useRef,
  useLoaderData,
  defer,
  lazy,
} from 'services/imports-npm';

// ===== static imports /start/ =====
import { useScrollbar } from 'hooks/useScrollbar';
// import { TopBlock } from 'components/business/top-block';
// import { TemplatePressCenterTotalSection } from 'components/business/template-press-center-total-section/template-press-center-total-section';
// import Footer from 'components/business/footer/footer';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const TopBlock = lazy(() => import('components/business/top-block/top-block'));
const TemplatePressCenterTotalSection = lazy(
  () =>
    import(
      'components/business/template-press-center-total-section/template-press-center-total-section'
    )
);
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { IPressCenterPage } from 'types/components-types';

const PressCenter = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>('Новости');

  const { press_center } = useLoaderData() as {
    press_center: IPressCenterPage;
  };
  const content = press_center.data.attributes;

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title={content.titlePages}
        classes="flex h-[8rem] md:h-[9.25rem] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
        statusSearch={false}
      />

      <div className="mx-auto flex w-full flex-wrap justify-around 2xl:w-[68.75rem]">
        <div className="order-2 w-full px-4 xl:order-1 xl:w-[50rem] xl:px-0">
          <TemplatePressCenterTotalSection
            title={content.slices[0].title}
            active={activeMenu === 'Новости'}
            content={content.slices[0].info}
          />
          <TemplatePressCenterTotalSection
            title={content.slices[1].title}
            active={activeMenu === 'Тесты/Обзоры'}
            content={content.slices[1].info}
          />
          <TemplatePressCenterTotalSection
            title={content.slices[2].title}
            active={activeMenu === 'Видео'}
            content={content.slices[2].info}
          />
        </div>

        <div
          className="order-1 ml-auto mr-0 w-[13.75rem] pr-4 xl:order-2 xl:m-0 xl:pr-0"
          role="tabpanel"
        >
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.titlePages}
          </h3>
          <ul role="tablist">
            <li className="mb-1">
              <button
                className={`cursor-pointer text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Новости' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[3].subtitle_1)}
                role="tab"
              >
                {content.slices[3].subtitle_1}
              </button>
            </li>
            <li className="mb-1">
              <button
                className={`cursor-pointer text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Тесты/Обзоры' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[3].subtitle_2)}
                role="tab"
              >
                {content.slices[3].subtitle_2}
              </button>
            </li>
            <li className="mb-1">
              <button
                className={`cursor-pointer text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Видео' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[3].subtitle_3)}
                role="tab"
              >
                {content.slices[3].subtitle_3}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const getPressCenter = async () => {
  const response = await fetch(
    `${
      import.meta.env.VITE_STRAPI_URL
    }/api/press-centr?populate[slices][populate][info][populate]=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const pressCenterLoader = async () => {
  return defer({ press_center: await getPressCenter() });
};

export default PressCenter;
