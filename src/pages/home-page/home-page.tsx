import { React, defer, useRef } from 'services/imports-npm';
import SliderMain from 'components/ui/slider-main/slider-main';
import Footer from 'components/business/footer/footer';
import {
  getAccessorieName,
  getAccessory,
  getBluetooth,
  getBluetoothName,
  getHeadset,
  getHeadsetName,
  getKeyboardName_1,
  getKeyboardName_2,
  getKeyboard_1,
  getKeyboard_2,
  getMouse,
  getMousedName,
} from 'services/requests-home';
import { useScrollbar } from 'hooks/useScrollbar';

const HomePage = () => {
  // custom scroll
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  useScrollbar(contentWrapper);

  return (
    <div className="content-product h-screen" ref={contentWrapper}>
      <SliderMain />
      <Footer />
    </div>
  );
};

export const sliderLoader = async () => {
  return defer({
    mouse: await getMouse('w95-max'),
    mouseName: await getMousedName('w95-max'),
    keyboard_1: await getKeyboard_1('s98-naraka'),
    keyboard_2: await getKeyboard_2('s510rp'),
    keyboardName_1: await getKeyboardName_1('s98-naraka'),
    keyboardName_2: await getKeyboardName_2('s510rp'),
    headset: await getHeadset('mr710'),
    headsetName: await getHeadsetName('mr710'),
    bluetooth: await getBluetooth('m90'),
    bluetoothName: await getBluetoothName('m90'),
    accessory: await getAccessory('gs2l'),
    accessoryName: await getAccessorieName('gs2l'),
  });
};

export default HomePage;
