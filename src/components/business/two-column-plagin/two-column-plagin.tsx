import { React } from 'services/imports-npm';

export const TwoColumnPlagin = () => {
  return (
    <div className="mx-auto flex w-[68.75rem] justify-between border-t border-[var(--black-col-4)]">
      <div className="w-[50rem]">
        <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3 text-xl font-medium uppercase text-[var(--gray-col-2)]">
          Title Content
        </h3>
        <div>Content</div>
      </div>
      <div className="w-[13.75rem]">
        <h3 className="mb-3 border-b border-[var(--black-col-4)] pt-5 pb-3 text-xl font-medium uppercase text-[var(--gray-col-2)]">
          Title Menu
        </h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};
