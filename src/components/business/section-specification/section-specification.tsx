import { React, forwardRef } from 'services/imports-npm';
import { ISectionSpecification } from 'types/components-types';

export const SectionSpecification = forwardRef<
  HTMLDivElement,
  ISectionSpecification
>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full border-b border-[#333] bg-inherit px-3 py-7 text-[var(--gray-col-2)] md:p-7"
    >
      {children}
    </div>
  );
});
