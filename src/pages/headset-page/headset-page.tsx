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
import { HeadsetsSpecification } from 'components/business/section-specification/headsets-specification';
import { Navbar } from 'components/business/navbar';
import Footer from 'components/business/footer/footer';
import { useScrollbar } from 'hooks/useScrollbar';

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
import {
  IHeadsets,
  IItemBackground,
  IItemName,
  IItemSize,
} from 'types/components-types';

interface IHeadsetPage {
  headsets: IHeadsets;
  headsetName: IItemName;
  background: IItemBackground;
  colors: any;
  shortDesc: any;
  desc: any;
  size: IItemSize;
}

const HeadsetPage = () => {
  const { headsets, headsetName, background, colors, shortDesc, desc, size } =
    useLoaderData() as unknown as IHeadsetPage;

  // console.log(shortDesc);

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
