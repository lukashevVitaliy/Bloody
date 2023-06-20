async function getBluetoothsThumbnail() {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/list-bluetooths?populate=*`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothName(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bluetooths/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdBg(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bg-bluetooths/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdColors(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bluetooth-colors/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdShortDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bluetooth-short-descs/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdDesc(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/description-bluetooths/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdInfo(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/info-bluetooths/${id}`
  );

  if (!response.ok) {
    throw new Response('', {
      status: response.status,
      statusText: 'The problem is related to routing !!!',
    });
  }

  return response.json();
}

async function getBluetoothIdSize(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/bluetooth-sizes/${id}`
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
  getBluetoothsThumbnail,
  getBluetoothName,
  getBluetoothIdBg,
  getBluetoothIdColors,
  getBluetoothIdShortDesc,
  getBluetoothIdDesc,
  getBluetoothIdInfo,
  getBluetoothIdSize,
};
