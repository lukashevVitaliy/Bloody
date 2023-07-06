import {
  React,
  useRef,
  defer,
  useLoaderData,
  lazy,
} from 'services/imports-npm';

// ===== static imports /start/ =====
// import { ListProductsThumbnail } from 'components/business/list-products-thumbnail';
// import { SectionMain } from 'components/business/section-main';
// import { SectionGallery } from 'components/business/section-gallery';
// import { SectionBg2 } from 'components/business/section-bg-2';
// import { SectionDescShort } from 'components/business/section-desc-short';
// import { SectionDesc } from 'components/business/section-desc';
// import { SectionBg3 } from 'components/business/section-bg-3';
// import { SectionSpecification } from 'components/business/section-specification';
// import { SectionSizeProduct } from 'components/business/section-size-product';
// import { ItemProductThumbnail } from 'components/business/item-product-thumbnail';
// import { BluethoothsSpecification } from 'components/business/section-specification/bluetooths-specification';
// import { Navbar } from 'components/business/navbar';
// import Footer from 'components/business/footer/footer';
import { useScrollbar } from 'hooks/useScrollbar';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const ListProductsThumbnail = lazy(
  () =>
    import(
      'components/business/list-products-thumbnail/list-products-thumbnail'
    )
);
const SectionMain = lazy(
  () => import('components/business/section-main/section-main')
);
const SectionGallery = lazy(
  () => import('components/business/section-gallery/section-gallery')
);
const SectionBg2 = lazy(
  () => import('components/business/section-bg-2/section-bg-2')
);
const SectionDescShort = lazy(
  () => import('components/business/section-desc-short/section-desc-short')
);
const SectionDesc = lazy(
  () => import('components/business/section-desc/section-desc')
);
const SectionBg3 = lazy(
  () => import('components/business/section-bg-3/section-bg-3')
);
const SectionSpecification = lazy(
  () =>
    import('components/business/section-specification/section-specification')
);
const SectionSizeProduct = lazy(
  () => import('components/business/section-size-product/section-size-product')
);
const ItemProductThumbnail = lazy(
  () =>
    import('components/business/item-product-thumbnail/item-product-thumbnail')
);
const BluethoothsSpecification = lazy(
  () =>
    import('components/business/section-specification/bluetooths-specification')
);
const Navbar = lazy(() => import('components/business/navbar/navbar'));
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { bluetoothLoaderProps } from 'types/input-types';

import {
  IBluetooths,
  IItemBackground,
  IItemName,
  IItemSize,
} from 'types/components-types';

import {
  getBluetoothIdBg,
  getBluetoothIdColors,
  getBluetoothIdDesc,
  getBluetoothIdInfo,
  getBluetoothIdShortDesc,
  getBluetoothIdSize,
  getBluetoothName,
  getBluetoothsThumbnail,
} from 'services/requests-bluetooth';

interface IBluetoothPage {
  bluetooth: IBluetooths;
  bluetoothName: IItemName;
  background: IItemBackground;
  colors: any;
  shortDesc: any;
  desc: any;
  size: IItemSize;
}

const BluetoothPage = () => {
  const {
    bluetooth,
    bluetoothName,
    background,
    colors,
    shortDesc,
    desc,
    size,
  } = useLoaderData() as unknown as IBluetoothPage;

  const colorsScheme = colors?.data.attributes.BluetoothColorsScheme;
  const shortDescPath = shortDesc?.data.attributes.BluetoothShortDesc;
  const descPath = desc?.data.attributes.DescriptionBluetooth;

  const listWrapper = useRef(null);
  const contentWrapper = useRef(null);

  // необходимо для ref ссылок
  const startRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const characteristicsRef = useRef<HTMLDivElement | null>(null);

  // необходимо для скролла
  useScrollbar(listWrapper);
  useScrollbar(contentWrapper);

  return (
    <div className="grid grid-cols-[7.25rem_1fr] sm:grid-cols-[9.75rem_1fr]">
      <div
        className="list-thumbnail h-screen overflow-y-auto"
        ref={listWrapper}
      >
        <ListProductsThumbnail classes={'w-full'}>
          {bluetooth?.data.map(({ id, attributes }) => (
            <ItemProductThumbnail
              key={id}
              id={id}
              attributes={attributes}
              path={`/bluetooth/${attributes.slug}`}
              urlImageItem={`${import.meta.env.VITE_STRAPI_URL}${
                attributes.image.data.attributes.formats.thumbnail?.url
              }`}
              modelItem={attributes.model}
              classes="group w-full p-1 text-center grayscale transition-all duration-300 hover:grayscale-0"
            />
          ))}
        </ListProductsThumbnail>
      </div>
      <div
        className="content-product relative h-screen w-full overflow-y-auto border-l border-[#333]"
        ref={contentWrapper}
      >
        <Navbar
          startRef={startRef}
          galleryRef={galleryRef}
          featuresRef={featuresRef}
          characteristicsRef={characteristicsRef}
        />
        <SectionMain ref={startRef} background={background}>
          {bluetoothName?.data.attributes.subtitle}
        </SectionMain>
        <SectionGallery
          ref={galleryRef}
          colors={colors}
          colorsScheme={colorsScheme}
        />
        <SectionBg2 ref={featuresRef} background={background} />
        <SectionDescShort shortDescPath={shortDescPath} />
        <SectionDesc descPath={descPath} />
        <SectionBg3 background={background} />
        <SectionSpecification ref={characteristicsRef}>
          <BluethoothsSpecification />
        </SectionSpecification>
        <SectionSizeProduct size={size} />
        <Footer />
      </div>
    </div>
  );
};

export const bluetoothLoader = async ({ params }: bluetoothLoaderProps) => {
  const id = params.id;
  return defer({
    bluetooth: await getBluetoothsThumbnail(),
    bluetoothName: await getBluetoothName(id),
    background: await getBluetoothIdBg(id),
    colors: await getBluetoothIdColors(id),
    shortDesc: await getBluetoothIdShortDesc(id),
    desc: await getBluetoothIdDesc(id),
    info: await getBluetoothIdInfo(id),
    size: await getBluetoothIdSize(id),
    id,
  });
};

export default BluetoothPage;
