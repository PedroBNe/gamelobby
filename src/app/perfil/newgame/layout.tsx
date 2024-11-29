import { GameProvider } from '@/context/NewGameContext';
import React from 'react';

interface NewGameLayoutProps {
  children: React.ReactNode;
}

const NewGameLayout: React.FC<NewGameLayoutProps> = ({ children }) => {
  return (
    <GameProvider>
      {children}
    </GameProvider>
  );
};

export default NewGameLayout;