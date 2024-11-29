"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchUserGames = async () => {

            try {
                const response = await fetch(`/api/users/games`);
                if (response.ok) {
                    const data = await response.json();
                    setGames(data); // Atualiza o estado com os jogos recebidos
                } else {
                    console.error("Erro ao buscar jogos");
                }
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        };

        fetchUserGames();
    }, []);

    return (
        <div className="w-full bg-[#FFFFFF]">
            <div className="w-full shadow-2xl p-14 mb-14 bg-white">
                <h2 className="font-bold text-5xl">Olá Lorem Ipsum</h2>
                <p>Bem vindo(a) ao seu painel Game Lobby</p>
            </div>

            <div className="w-full h-[22vh] bg-[#DBE3FF] rounded-lg p-4">
                {games.map((game, index) => (
                    <div key={game.gameName} className="min-h-[35vh] rounded-xl p-5 gap-5 flex flex-col items-center bg-white shadow-2xl">
                        <div className="w-full h-[20vh] bg-slate-400 flex justify-center items-center">
                            imagem
                        </div>
                        {game.gameName}
                        <Button variant={'roxo'} className="w-[9vw]">JOGAR</Button>
                    </div>

                ))}
            </div>
        </div>
    )
}