import { FC } from 'react';
import { React, Link } from 'services/imports-npm';
import { IButtonMainSlider } from 'types/components-types';

const ButtonMainSlider: FC<IButtonMainSlider> = ({
  handleMouseEnter,
  handleMouseLeave,
  isHovering,
  href,
}) => {
  return (
    <Link
      to={href}
      className="z-10 block w-[100px] cursor-pointer rounded-md  bg-[var(--red-col-1)] sm:w-[130px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-2">
        <svg
          id="theSVG"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51 8"
          stroke="#fff"
          strokeLinecap="round"
          width="100%"
          height="100%"
          className="py-2 sm:py-3"
        >
          <defs>
            <marker id="m" overflow="visible" markerUnits="userSpaceOnUse">
              <path d="M-5,-5L0,0 -5,5" />
            </marker>
          </defs>

          <path
            d="M13,4L37,4"
            markerEnd="url(#m)"
            className={isHovering ? 'animate-line' : ''}
          >
            <animate
              attributeName="d"
              to="M1,4L50,4"
              dur="0.3s"
              begin="theRect.mouseover"
              repeatCount="1"
              fill="freeze"
            />
            <animate
              attributeName="d"
              to="M13,4L37,4"
              dur="0.3s"
              begin="theRect.mouseout"
              repeatCount="1"
              fill="freeze"
            />
          </path>

          <rect
            width="100%"
            height="100%"
            stroke="none"
            pointerEvents="all"
            id="theRect"
            className="py-3"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ButtonMainSlider;
