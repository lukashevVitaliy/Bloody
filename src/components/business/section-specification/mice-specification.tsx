import { React, useLoaderData } from 'services/imports-npm';
import { IInfoMice } from 'types/components-types';

export const MiceSpecification = () => {
  const { info } = useLoaderData() as { info: IInfoMice };

  return (
    <>
      <p className="mb-5 text-xl uppercase md:text-4xl">
        ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
      </p>
      <ul className="text-sm md:text-base">
        <li>{info?.data.attributes?.acceleration}</li>
        <li>{info?.data.attributes?.backlighting}</li>
        <li>{info?.data.attributes?.battery}</li>
        <li>{info?.data.attributes?.builtIn_memory}</li>
        <li>{info?.data.attributes?.cable_length}</li>
        <li>{info?.data.attributes?.connection_type}</li>
        <li>{info?.data.attributes?.frame_rate}</li>
        <li>{info?.data.attributes?.interface}</li>
        <li>{info?.data.attributes?.metal_feet}</li>
        <li>{info?.data.attributes?.microswitches}</li>
        <li>{info?.data.attributes?.number_of_buttons}</li>
        <li>{info?.data.attributes?.polling_frequency}</li>
        <li>{info?.data.attributes?.processing_speed}</li>
        <li>{info?.data.attributes?.programmable_buttons}</li>
        <li>{info?.data.attributes?.radio_communications}</li>
        <li>{info?.data.attributes?.resolution}</li>
        <li>{info?.data.attributes?.responce_time}</li>
        <li>{info?.data.attributes?.scroll_wheel}</li>
        <li>{info?.data.attributes?.system_requirements}</li>
        <li>{info?.data.attributes?.tracing_speed}</li>
      </ul>
    </>
  );
};
