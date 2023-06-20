import { React, useRef, defer, useLoaderData } from 'services/imports-npm';

import { ListProductsThumbnail } from 'components/business/list-products-thumbnail';
import { SectionMain } from 'components/business/section-main';
import { SectionGallery } from 'components/business/section-gallery';
import { SectionBg2 } from 'components/business/section-bg-2';
import { SectionDescShort } from 'components/business/section-desc-short';
import { SectionDesc } from 'components/business/section-desc';
import { SectionBg3 } from 'components/business/section-bg-3';
import { SectionSpecification } from 'components/business/section-specification';
import { SectionSizeProduct } from 'components/business/section-size-product';
import { ItemProductThumbnail } from 'components/business/item-product-thumbnail';
import { AccessoriesSpecification } from 'components/business/section-specification/accessories-specification';
import { Navbar } from 'components/business/navbar';
import Footer from 'components/business/footer/footer';
import { useScrollbar } from 'hooks/useScrollbar';
import { accessoryLoaderProps } from 'types/input-types';

import {
  getAccessoriesThumbnail,
  getAccessorieName,
  getAccessoryIdBg,
  getAccessoryIdColors,
  getAccessoryIdDesc,
  getAccessoryIdInfo,
  getAccessoryIdShortDesc,
  getAccessoryIdSize,
} from 'services/requests-accessories';
import {
  IAccessories,
  IItemBackground,
  IItemName,
  IItemSize,
} from 'types/components-types';

interface IAccessoryPage {
  accesory: IAccessories;
  accesoryName: IItemName;
  background: IItemBackground;
  colors: any;
  shortDesc: any;
  desc: any;
  size: IItemSize;
}

const AccessoryPage = () => {
  const { accesory, accesoryName, background, colors, shortDesc, desc, size } =
    useLoaderData() as unknown as IAccessoryPage;

  // console.log(size);

  const colorsScheme = colors?.data.attributes.accessoryColorsScheme;
  const shortDescPath = shortDesc?.data.attributes.accessoryShortDesc;
  const descPath = desc?.data.attributes.accessoryDescription;

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
    <div className="grid grid-cols-[116px_1fr] sm:grid-cols-[156px_1fr]">
      <div
        className="list-thumbnail h-screen overflow-y-auto"
        ref={listWrapper}
      >
        <ListProductsThumbnail classes={'w-full'}>
          {accesory?.data.map(({ id, attributes }) => (
            <ItemProductThumbnail
              key={id}
              id={id}
              attributes={attributes}
              path={`/accessories/${attributes.slug}`}
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
          {accesoryName?.data.attributes.subtitle}
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
          <AccessoriesSpecification />
        </SectionSpecification>
        <SectionSizeProduct size={size} />
        <Footer />
      </div>
    </div>
  );
};

export const accessoryLoader = async ({ params }: accessoryLoaderProps) => {
  const id = params.id;
  return defer({
    accesory: await getAccessoriesThumbnail(),
    accesoryName: await getAccessorieName(id),
    background: await getAccessoryIdBg(id),
    colors: await getAccessoryIdColors(id),
    shortDesc: await getAccessoryIdShortDesc(id),
    desc: await getAccessoryIdDesc(id),
    info: await getAccessoryIdInfo(id),
    size: await getAccessoryIdSize(id),
    id,
  });
};

export default AccessoryPage;
