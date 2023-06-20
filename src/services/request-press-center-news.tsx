async function getPressCenterNews(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/news-pages/${id}`
  );
  return response.json();
}

async function getPressCenter() {
  const response = await fetch(
    `${
      import.meta.env.VITE_STRAPI_URL
    }/api/press-centr?populate[slices][populate][info][populate]=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

export { getPressCenter, getPressCenterNews };
