async function getMouse(id) {
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

async function getMousedName(id) {
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

async function getKeyboard_1(id) {
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

async function getKeyboard_2(id) {
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

async function getKeyboardName_1(id) {
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

async function getKeyboardName_2(id) {
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

async function getHeadset(id) {
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

async function getBluetooth(id) {
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

async function getAccessory(id) {
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

export {
  getMouse,
  getMousedName,
  getKeyboard_1,
  getKeyboard_2,
  getKeyboardName_1,
  getKeyboardName_2,
  getHeadset,
  getHeadsetName,
  getBluetooth,
  getBluetoothName,
  getAccessory,
  getAccessorieName,
};
