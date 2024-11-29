'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGameContext } from "@/context/NewGameContext"; // Importando o contexto
import { useRouter } from "next/navigation"; // Para redirecionamento após salvar

export default function Page() {
    const { gameData } = useGameContext(); // Pegando o estado atual do jogo
    const router = useRouter();

    const saveGameToDatabase = async () => {
        try {
            // Definindo dados mockados para campos adicionais, conforme necessário
            const gameDataWithDefaults = {
                ...gameData,
                gameName: gameData.gameName || "Game Default",
                logo: gameData.logo || "logo_default.png",
                icon: gameData.icon || "icon_default.png",
                background: gameData.background || "background_default.png",
                useLeads: gameData.useLeads ?? false,
                useBrindes: gameData.useBrindes ?? false, // Adicionando o valor padrão
                userId: gameData.userId || 1, // Substitua por um ID válido para testes
            };

            const response = await fetch("/api/users/games", { // Corrige a URL do endpoint
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameDataWithDefaults),
            });

            if (response.ok) {
                const data = await response.json();
                window.alert("Jogo salvo com sucesso!");
                router.push("/perfil"); // Redireciona para a página inicial ou perfil
            } else {
                window.alert("Erro ao salvar o jogo. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao salvar o jogo:", error);
            window.alert("Erro ao salvar o jogo. Tente novamente.");
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full min-h-[30vh] mb-16 p-10 shadow-2xl flex flex-col justify-around items-center">
                <h2 className="font-bold text-5xl">Personalize seu Game!</h2>
                <div className="w-full flex flex-col items-center">
                    <ul className="w-[70%] flex justify-between relative">
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">1</p>
                            <p className="absolute top-[110px]">TEMPLATE</p>
                        </li>
                        {/* Outros itens da lista... */}
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">6</p>
                            <p className="absolute top-[110px]">TESTE</p>
                        </li>
                        <hr className="w-full h-[3px] bg-black absolute top-[50%]" />
                    </ul>
                </div>
            </div>
            <div className="w-full p-10 flex gap-10">
                <div className="w-[20vw] h-[60vh] flex justify-center items-center bg-slate-300">
                    Imagem
                </div>
                <div className="flex flex-col gap-10">
                    <h2 className="w-[80%] text-3xl">
                        Teste seu game e garanta que tudo esteja exatamente como você imaginou!
                    </h2>
                    <div className="w-full flex flex-col gap-5 text-start">
                        <p>Publique seu game e dê a oportunidade para o mundo se divertir com ele!</p>
                        <Button
                            variant={'verde'}
                            className="w-[10vw] h-[5vh]"
                            onClick={() => window.alert('Jogo publicado com sucesso!')}
                        >
                            PUBLICAR!
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame/songs">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>
                        VOLTAR
                    </Button>
                </Link>
                <Button
                    variant={'verde'}
                    className="rounded-full"
                    size={"lg"}
                    onClick={saveGameToDatabase}
                >
                    SALVAR
                </Button>
            </div>
        </div>
    );
}
