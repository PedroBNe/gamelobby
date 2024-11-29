"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function GamePage() {
  const { name, gameName } = useParams(); // Captura os parâmetros de URL
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      const data = await fetchGame(name, gameName); // Chama a função de fetch
      setGame(data);
    };

    fetchGameData();
  }, [name, gameName]);

  return (
    <div className="w-full p-10">
      <h1 className="text-3xl font-bold">{game.gameName}</h1>
      <p>Leads: {game.useLeads ? "Sim" : "Não"}</p>
      <p>Brindes: {game.useBrindes ? "Sim" : "Não"}</p>
    </div>
  );
}
