import { React, useState, useEffect } from 'services/imports-npm';
import { useLoaderData } from 'services/imports-npm';

export const getSlides = () => {
  const [isWebPSupported, setIsWebPSupported] = useState<boolean>(false);

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

  // Определение поддержки формата WebP
  useEffect(() => {
    const checkWebPSupport = () => {
      return new Promise((res) => {
        const webP = new Image();
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = () => {
          res(webP.height === 2);
        };
      });
    };

    checkWebPSupport().then((hasWebP) => {
      setIsWebPSupported(hasWebP);
    });
  }, []);

  const slides = [
    {
      id: 1,
      title: `${mouseName?.data?.attributes.model} ${mouseName?.data?.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? mouse?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : mouse?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: mouse.data?.attributes.slug,
      path: 'mice/',
    },
    {
      id: 2,
      title: `${keyboardName_1?.data.attributes.model} ${keyboardName_1?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? keyboard_1?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : keyboard_1?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: keyboard_1?.data.attributes.slug,
      path: 'keyboards/',
    },
    {
      id: 3,
      title: `${headsetName?.data.attributes.model} ${headsetName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? headset?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : headset?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: headset?.data.attributes.slug,
      path: 'headsets/',
    },
    {
      id: 4,
      title: `${bluetoothName?.data.attributes.model} ${bluetoothName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? bluetooth?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : bluetooth?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: bluetooth?.data.attributes.slug,
      path: 'bluetooth/',
    },
    {
      id: 5,
      title: `${accessoryName?.data.attributes.model} ${accessoryName?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? accessory?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : accessory?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: accessory?.data.attributes.slug,
      path: 'accessories/',
    },
    {
      id: 6,
      title: `${keyboardName_2?.data.attributes.model} ${keyboardName_2?.data.attributes.subtitle}`,
      url: `${import.meta.env.VITE_STRAPI_URL}${
        isWebPSupported
          ? keyboard_2?.data.attributes.bg_content_1.data.find((image) =>
              image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
          : keyboard_2?.data.attributes.bg_content_1.data.find(
              (image) => !image.attributes.url.endsWith('.webp')
            )?.attributes.url || ''
      }`,
      slug: keyboard_2?.data.attributes.slug,
      path: 'keyboards/',
    },
  ];

  return slides;
};
