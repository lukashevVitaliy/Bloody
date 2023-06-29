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
import { getAccessoriesCategory } from 'components/ui/accordion/unique-data';
import { useScrollbar } from 'hooks/useScrollbar';
import { AccordionСategoryAccessories } from 'components/ui/accordion-category-accessories';
import { RenderItemList } from 'components/business/render-item-list';
import { IAccessories } from 'types/components-types';
import Footer from 'components/business/footer/footer';

const AccessoriesPage = () => {
  const [accordionCategory, setActiveAccordionCategory] =
    useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<null | string>(null);

  // search product
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  // get products
  const { accessories } = useLoaderData() as { accessories: IAccessories };

  const uniqueCategory = getAccessoriesCategory(accessories);

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title="Accessories"
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
          <AccordionСategoryAccessories
            uniqueCategory={uniqueCategory}
            accordionCategory={accordionCategory}
            onClick={() => setActiveAccordionCategory(!accordionCategory)}
            setSelectCategory={setSelectCategory}
          />
        </SidebarMenuLeft>
        <div>
          <ListProducts
            classes="grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            tag={'div'}
          >
            {accessories &&
              (selectCategory
                ? RenderItemList(
                    accessories.data.filter(
                      (accessorie) =>
                        accessorie.attributes.CategoryAccessories &&
                        (accessorie.attributes.CategoryAccessories
                          .mouse_pads === selectCategory ||
                          accessorie.attributes.CategoryAccessories
                            .headphone_stands === selectCategory) &&
                        accessorie.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : RenderItemList(
                    accessories.data.filter((accessory) =>
                      accessory.attributes.model
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

const getAccessories = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-accessories?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const accessoriesLoader = async () => {
  return defer({ accessories: await getAccessories() });
};

export default AccessoriesPage;
