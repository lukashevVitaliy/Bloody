import { React, useLoaderData } from 'services/imports-npm';
import { IInfoAccessories } from 'types/components-types';

const AccessoriesSpecification = () => {
  const { info } = useLoaderData() as { info: IInfoAccessories };

  return (
    <>
      <p className="mb-5 text-xl uppercase md:text-4xl">
        ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
      </p>
      <ul className="text-sm md:text-base">
        <li>{info?.data.attributes?.text_a}</li>
        <li>{info?.data.attributes?.text_b}</li>
        <li>{info?.data.attributes?.text_c}</li>
        <li>{info?.data.attributes?.text_d}</li>
        <li>{info?.data.attributes?.text_e}</li>
      </ul>
    </>
  );
};

export default AccessoriesSpecification;
