import { React, useLoaderData } from 'services/imports-npm';
import { IInfoBluethooths } from 'types/components-types';

export const BluethoothsSpecification = () => {
  const { info } = useLoaderData() as { info: IInfoBluethooths };

  return (
    <>
      <p className="mb-5 text-xl uppercase md:text-4xl">
        ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
      </p>
      <ul className="text-sm md:text-base">
        <li>{info?.data.attributes?.bluetooth_version}</li>
        <li>{info?.data.attributes?.charging_case_battery_type}</li>
        <li>{info?.data.attributes?.charging_time_of_the_case}</li>
        <li>{info?.data.attributes?.frequency_range}</li>
        <li>{info?.data.attributes?.headphone_battery_type}</li>
        <li>{info?.data.attributes?.headphone_charging_time}</li>
        <li>{info?.data.attributes?.headphone_sensitivity}</li>
        <li>{info?.data.attributes?.impedance}</li>
        <li>{info?.data.attributes?.microphone_sensitivity}</li>
        <li>{info?.data.attributes?.music_playback_time_withone_charge}</li>
        <li>{info?.data.attributes?.playback_time_from_the_charger}</li>
        <li>{info?.data.attributes?.power}</li>
        <li>{info?.data.attributes?.speaker_size}</li>
        <li>{info?.data.attributes?.working_distance}</li>
        <li>{info?.data.attributes?.weight}</li>
      </ul>
    </>
  );
};
