import { useLoaderData } from 'services/imports-npm';

export const getSlides = () => {
  const {
    mouse,
    mouseName,
    keyboardName_1,
    keyboardName_2,
    keyboard_1,
    keyboard_2,
    headsetName,
    headset,
    bluetooth,
    bluetoothName,
    accessory,
    accessoryName,
  } = useLoaderData();

  const slides = [
    {
      id: 1,
      title: `${mouseName?.data.attributes.model} ${mouseName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        mouse?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: mouse.data?.attributes.slug,
      path: 'mice/',
    },
    {
      id: 2,
      title: `${keyboardName_1?.data.attributes.model} ${keyboardName_1?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        keyboard_1?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: keyboard_1?.data.attributes.slug,
      path: 'keyboards/',
    },
    {
      id: 3,
      title: `${headsetName?.data.attributes.model} ${headsetName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        headset?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: headset?.data.attributes.slug,
      path: 'headsets/',
    },
    {
      id: 4,
      title: `${bluetoothName?.data.attributes.model} ${bluetoothName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        bluetooth?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: bluetooth?.data.attributes.slug,
      path: 'bluetooth/',
    },
    {
      id: 5,
      title: `${accessoryName?.data.attributes.model} ${accessoryName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        accessory?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: accessory?.data.attributes.slug,
      path: 'accessories/',
    },
    {
      id: 6,
      title: `${keyboardName_2?.data.attributes.model} ${keyboardName_2?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        keyboard_2?.data.attributes.bg_content_1.data.attributes.url
      }`,
      slug: keyboard_2?.data.attributes.slug,
      path: 'keyboards/',
    },
  ];

  return slides;
};
