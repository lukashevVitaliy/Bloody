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
import { MiceSpecification } from 'components/business/section-specification/mice-specification';
import { Navbar } from 'components/business/navbar';
import Footer from 'components/business/footer/footer';
import { useScrollbar } from 'hooks/useScrollbar';

import { mouseLoaderProps } from 'types/input-types';
import {
  IItemBackground,
  IMice,
  IItemName,
  IPanelColorItem,
  ISectionDesc,
  ISectionDescShort,
  IItemSize,
} from 'types/components-types';

import {
  getMiceThumbnail,
  getMouseName,
  getMouseIdBg,
  getMouseIdColors,
  getMouseIdDesc,
  getMouseIdInfo,
  getMouseIdShortDesc,
  getMouseIdSize,
} from '../../services/requests-mice';

interface IMousePage {
  mice: IMice;
  mouseName: IItemName;
  background: IItemBackground;
  colors: IPanelColorItem;
  shortDesc: ISectionDescShort;
  desc: ISectionDesc;
  size: IItemSize;
}

const MousePage = () => {
  const {
    mice,
    mouseName,
    background,
    colors,
    shortDesc,
    desc,
    size,
  }: IMousePage = useLoaderData() as unknown as IMousePage;

  // console.log(size);

  const colorsScheme = colors?.data.attributes.colorsScheme;
  const shortDescPath = shortDesc?.data.attributes.ShortDesc;
  const descPath = desc?.data.attributes.description;

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
    <div className="grid grid-cols-[116px_1fr] sm:grid-cols-[156px_1fr]">
      <div
        className="list-thumbnail h-screen overflow-y-auto"
        ref={listWrapper}
      >
        <ListProductsThumbnail classes={'w-full'}>
          {mice?.data.map(({ id, attributes }) => (
            <ItemProductThumbnail
              key={id}
              path={`/mice/${attributes.slug}`}
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
          {mouseName?.data.attributes.subtitle}
        </SectionMain>
        <SectionGallery
          ref={galleryRef}
          colors={colors}
          colorsScheme={colorsScheme}
        />
        <SectionBg2 ref={featuresRef} background={background} />
        <SectionDescShort shortDescPath={shortDescPath} />
        <SectionDesc descPath={descPath} />
        <SectionBg3
          background={background}
          title={'МОЩНОСТЬ. КОНТРОЛЬ. СКОРОСТЬ. ТОЧНОСТЬ.'}
          subtitle={
            // eslint-disable-next-line max-len
            'Мыши Bloody созданы для того, чтобы дать вам преимущество в интенсивной игре. С их помощью вы можете реагировать быстрее и всегда быть на шаг впереди противников.'
          }
        />
        <SectionSpecification ref={characteristicsRef}>
          <MiceSpecification />
        </SectionSpecification>
        <SectionSizeProduct size={size} />
        <Footer />
      </div>
    </div>
  );
};

export const mouseLoader = async ({ params }: mouseLoaderProps) => {
  const id = params.id;

  return defer({
    mice: await getMiceThumbnail(),
    mouseName: await getMouseName(id),
    background: await getMouseIdBg(id),
    colors: await getMouseIdColors(id),
    shortDesc: await getMouseIdShortDesc(id),
    desc: await getMouseIdDesc(id),
    info: await getMouseIdInfo(id),
    size: await getMouseIdSize(id),
    id,
  });
};

export default MousePage;
