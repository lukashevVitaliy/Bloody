import { React, useState, forwardRef } from 'services/imports-npm';
import { ISectionGallery } from 'types/components-types';

import { PanelColors } from '../panel-colors';
import { PanelGallery } from '../panel-gallery';
import { PanelColorItem } from '../panel-color-item/panel-color-item';

export const SectionGallery = forwardRef<HTMLDivElement, ISectionGallery>(
  ({ colors, colorsScheme }, ref) => {
    const [activeItem, setActiveItem] = useState<number>(0);
    const [activeItemGallery, setActiveItemGallery] = useState<number>(0);

    return (
      <div ref={ref} className="w-full bg-inherit px-3 py-7 sm:p-7">
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_14.8125rem]"
          role="grid"
        >
          <PanelColorItem
            colors={colors}
            colorsScheme={colorsScheme}
            activeItem={activeItem}
            activeItemGallery={activeItemGallery}
          />
          <div>
            <PanelColors
              classes="mb-7"
              colors={colors}
              colorsScheme={colorsScheme}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <PanelGallery
              colors={colors}
              colorsScheme={colorsScheme}
              activeItem={activeItem}
              activeItemGallery={activeItemGallery}
              setActiveItemGallery={setActiveItemGallery}
            />
          </div>
        </div>
      </div>
    );
  }
);
