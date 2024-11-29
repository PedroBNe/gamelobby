"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

type GameData = {
  gameName?: string;
  logo?: string;
  icon?: string;
  background?: string;
  useLeads?: boolean;
  userId?: number;
};

type GameContextType = {
  gameData: GameData;
  updateGameData: (section: Partial<GameData>) => void;
  resetGameData: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameData, setGameData] = useState<GameData>({});

  const updateGameData = (section: Partial<GameData>) => {
    setGameData((prev) => ({ ...prev, ...section }));
  };

  const resetGameData = () => {
    setGameData({});
  };

  return (
    <GameContext.Provider value={{ gameData, updateGameData, resetGameData }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
