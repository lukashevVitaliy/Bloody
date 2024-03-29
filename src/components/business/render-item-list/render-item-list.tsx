import { React } from 'services/imports-npm';

import { ItemProduct } from '../item-product';

export const RenderItemList = (items) => {
  return items.map(({ id, attributes }) => (
    <ItemProduct
      key={id}
      path={`${attributes.slug}`}
      urlImageArray={attributes.image}
      modelItem={attributes.model}
      titleItem={attributes.title}
      classes="border border-[var(--black-col-4)] p-1 text-center transition-all 
			duration-300 grayscale hover:grayscale-0"
    />
  ));
};
