import { lazy, React, useRef } from 'services/imports-npm';

// ===== static imports /start/ =====
import { useScrollbar } from 'hooks/useScrollbar';
// import { TemplateShop } from 'components/business/template-shop';
// ===== static imports /end/ =====

// ===== lazy imports /start/ =====
const TemplateShop = lazy(
  () => import('components/business/template-shop/template-shop')
);
// ===== lazy imports /end/ =====

import citylink from '../../assets/icons/shops/citylink_logo.png';
import ozon from '../../assets/icons/shops/ozon_logo.png';
import bloody from '../../assets/icons/logo-2.png';
import paypal from '../../assets/icons/shops/pay_pal_logo.png';

const Shop = () => {
  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <div
        className=" flex min-h-full w-full flex-wrap items-center justify-center gap-x-10 
			px-4 xl:justify-between xl:gap-0 2xl:mx-auto 2xl:max-w-[63.75rem] 2xl:justify-between 2xl:px-0"
      >
        <TemplateShop
          path={
            'https://www.citilink.ru/product/kod-aktivacii-a4tech-bloody-7-1789135/documents/'
          }
          imagePath={citylink}
          imageAlt={'логотип Ситилинк'}
          title={'Russia On-Line Shop'}
          subTitle={'(For Russia Only)'}
        />
        <TemplateShop
          path={
            'https://www.ozon.ru/product/kod-aktivatsii-a4tech-bloody-7-721008642/?sh=B046jD6wkw'
          }
          imagePath={ozon}
          imageAlt={'логотип Ozon'}
          title={'Russia On-Line Shop'}
          subTitle={'(For Russia Only)'}
        />
        <TemplateShop
          path={'https://www.bloody.com/ru/core3/'}
          imagePath={bloody}
          imageAlt={'логотип Bloody'}
          title={'Магазин'}
          subTitle={'(Only payment is supported)'}
          imagePathST={paypal}
          imageAltST={'логотип PayPal'}
        />
      </div>
    </div>
  );
};

export default Shop;
