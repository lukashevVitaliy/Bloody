import {
  React,
  useRef,
  defer,
  useLoaderData,
  lazy,
} from 'services/imports-npm';

// ===== static imports /start/ =====
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
const HeadsetsSpecification = lazy(
  () =>
    import('components/business/section-specification/headsets-specification')
);
const Navbar = lazy(() => import('components/business/navbar/navbar'));
const Footer = lazy(() => import('components/business/footer/footer'));
// ===== lazy imports /end/ =====

import { headsetLoaderProps } from 'types/input-types';
import {
  getHeadsetsThumbnail,
  getHeadsetName,
  getHeadsetIdBg,
  getHeadsetIdColors,
  getHeadsetIdShortDesc,
  getHeadsetIdDesc,
  getHeadsetIdInfo,
  getHeadsetIdSize,
} from 'services/requests-headsets';
import { IHeadsetPage } from 'types/components-types';

const HeadsetPage = () => {
  const { headsets, headsetName, background, colors, shortDesc, desc, size } =
    useLoaderData() as unknown as IHeadsetPage;

  const colorsScheme = colors?.data.attributes.HeadsetColorsScheme;
  const shortDescPath = shortDesc?.data.attributes.HeadsetShortDesc;
  const descPath = desc?.data.attributes.DescriptionHeadset;

  const listWrapper = useRef<HTMLDivElement | null>(null);
  const contentWrapper = useRef<HTMLDivElement | null>(null);

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
          {headsets?.data.map(({ id, attributes }) => (
            <ItemProductThumbnail
              key={id}
              path={`/headsets/${attributes.slug}`}
              urlImageItemArray={attributes.image}
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
          {headsetName?.data.attributes.subtitle}
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
          <HeadsetsSpecification />
        </SectionSpecification>
        <SectionSizeProduct size={size} />
        <Footer />
      </div>
    </div>
  );
};

export const headsetLoader = async ({ params }: headsetLoaderProps) => {
  const id = params.id;

  return defer({
    headsets: await getHeadsetsThumbnail(),
    headsetName: await getHeadsetName(id),
    background: await getHeadsetIdBg(id),
    colors: await getHeadsetIdColors(id),
    shortDesc: await getHeadsetIdShortDesc(id),
    desc: await getHeadsetIdDesc(id),
    info: await getHeadsetIdInfo(id),
    size: await getHeadsetIdSize(id),
    id,
  });
};

export default HeadsetPage;
