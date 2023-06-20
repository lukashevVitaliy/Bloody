import {
  React,
  useState,
  useRef,
  useLoaderData,
  defer,
} from 'services/imports-npm';
import { TopBlock } from 'components/business/top-block';
import { useScrollbar } from 'hooks/useScrollbar';
import Footer from 'components/business/footer/footer';
import { IAbout } from 'types/components-types';

const About = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>('Наша история');

  const { about } = useLoaderData() as { about: IAbout };

  const content = about?.data.attributes.slices[0];
  const tabs = about?.data.attributes.slices[1];

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title={about?.data.attributes.titlePage}
        classes="flex h-[128px] md:h-[148px] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
      />

      <div className="mx-auto flex w-full flex-wrap justify-around 2xl:w-[1100px]">
        <div className="order-2 w-full px-4 xl:order-1 xl:w-[800px] xl:px-0">
          <div>
            <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
              {content.title}
            </h3>

            <div
              className={
                activeMenu === 'Наша история'
                  ? 'text-[var(--gray-col-2)] transition-all delay-500'
                  : 'hidden transition-all delay-500'
              }
            >
              <p className="mb-3 font-light">{content.text_1}</p>
              <p className="mb-3 font-light">{content.text_2}</p>
              <p className="font-light">{content.text_3}</p>
            </div>
          </div>
        </div>

        <div
          className="order-1 ml-auto mr-0 w-[220px] pr-4 xl:order-2 xl:m-0 xl:pr-0"
          role="tabpanel"
        >
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.title}
          </h3>
          <ul>
            <li
              className={
                activeMenu === 'Наша история'
                  ? 'mb-1 cursor-pointer text-[var(--red-col-1)]'
                  : 'mb-1 cursor-pointer text-[var(--gray-col-2)] transition-all delay-150 hover:text-[var(--red-col-1)]'
              }
              onClick={() => setActiveMenu(tabs.subtitle_1)}
            >
              {tabs.subtitle_1}
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const getAbout = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/about?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const aboutLoader = async () => {
  return defer({ about: await getAbout() });
};

export default About;
