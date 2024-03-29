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
  getHeadsetsBacklighting,
  getHeadsetsConnecting,
  getHeadsetsHeadband,
  getHeadsetsSpeakers,
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
const AccordionSpeakers = lazy(
  () => import('components/ui/accordion-speakers/accordion-speakers')
);
const AccordionConnecting = lazy(
  () => import('components/ui/accordion-connecting/accordion-connecting')
);
const AccordionHeadband = lazy(
  () => import('components/ui/accordion-headband/accordion-headband')
);
const AccordionIllumination = lazy(
  () => import('components/ui/accordion-illumination/accordion-illumination')
);
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { IHeadsets } from 'types/components-types';

const HeadsetsPage = () => {
  const [accordionSpeakers, setActiveAccordionSpeakers] =
    useState<boolean>(false);
  const [accordionConnecting, setActiveAccordionConnecting] =
    useState<boolean>(false);
  const [accordionHeadband, setActiveAccordionHeadband] =
    useState<boolean>(false);
  const [accordionBacklighting, setActiveAccordionBacklighting] =
    useState<boolean>(false);

  const [selectSpeakers, setSelectSpeakers] = useState<null | string>(null);
  const [selectConnecting, setSelectConnecting] = useState<null | string>(null);
  const [selectHeadband, setSelectHeadband] = useState<null | string>(null);
  const [selectBacklighting, setSelectBacklighting] = useState<null | string>(
    null
  );

  // search product
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  // get products
  const { headsets } = useLoaderData() as { headsets: IHeadsets };

  const uniqueSpeakers = getHeadsetsSpeakers(headsets);
  const uniqueConnecting = getHeadsetsConnecting(headsets);
  const uniqueHeadband = getHeadsetsHeadband(headsets);
  const uniqueBacklighting = getHeadsetsBacklighting(headsets);

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title="Гарнитуры"
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
          <AccordionSpeakers
            uniqueSpeakers={uniqueSpeakers}
            accordionSpeakers={accordionSpeakers}
            onClick={() => setActiveAccordionSpeakers(!accordionSpeakers)}
            setSelectSpeakers={setSelectSpeakers}
          />
          <AccordionConnecting
            uniqueConnecting={uniqueConnecting}
            accordionConnecting={accordionConnecting}
            onClick={() => setActiveAccordionConnecting(!accordionConnecting)}
            setSelectConnecting={setSelectConnecting}
          />
          <AccordionHeadband
            uniqueHeadband={uniqueHeadband}
            accordionHeadband={accordionHeadband}
            onClick={() => setActiveAccordionHeadband(!accordionHeadband)}
            setSelectHeadband={setSelectHeadband}
          />
          <AccordionIllumination
            uniqueBacklighting={uniqueBacklighting}
            accordionBacklighting={accordionBacklighting}
            onClick={() =>
              setActiveAccordionBacklighting(!accordionBacklighting)
            }
            setSelectBacklighting={setSelectBacklighting}
          />
        </SidebarMenuLeft>

        <div>
          <ListProducts
            classes="grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            tag={'div'}
          >
            {headsets &&
              (selectSpeakers
                ? RenderItemList(
                    headsets.data.filter(
                      (headset) =>
                        headset.attributes.dynamicsHeadset &&
                        (headset.attributes.dynamicsHeadset.apt_x_hd ===
                          selectSpeakers ||
                          headset.attributes.dynamicsHeadset.hybrid_membrane ===
                            selectSpeakers ||
                          headset.attributes.dynamicsHeadset
                            .seven_one_surround_sound === selectSpeakers ||
                          headset.attributes.dynamicsHeadset.two_one_stereo ===
                            selectSpeakers) &&
                        headset.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectConnecting
                ? RenderItemList(
                    headsets.data.filter(
                      (headset) =>
                        headset.attributes.ConnectingHeadset &&
                        (headset.attributes.ConnectingHeadset.bt_aux ===
                          selectConnecting ||
                          headset.attributes.ConnectingHeadset
                            .bt_two_and_four_tenths_Ghz_aux ===
                            selectConnecting ||
                          headset.attributes.ConnectingHeadset
                            .three_five_tenths_mm === selectConnecting ||
                          headset.attributes.ConnectingHeadset
                            .three_five_tenths_mm_usb === selectConnecting ||
                          headset.attributes.ConnectingHeadset.usb ===
                            selectConnecting) &&
                        headset.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectHeadband
                ? RenderItemList(
                    headsets.data.filter(
                      (headset) =>
                        headset.attributes.headbandHeadset &&
                        (headset.attributes.headbandHeadset.double ===
                          selectHeadband ||
                          headset.attributes.headbandHeadset.single ===
                            selectHeadband ||
                          headset.attributes.headbandHeadset.soaring_wing ===
                            selectHeadband) &&
                        headset.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectBacklighting
                ? RenderItemList(
                    headsets.data.filter(
                      (headset) =>
                        headset.attributes.backlightingHeadset &&
                        (headset.attributes.backlightingHeadset.neon ===
                          selectBacklighting ||
                          headset.attributes.backlightingHeadset
                            .not_available === selectBacklighting ||
                          headset.attributes.backlightingHeadset.rgb ===
                            selectBacklighting ||
                          headset.attributes.backlightingHeadset.seven_color ===
                            selectBacklighting ||
                          headset.attributes.backlightingHeadset.single ===
                            selectBacklighting) &&
                        headset.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : RenderItemList(
                    headsets.data.filter((headset) =>
                      headset.attributes.model
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

const getHeadsets = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-headsets?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const headsetsLoader = async () => {
  return defer({ headsets: await getHeadsets() });
};

export default HeadsetsPage;
