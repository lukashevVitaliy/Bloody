import {
  React,
  useState,
  useRef,
  useLoaderData,
  defer,
} from 'services/imports-npm';
import { TopBlock } from 'components/business/top-block';
import { DownloadTemplate } from 'components/business/download-template';
import { useScrollbar } from 'hooks/useScrollbar';
import Footer from 'components/business/footer/footer';
import { IDownload } from 'types/components-types';

const Download = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(
    'Программное обеспечение'
  );

  const { download } = useLoaderData() as { download: IDownload };
  const content = download.data.attributes;

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title={content.titleSection}
        classes="flex h-[8rem] md:h-[9.25rem] w-full items-center justify-center lg:justify-start px-4 border-b border-[var(--black-col-4)]"
      />
      <div className="mx-auto flex w-full flex-wrap justify-around 2xl:w-[68.75rem]">
        <div className="order-2 w-full px-4 xl:order-1 xl:w-[50rem] xl:px-0">
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.title}
          </h3>
          <div>
            {content.slices
              .slice(0, -1)
              .map(
                (
                  { name, version, update, image, description, info, links },
                  i
                ) => (
                  <DownloadTemplate
                    key={i}
                    name={name}
                    version={version}
                    update={update}
                    image={`${import.meta.env.VITE_STRAPI_URL}${
                      image?.data?.attributes.url
                    }`}
                    description={description}
                    info={info}
                    link={links[0].href}
                    label={links[0].label}
                  />
                )
              )}
          </div>
        </div>

        <div className="order-1 ml-auto mr-0 w-[13.75rem] pr-4 xl:order-2 xl:m-0 xl:pr-0">
          <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3">
            {content.titleSection}
          </h3>
          <ul>
            <li className="mb-1">
              <button
                className={`cursor-pointer text-left text-[var(--gray-col-2)] transition-all delay-75 hover:text-[var(--red-col-1)] 
								${activeMenu === 'Программное обеспечение' ? 'text-[var(--red-col-1)]' : ''}`}
                onClick={() => setActiveMenu(content.slices[6].subtitle_1)}
                role="tab"
              >
                {content.slices[6].subtitle_1}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const getDownload = async () => {
  const response = await fetch(
    `${
      import.meta.env.VITE_STRAPI_URL
    }/api/download?populate[slices][populate]=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const DownloadLoader = async () => {
  return defer({ download: await getDownload() });
};

export default Download;
