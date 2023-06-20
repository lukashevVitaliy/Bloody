async function getKeyboardsThumbnail() {
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
}

async function getKeyboardName(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/keybords/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdBg(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bg-keyboards/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdColors(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/keyboard-colors/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdShortDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/keyboard-short-descs/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/description-keyboards/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdInfo(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/info-keybords/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getKeyboardIdSize(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/keyboard-sizes/${id}`
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
  getKeyboardsThumbnail,
  getKeyboardName,
  getKeyboardIdBg,
  getKeyboardIdColors,
  getKeyboardIdShortDesc,
  getKeyboardIdDesc,
  getKeyboardIdInfo,
  getKeyboardIdSize,
};
