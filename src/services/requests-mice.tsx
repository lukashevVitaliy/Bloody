async function getMiceThumbnail() {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-mice?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseName(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/mouses/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdBg(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bg-items/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdColors(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/product-colors/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdShortDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/short-descs/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/descriptions/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdInfo(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/info-products/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getMouseIdSize(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/product-sizes/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

export {
  getMiceThumbnail,
  getMouseName,
  getMouseIdBg,
  getMouseIdColors,
  getMouseIdShortDesc,
  getMouseIdDesc,
  getMouseIdInfo,
  getMouseIdSize,
};
