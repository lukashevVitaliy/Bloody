import {
  React,
  useState,
  useRef,
  useLoaderData,
  defer,
} from 'services/imports-npm';
import { TopBlock } from 'components/business/top-block';
import { FormSupport } from 'components/business/form-support';
import { FormOfCooperation } from 'components/business/form-of-cooperation';
import { useScrollbar } from 'hooks/useScrollbar';
import Footer from 'components/business/footer/footer';
import { ISupportPage } from 'types/components-types';

const Support = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>('Поддержка');

  const { support } = useLoaderData() as { support: ISupportPage };
  const content = support?.data.attributes;

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title={support?.data.attributes.titlePage}
        classes="flex h-[128px] md:h-[148px] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
      />

      <div className="mx-auto flex w-full flex-wrap justify-around 2xl:w-[1100px]">
        <div className="order-2 w-full px-4 xl:order-1 xl:w-[800px] xl:px-0">
          <div
            className={
              activeMenu === 'Поддержка'
                ? 'text-[var(--gray-col-2)] transition-all delay-500'
                : 'hidden transition-all delay-500'
            }
          >
            <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
              {content.slices[0].title}
            </h3>
            <p className="mb-5 font-light">
              <span>{content.slices[0].text_1}</span>{' '}
              <a
                href={content.slices[0].links[0].href}
                className="text-[var(--red-col-1)]"
              >
                {content.slices[0].links[0].label}
              </a>
            </p>

            <p className="mb-5 font-light">
              <span>{content.slices[0].text_2}</span>{' '}
              <a
                href={content.slices[0].links[1].href}
                className="text-[var(--red-col-1)]"
              >
                {content.slices[0].links[1].label}
              </a>
              {', '}
              <span>{content.slices[0].text_3}</span>{' '}
              <a
                href={content.slices[0].links[2].href}
                className="text-[var(--red-col-1)]"
              >
                {' '}
                {content.slices[0].links[2].label}
              </a>
            </p>

            <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
              {content.slices[1].title}
            </h3>
            <p className="mb-10 font-light">{content.slices[1].text_1}</p>

            <FormSupport />
          </div>

          <div
            className={
              activeMenu === 'Сотрудничество'
                ? 'text-[var(--gray-col-2)] transition-all delay-500'
                : 'hidden transition-all delay-500'
            }
          >
            <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
              {content.slices[2].title}
            </h3>
            <p className="mb-10 font-light">{content.slices[2].text_1}</p>

            <FormOfCooperation />
          </div>
        </div>

        <div
          className="order-1 ml-auto mr-0 w-[220px] pr-4 xl:order-2 xl:m-0 xl:pr-0"
          role="tabpanel"
        >
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.slices[3].title}
          </h3>
          <ul role="tablist">
            <li className="mb-1">
              <button
                className={`cursor-pointer text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Поддержка' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[3].subtitle_1)}
                role="tab"
              >
                {content.slices[3].subtitle_1}
              </button>
            </li>
            <li>
              <button
                className={`cursor-pointer text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Сотрудничество' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[3].subtitle_2)}
                role="tab"
              >
                {content.slices[3].subtitle_2}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const getSupport = async () => {
  const response = await fetch(
    `${
      import.meta.env.VITE_STRAPI_URL
    }/api/support?populate[slices][populate]=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const supportLoader = async () => {
  return defer({ support: await getSupport() });
};

export default Support;
