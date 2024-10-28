'use client'

import React, { useState } from 'react';

interface Color {
  name: string;
  hex: string;
}

const colors1: Color[] = [
  { name: '1', hex: '#FFB27C' },
  { name: '2', hex: '#FFDC7B' },
  { name: '3', hex: '#FFFD7B' },
  { name: '4', hex: '#D2FFC5' },
  { name: '5', hex: '#B8FFF8' },
  { name: '6', hex: '#9CD1FF' },
  { name: '7', hex: '#989DFF' },
  { name: '8', hex: '#CD9EFF' },
  { name: '9', hex: '#EEACFF' },
  { name: '10', hex: '#FFB1EF' },
  { name: '11', hex: '#FF9BC7' },
  { name: '12', hex: '#FF9092' },
  { name: '13', hex: '#FFFFFF' },
];

const colors2: Color[] = [
  { name: '14', hex: '#FF6A00' },
  { name: '15', hex: '#FFBB00' },
  { name: '16', hex: '#FFFB00' },
  { name: '17', hex: '#37FF00' },
  { name: '18', hex: '#00FFE5' },
  { name: '19', hex: '#0088FF' },
  { name: '20', hex: '#000DFF' },
  { name: '21', hex: '#7B00FF' },
  { name: '22', hex: '#CC00FF' },
  { name: '23', hex: '#FF00CC' },
  { name: '24', hex: '#FF006F' },
  { name: '25', hex: '#EF0004' },
  { name: '26', hex: '#8A8A8A' },
];

const colors3: Color[] = [
  { name: '27', hex: '#C05102' },
  { name: '28', hex: '#BC8B02' },
  { name: '29', hex: '#C0BD00' },
  { name: '30', hex: '#2BC800' },
  { name: '31', hex: '#00BCAA' },
  { name: '32', hex: '#0063BA' },
  { name: '33', hex: '#0009BC' },
  { name: '34', hex: '#5D00C1' },
  { name: '35', hex: '#9000B5' },
  { name: '36', hex: '#A90087' },
  { name: '37', hex: '#AE004C' },
  { name: '38', hex: '#BA0003' },
  { name: '39', hex: '#000000' },
];

const ColorBox: React.FC<{ color: Color }> = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-lg transition-opacity duration-200 ease-in-out"
      style={{
        width: '25px',
        height: '25px',
        backgroundColor: color.hex,
        border: '2px solid',
        cursor: 'pointer',
        opacity: isHovered ? 0.6 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
};

const ColorRow: React.FC<{ colors: Color[] }> = ({ colors }) => (
  <div className="flex gap-2">
    {colors.map((color) => (
      <ColorBox key={color.name} color={color} />
    ))}
  </div>
);

const ColorTable: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 p-4">
      <ColorRow colors={colors1} />
      <ColorRow colors={colors2} />
      <ColorRow colors={colors3} />
    </div>
  );
};

export default ColorTable;
