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
import {
  getKeyboardBacklightingTypes,
  getKeyboardKeyGhost,
  getKeyboardNumberOfKeys,
  getKeyboardSwitchTypes,
} from 'components/ui/accordion/unique-data';
import { useScrollbar } from 'hooks/useScrollbar';
import { AccordionSwitch } from 'components/ui/accordion-switch';
import { AccordionBacklighting } from 'components/ui/accordion-backlighting';
import { AccordionNumberOfKey } from 'components/ui/accordion-number-of-key';
import { AccordionKeyGhost } from 'components/ui/accordion-key-ghost';
import { RenderItemList } from 'components/business/render-item-list';
import Footer from 'components/business/footer/footer';
import { IKeyboards } from 'types/components-types';

const KeyboardsPage = () => {
  const [accordionSwitch, setActiveAccordionSwitch] = useState<boolean>(false);
  const [accordionBacklighting, setActiveAccordionBacklighting] =
    useState<boolean>(false);
  const [accordionNumberOfKeys, setActiveAccordionNumberOfKeys] =
    useState<boolean>(false);
  const [accordionKeyGhost, setActiveAccordionKeyGhost] =
    useState<boolean>(false);

  const [selectSwitch, setSelectSwitch] = useState<null | string>(null);
  const [selectBacklighting, setSelectBacklighting] = useState<null | string>(
    null
  );
  const [selectNumberOfKeys, setSelectNumberOfKeys] = useState<null | string>(
    null
  );
  const [selectKeyGhost, setSelectKeyGhost] = useState<null | string>(null);

  // search product
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  // get products
  const { keyboards } = useLoaderData() as { keyboards: IKeyboards };

  // console.log(keyboards);

  const uniqueSwitch = getKeyboardSwitchTypes(keyboards);
  const uniqueBacklighting = getKeyboardBacklightingTypes(keyboards);
  const uniqueNumberOfKeys = getKeyboardNumberOfKeys(keyboards);
  const uniqueKeyGhost = getKeyboardKeyGhost(keyboards);

  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <TopBlock
        title="Клавиатуры"
        statusSearch={true}
        classes="flex md:flex-row h-[128px] md:h-[148px] w-full items-center flex-col justify-between px-4 border-b border-[var(--black-col-4)]"
        setSearchParams={setSearchParams}
        productQuery={productQuery}
      />
      <div className="relative flex flex-col md:flex-row">
        <SidebarMenuLeft
          classes={
            'min-w-[230px] border-r-4 border-[var(--black-col-4)] bg-[var(--black-col-3)]'
          }
        >
          <AccordionSwitch
            uniqueSwitch={uniqueSwitch}
            accordionSwitch={accordionSwitch}
            onClick={() => setActiveAccordionSwitch(!accordionSwitch)}
            setSelectSwitch={setSelectSwitch}
          />
          <AccordionBacklighting
            uniqueBacklighting={uniqueBacklighting}
            accordionBacklighting={accordionBacklighting}
            onClick={() =>
              setActiveAccordionBacklighting(!accordionBacklighting)
            }
            setSelectBacklighting={setSelectBacklighting}
          />
          <AccordionNumberOfKey
            uniqueNumberOfKeys={uniqueNumberOfKeys}
            accordionNumberOfKeys={accordionNumberOfKeys}
            onClick={() =>
              setActiveAccordionNumberOfKeys(!accordionNumberOfKeys)
            }
            setSelectNumberOfKeys={setSelectNumberOfKeys}
          />
          <AccordionKeyGhost
            uniqueKeyGhost={uniqueKeyGhost}
            accordionKeyGhost={accordionKeyGhost}
            onClick={() => setActiveAccordionKeyGhost(!accordionKeyGhost)}
            setSelectKeyGhost={setSelectKeyGhost}
          />
        </SidebarMenuLeft>
        <div>
          <ListProducts
            classes="grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            tag={'div'}
          >
            {keyboards &&
              (selectSwitch
                ? RenderItemList(
                    keyboards.data.filter(
                      (keyboard) =>
                        keyboard.attributes.switchKeyboard &&
                        (keyboard.attributes.switchKeyboard.mecha_like ===
                          selectSwitch ||
                          keyboard.attributes.switchKeyboard.mechanical ===
                            selectSwitch ||
                          keyboard.attributes.switchKeyboard.optical ===
                            selectSwitch) &&
                        keyboard.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectBacklighting
                ? RenderItemList(
                    keyboards.data.filter(
                      (keyboard) =>
                        keyboard.attributes.backlightingKeyboard &&
                        (keyboard.attributes.backlightingKeyboard.neon ===
                          selectBacklighting ||
                          keyboard.attributes.backlightingKeyboard
                            .not_available === selectBacklighting ||
                          keyboard.attributes.backlightingKeyboard.rgb ===
                            selectBacklighting ||
                          keyboard.attributes.backlightingKeyboard
                            .single_color === selectBacklighting) &&
                        keyboard.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectNumberOfKeys
                ? RenderItemList(
                    keyboards.data.filter(
                      (keyboard) =>
                        keyboard.attributes.numberOfKeysKeyboard &&
                        (keyboard.attributes.numberOfKeysKeyboard.B60_87 ===
                          selectNumberOfKeys ||
                          keyboard.attributes.numberOfKeysKeyboard.B104_113 ===
                            selectNumberOfKeys) &&
                        keyboard.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : selectKeyGhost
                ? RenderItemList(
                    keyboards.data.filter(
                      (keyboard) =>
                        keyboard.attributes.keyGhost &&
                        (keyboard.attributes.keyGhost.b12_press ===
                          selectKeyGhost ||
                          keyboard.attributes.keyGhost.multipress ===
                            selectKeyGhost ||
                          keyboard.attributes.keyGhost.n_key_press ===
                            selectKeyGhost ||
                          keyboard.attributes.keyGhost.not_available ===
                            selectKeyGhost) &&
                        keyboard.attributes.model
                          .toLowerCase()
                          .includes(productQuery)
                    )
                  )
                : RenderItemList(
                    keyboards.data.filter((keyboard) =>
                      keyboard.attributes.model
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

const getKeyboards = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-keyboards?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
};

export const keyboardsLoader = async () => {
  return defer({ keyboards: await getKeyboards() });
};

export default KeyboardsPage;
