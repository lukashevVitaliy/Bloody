async function getAccessoriesThumbnail() {
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
}

async function getAccessorieName(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/accessories/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdBg(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bg-accessories/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdColors(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/accessory-colors/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdShortDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/accessory-short-descs/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/description-accessories/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdInfo(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/info-accessories/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getAccessoryIdSize(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/accessory-sizes/${id}`
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
  getAccessoriesThumbnail,
  getAccessorieName,
  getAccessoryIdBg,
  getAccessoryIdColors,
  getAccessoryIdShortDesc,
  getAccessoryIdDesc,
  getAccessoryIdInfo,
  getAccessoryIdSize,
};
