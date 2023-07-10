import {
  React,
  useState,
  useLoaderData,
  useRef,
  useSearchParams,
  defer,
  lazy,
} from 'services/imports-npm';

// ===== static imports /start/ =====
import {
  UniqueCpi,
  UniqueSeries,
  UniqueSize,
} from 'components/ui/accordion/unique-data';
import { useScrollbar } from 'hooks/useScrollbar';
import { RenderItemList } from 'components/business/render-item-list';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const ListProducts = lazy(
  () => import('components/business/list-products/list-products')
);
const SidebarMenuLeft = lazy(
  () => import('components/business/sidebar-menu-left/sidebar-menu-left')
);
const TopBlock = lazy(() => import('components/business/top-block/top-block'));
const AccordionCPI = lazy(
  () => import('components/ui/accordion-cpi/accordion-cpi')
);
const AccordionSize = lazy(
  () => import('components/ui/accordion-size/accordion-size')
);
const AccordionSeries = lazy(
  () => import('components/ui/accordion-series/accordion-series')
);
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { IMice } from 'types/components-types';

const MicePage = () => {
  const [accordionCPI, setActiveAccordionCPI] = useState<boolean>(false);
  const [accordionSize, setActiveAccordionSize] = useState<boolean>(false);
  const [accordionSeries, setActiveAccordionSeries] = useState<boolean>(false);
  const [selectCPI, setSelectCPI] = useState<null | string>(null);
  const [selectSize, setSelectSize] = useState<null | string>(null);
  const [selectSeries, setSelectSeries] = useState<null | string>(null);
  // search product
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  // get products
  const { mice } = useLoaderData() as { mice: IMice };

  const uniqueCPI = UniqueCpi(mice);
  const uniqueSize = UniqueSize(mice);
  const uniqueSeries = UniqueSeries(mice);

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title="Мыши"
        statusSearch={true}
        classes="flex md:flex-row h-[8rem] md:h-[9.25rem] w-full items-center flex-col justify-between px-4 border-b border-[var(--black-col-4)]"
        setSearchParams={setSearchParams}
        productQuery={productQuery}
      />
      <div className="relative flex flex-col md:flex-row">
        <SidebarMenuLeft
          classes={
            'min-w-[14.375rem] border-r-4 border-[var(--black-col-4)] bg-[var(--black-col-3)]'
          }
        >
          <AccordionCPI
            uniqueCPI={uniqueCPI}
            accordionCPI={accordionCPI}
            onClick={() => setActiveAccordionCPI(!accordionCPI)}
            setSelectCPI={setSelectCPI}
          />
          <AccordionSize
            uniqueSize={uniqueSize}
            accordionSize={accordionSize}
            onClick={() => setActiveAccordionSize(!accordionSize)}
            setSelectSize={setSelectSize}
          />
          <AccordionSeries
            uniqueSeries={uniqueSeries}
            accordionSeries={accordionSeries}
            onClick={() => setActiveAccordionSeries(!accordionSeries)}
            setSelectSeries={setSelectSeries}
          />
        </SidebarMenuLeft>

        <div>
          <ListProducts
            classes="grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            tag={'div'}
          >
            {mice &&
              (selectCPI
                ? RenderItemList(
                    mice.data.filter(
                      (mouse) =>
                        mouse.attributes.cpi === selectCPI &&
                        mouse.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectSize
                ? RenderItemList(
                    mice.data.filter(
                      (mouse) =>
                        mouse.attributes.size === selectSize &&
                        mouse.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectSeries
                ? RenderItemList(
                    mice.data.filter(
                      (mouse) =>
                        mouse.attributes.series === selectSeries &&
                        mouse.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : RenderItemList(
                    mice.data.filter((mouse) =>
                      mouse.attributes.model
                        .toLowerCase()
                        .includes(productQuery)
                    )
                  ))}
          </ListProducts>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const getMice = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-mice?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const miceLoader = async () => {
  return defer({ mice: await getMice() });
};

export default MicePage;
