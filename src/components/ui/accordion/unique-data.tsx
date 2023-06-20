import {
  IAccessories,
  IBluetooths,
  IHeadsets,
  IKeyboards,
  IMice,
} from 'types/components-types';

// Мышки
export const UniqueCpi = (mice: IMice) => {
  const allCPI: (string | null)[] = mice?.data
    .map((item) => item.attributes.cpi)
    .filter((item) => item !== null)
    .sort(function (a, b) {
      return b - a;
    });
  return [...new Set(allCPI)];
};

export const UniqueSeries = (mice: IMice) => {
  const allSeries: (string | null)[] = mice?.data
    .map((item) => item.attributes.series)
    .filter((item) => item !== null)
    .sort();
  return [...new Set(allSeries)];
};

export const UniqueSize = (mice: IMice) => {
  const allSize: (string | null)[] = mice?.data
    .map((item) => item.attributes.size)
    .filter((item) => item !== null)
    .sort(function (a, b) {
      return b - a;
    });
  return [...new Set(allSize)];
};

// Клавиатуры
export const getKeyboardSwitchTypes = (keyboards: IKeyboards) => {
  const switchTypes = new Set();
  keyboards.data.forEach((keyboard) => {
    if (keyboard.attributes.switchKeyboard) {
      keyboard.attributes.switchKeyboard.mecha_like &&
        switchTypes.add(keyboard.attributes.switchKeyboard.mecha_like);
      keyboard.attributes.switchKeyboard.optical &&
        switchTypes.add(keyboard.attributes.switchKeyboard.optical);
    }
  });
  return Array.from(switchTypes);
};

export const getKeyboardBacklightingTypes = (keyboards: IKeyboards) => {
  const backlightingTypes = new Set();
  keyboards.data.forEach((keyboard) => {
    if (keyboard.attributes.backlightingKeyboard) {
      keyboard.attributes.backlightingKeyboard.neon &&
        backlightingTypes.add(keyboard.attributes.backlightingKeyboard.neon);
      keyboard.attributes.backlightingKeyboard.not_available &&
        backlightingTypes.add(
          keyboard.attributes.backlightingKeyboard.not_available
        );
      keyboard.attributes.backlightingKeyboard.rgb &&
        backlightingTypes.add(keyboard.attributes.backlightingKeyboard.rgb);
      keyboard.attributes.backlightingKeyboard.single_color &&
        backlightingTypes.add(
          keyboard.attributes.backlightingKeyboard.single_color
        );
    }
  });
  return Array.from(backlightingTypes);
};

export const getKeyboardNumberOfKeys = (keyboards: IKeyboards) => {
  const numberOfKeys = new Set();
  keyboards.data.forEach((keyboard) => {
    if (keyboard.attributes.numberOfKeysKeyboard) {
      keyboard.attributes.numberOfKeysKeyboard.B60_87 &&
        numberOfKeys.add(`${keyboard.attributes.numberOfKeysKeyboard.B60_87}`);
      keyboard.attributes.numberOfKeysKeyboard.B104_113 &&
        numberOfKeys.add(
          `${keyboard.attributes.numberOfKeysKeyboard.B104_113}`
        );
    }
  });
  return Array.from(numberOfKeys);
};

export const getKeyboardKeyGhost = (keyboards: IKeyboards) => {
  const keyGhost = new Set();
  keyboards.data.forEach((keyboard) => {
    if (keyboard.attributes.keyGhost) {
      keyboard.attributes.keyGhost.b12_press &&
        keyGhost.add(keyboard.attributes.keyGhost.b12_press);
      keyboard.attributes.keyGhost.multipress &&
        keyGhost.add(keyboard.attributes.keyGhost.multipress);
      keyboard.attributes.keyGhost.n_key_press &&
        keyGhost.add(keyboard.attributes.keyGhost.n_key_press);
      keyboard.attributes.keyGhost.not_available &&
        keyGhost.add(keyboard.attributes.keyGhost.not_available);
    }
  });
  return Array.from(keyGhost);
};

// Гарнитуры
export const getHeadsetsSpeakers = (headsets: IHeadsets) => {
  const dynamicsHeadset = new Set();
  headsets.data.forEach((headsets) => {
    if (headsets.attributes.dynamicsHeadset) {
      headsets.attributes.dynamicsHeadset.apt_x_hd &&
        dynamicsHeadset.add(headsets.attributes.dynamicsHeadset.apt_x_hd);
      headsets.attributes.dynamicsHeadset.hybrid_membrane &&
        dynamicsHeadset.add(
          headsets.attributes.dynamicsHeadset.hybrid_membrane
        );
      headsets.attributes.dynamicsHeadset.seven_one_surround_sound &&
        dynamicsHeadset.add(
          headsets.attributes.dynamicsHeadset.seven_one_surround_sound
        );
      headsets.attributes.dynamicsHeadset.two_one_stereo &&
        dynamicsHeadset.add(headsets.attributes.dynamicsHeadset.two_one_stereo);
    }
  });
  return Array.from(dynamicsHeadset);
};

export const getHeadsetsConnecting = (headsets: IHeadsets) => {
  const connectingHeadset = new Set();
  headsets.data.forEach((headsets) => {
    if (headsets.attributes.ConnectingHeadset) {
      headsets.attributes.ConnectingHeadset.three_five_tenths_mm &&
        connectingHeadset.add(
          headsets.attributes.ConnectingHeadset.three_five_tenths_mm
        );
      headsets.attributes.ConnectingHeadset.usb &&
        connectingHeadset.add(headsets.attributes.ConnectingHeadset.usb);
      headsets.attributes.ConnectingHeadset.three_five_tenths_mm_usb &&
        connectingHeadset.add(
          headsets.attributes.ConnectingHeadset.three_five_tenths_mm_usb
        );
      headsets.attributes.ConnectingHeadset.bt_aux &&
        connectingHeadset.add(headsets.attributes.ConnectingHeadset.bt_aux);
      headsets.attributes.ConnectingHeadset.bt_two_and_four_tenths_Ghz_aux &&
        connectingHeadset.add(
          headsets.attributes.ConnectingHeadset.bt_two_and_four_tenths_Ghz_aux
        );
    }
  });
  return Array.from(connectingHeadset);
};

export const getHeadsetsHeadband = (headsets: IHeadsets) => {
  const headbandHeadset = new Set();
  headsets.data.forEach((headsets) => {
    if (headsets.attributes.headbandHeadset) {
      headsets.attributes.headbandHeadset.double &&
        headbandHeadset.add(headsets.attributes.headbandHeadset.double);
      headsets.attributes.headbandHeadset.single &&
        headbandHeadset.add(headsets.attributes.headbandHeadset.single);
      headsets.attributes.headbandHeadset.soaring_wing &&
        headbandHeadset.add(headsets.attributes.headbandHeadset.soaring_wing);
    }
  });
  return Array.from(headbandHeadset);
};

export const getHeadsetsBacklighting = (headsets: IHeadsets) => {
  const backlightingHeadset = new Set();
  headsets.data.forEach((headsets) => {
    if (headsets.attributes.backlightingHeadset) {
      headsets.attributes.backlightingHeadset.rgb &&
        backlightingHeadset.add(headsets.attributes.backlightingHeadset.rgb);
      headsets.attributes.backlightingHeadset.neon &&
        backlightingHeadset.add(headsets.attributes.backlightingHeadset.neon);
      headsets.attributes.backlightingHeadset.seven_color &&
        backlightingHeadset.add(
          headsets.attributes.backlightingHeadset.seven_color
        );
      headsets.attributes.backlightingHeadset.single &&
        backlightingHeadset.add(headsets.attributes.backlightingHeadset.single);
      headsets.attributes.backlightingHeadset.not_available &&
        backlightingHeadset.add(
          headsets.attributes.backlightingHeadset.not_available
        );
    }
  });
  return Array.from(backlightingHeadset);
};

// Bluetooth
export const getBluetoothMode = (bluetooths: IBluetooths) => {
  const modesBluetooth = new Set();
  bluetooths.data.forEach((bluetooths) => {
    if (bluetooths.attributes.ModesBluetooth) {
      bluetooths.attributes.ModesBluetooth.audio &&
        modesBluetooth.add(bluetooths.attributes.ModesBluetooth.audio);
      bluetooths.attributes.ModesBluetooth.game_audio &&
        modesBluetooth.add(bluetooths.attributes.ModesBluetooth.game_audio);
    }
  });
  return Array.from(modesBluetooth);
};

export const getBluetoothNoiceReduction = (bluetooths: IBluetooths) => {
  const noiceReduction = new Set();
  bluetooths.data.forEach((bluetooths) => {
    if (bluetooths.attributes.NoiceReductionBluetooth) {
      bluetooths.attributes.NoiceReductionBluetooth.anc_enc &&
        noiceReduction.add(
          bluetooths.attributes.NoiceReductionBluetooth.anc_enc
        );
      bluetooths.attributes.NoiceReductionBluetooth.enc &&
        noiceReduction.add(bluetooths.attributes.NoiceReductionBluetooth.enc);
    }
  });
  return Array.from(noiceReduction);
};

// Accessories
export const getAccessoriesCategory = (accessories: IAccessories) => {
  const categoryAccessories = new Set();
  accessories.data.forEach((accessories) => {
    if (accessories.attributes.CategoryAccessories) {
      accessories.attributes.CategoryAccessories.mouse_pads &&
        categoryAccessories.add(
          accessories.attributes.CategoryAccessories.mouse_pads
        );
      accessories.attributes.CategoryAccessories.headphone_stands &&
        categoryAccessories.add(
          accessories.attributes.CategoryAccessories.headphone_stands
        );
    }
  });
  return Array.from(categoryAccessories);
};
