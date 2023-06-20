async function getHeadsetsThumbnail() {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-headsets?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetName(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/headsets/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdBg(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bg-headsets/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdColors(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/headset-colors/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdShortDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/headset-short-descs/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/description-headsets/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdInfo(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/info-headsets/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getHeadsetIdSize(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/headset-sizes/${id}`
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
  getHeadsetsThumbnail,
  getHeadsetName,
  getHeadsetIdBg,
  getHeadsetIdColors,
  getHeadsetIdShortDesc,
  getHeadsetIdDesc,
  getHeadsetIdInfo,
  getHeadsetIdSize,
};
