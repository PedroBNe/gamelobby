import React from 'react';

interface IconProps {
  fill?: string;
  height?: string | number;
  width?: string | number;
}

const IconDirection: React.FC<IconProps> = ({
  fill = '#000000',
  height = '228px',
  width = '228px',

}) => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={fill}
      strokeWidth="0.864"
    >
      <g>
        <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
      </g>
    </svg>
  );
};

export default IconDirection;
