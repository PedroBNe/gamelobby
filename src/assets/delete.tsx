import React from 'react';

interface TrashIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const Delete: React.FC<TrashIconProps> = ({
  size = 20,
  color = '#EF0004',
  className = '',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={`icon ${className}`}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default Delete;
