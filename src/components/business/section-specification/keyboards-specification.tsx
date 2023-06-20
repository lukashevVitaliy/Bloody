import { React, useLoaderData } from 'services/imports-npm';
import { IInfoKeyboards } from 'types/components-types';

export const KeyboardsSpecification = () => {
  const { info } = useLoaderData() as { info: IInfoKeyboards };

  return (
    <>
      <p className="mb-5 text-xl uppercase md:text-4xl">
        ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
      </p>
      <ul className="text-sm md:text-base">
        <li>{info?.data.attributes?.antiGhost_technology}</li>
        <li>{info?.data.attributes?.backlight_brightness}</li>
        <li>{info?.data.attributes?.backlighting}</li>
        <li>{info?.data.attributes?.cable_length}</li>
        <li>{info?.data.attributes?.connection_type}</li>
        <li>{info?.data.attributes?.extras_included}</li>
        <li>{info?.data.attributes?.game_keys}</li>
        <li>{info?.data.attributes?.interface}</li>
        <li>{info?.data.attributes?.key_life}</li>
        <li>{info?.data.attributes?.moisture_protection}</li>
        <li>{info?.data.attributes?.multimedia_hotkeys}</li>
        <li>{info?.data.attributes?.optical_switches}</li>
        <li>{info?.data.attributes?.polling_frequency}</li>
        <li>{info?.data.attributes?.polling_frequency_of_8_LK_keys}</li>
        <li>{info?.data.attributes?.response_time}</li>
        <li>{info?.data.attributes?.response_time_8_LK_key}</li>
        <li>{info?.data.attributes?.space}</li>
        <li>{info?.data.attributes?.switch_type}</li>
        <li>{info?.data.attributes?.system_requirements}</li>
      </ul>
    </>
  );
};
