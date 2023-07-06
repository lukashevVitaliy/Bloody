import { React, useLoaderData } from 'services/imports-npm';
import { IInfoHeadsets } from 'types/components-types';

const HeadsetsSpecification = () => {
  const { info } = useLoaderData() as { info: IInfoHeadsets };

  return (
    <>
      <p className="mb-5 text-xl uppercase md:text-4xl">
        ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
      </p>
      <ul className="text-sm md:text-base">
        <li>{info?.data.attributes?.cable}</li>
        <li>{info?.data.attributes?.cable_a}</li>
        <li>{info?.data.attributes?.cable_b}</li>
        <li>{info?.data.attributes?.cable_c}</li>
        <li>{info?.data.attributes?.cable_d}</li>
        <li>{info?.data.attributes?.cable_e}</li>
        <li>{info?.data.attributes?.compatibility}</li>
        <li>{info?.data.attributes?.connection_type}</li>
        <li>{info?.data.attributes?.connection_type_a}</li>
        <li>{info?.data.attributes?.connection_type_b}</li>
        <li>{info?.data.attributes?.connection_type_c}</li>
        <li>{info?.data.attributes?.connection_type_d}</li>
        <li>{info?.data.attributes?.connection_type_e}</li>
        <li>{info?.data.attributes?.headphones}</li>
        <li>{info?.data.attributes?.headphones_a}</li>
        <li>{info?.data.attributes?.headphones_b}</li>
        <li>{info?.data.attributes?.headphones_c}</li>
        <li>{info?.data.attributes?.headphones_d}</li>
        <li>{info?.data.attributes?.headphones_e}</li>
        <li>{info?.data.attributes?.microphone}</li>
        <li>{info?.data.attributes?.microphone_a}</li>
        <li>{info?.data.attributes?.microphone_b}</li>
        <li>{info?.data.attributes?.microphone_c}</li>
        <li>{info?.data.attributes?.microphone_d}</li>
        <li>{info?.data.attributes?.microphone_e}</li>
        <li>{info?.data.attributes?.weight}</li>
      </ul>
    </>
  );
};

export default HeadsetsSpecification;
