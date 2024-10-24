import React from 'react';

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
  { name: '13', hex: '##FFFFFF' },
];

const colors2: Color[] = [
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
  { name: '13', hex: '##FFFFFF' },
];

const colors3: Color[] = [
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
  { name: '13', hex: '##FFFFFF' },
];

const ColorTable: React.FC = () => {
  return (
    <div className='flex flex-col gap-1 m-3'>
      <div className="flex gap-2">
        {colors1.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
                <div
                className="w-8 h-8 rounded-full border-2 border-gray-400"
                style={{ backgroundColor: color.hex }}
                ></div>
            </div>
        ))}
      </div>
      <div className="flex gap-2">
        {colors2.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
                <div
                className="w-8 h-8 rounded-full border-2 border-gray-400"
                style={{ backgroundColor: color.hex }}
                ></div>
            </div>
        ))}
      </div>
      <div className="flex gap-2">
        {colors3.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
                <div
                className="w-8 h-8 rounded-full border-2 border-gray-400"
                style={{ backgroundColor: color.hex }}
                ></div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ColorTable;
