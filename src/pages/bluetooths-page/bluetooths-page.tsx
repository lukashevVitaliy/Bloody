import {
  React,
  useState,
  useLoaderData,
  useRef,
  useSearchParams,
  defer,
} from 'services/imports-npm';
import { TopBlock } from 'components/business/top-block';
import { SidebarMenuLeft } from 'components/business/sidebar-menu-left';
import { ListProducts } from 'components/business/list-products';
import {
  getBluetoothMode,
  getBluetoothNoiceReduction,
} from 'components/ui/accordion/unique-data';
import { useScrollbar } from 'hooks/useScrollbar';
import { AccordionMode } from 'components/ui/accordion-mode';
import { AccordionNoiceReduction } from 'components/ui/accordion-noice-reduction';
import { RenderItemList } from 'components/business/render-item-list';
import { IBluetooths } from 'types/components-types';
import Footer from 'components/business/footer/footer';

const BluetoothsPage = () => {
  const [accordionMode, setActiveAccordionMode] = useState<boolean>(false);
  const [accordionNoiceReduction, setActiveAccordionNoiceReduction] =
    useState<boolean>(false);
  const [selectMode, setSelectMode] = useState<null | string>(null);
  const [selectNoiceReduction, setSelectNoiceReduction] = useState<
    null | string
  >(null);

  // search product
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  // get products
  const { bluetooths } = useLoaderData() as { bluetooths: IBluetooths };

  const uniqueMode = getBluetoothMode(bluetooths);
  const uniqueNoiceReduction = getBluetoothNoiceReduction(bluetooths);

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title="Bluetooth"
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
          <AccordionMode
            uniqueMode={uniqueMode}
            accordionMode={accordionMode}
            onClick={() => setActiveAccordionMode(!accordionMode)}
            setSelectMode={setSelectMode}
          />
          <AccordionNoiceReduction
            uniqueNoiceReduction={uniqueNoiceReduction}
            accordionNoiceReduction={accordionNoiceReduction}
            onClick={() =>
              setActiveAccordionNoiceReduction(!accordionNoiceReduction)
            }
            setSelectNoiceReduction={setSelectNoiceReduction}
          />
        </SidebarMenuLeft>
        <div>
          <ListProducts
            classes="grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            tag={'div'}
          >
            {bluetooths &&
              (selectMode
                ? RenderItemList(
                    bluetooths.data.filter(
                      (bluetooth) =>
                        bluetooth.attributes.ModesBluetooth &&
                        (bluetooth.attributes.ModesBluetooth.audio ===
                          selectMode ||
                          bluetooth.attributes.ModesBluetooth.game_audio ===
                            selectMode) &&
                        bluetooth.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectNoiceReduction
                ? RenderItemList(
                    bluetooths.data.filter(
                      (bluetooth) =>
                        bluetooth.attributes.NoiceReductionBluetooth &&
                        (bluetooth.attributes.NoiceReductionBluetooth
                          .anc_enc === selectNoiceReduction ||
                          bluetooth.attributes.NoiceReductionBluetooth.enc ===
                            selectNoiceReduction) &&
                        bluetooth.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : RenderItemList(
                    bluetooths.data.filter((bluetooth) =>
                      bluetooth.attributes.model
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

const getBluetooths = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-bluetooths?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const bluetoothsLoader = async () => {
  return defer({ bluetooths: await getBluetooths() });
};

export default BluetoothsPage;
