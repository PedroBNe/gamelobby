'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    const Alert = () => {
        window.alert('Jogo criado com sucesso!')
    }

    return(
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full min-h-[30vh] mb-16 p-10 shadow-2xl flex flex-col justify-around items-center">
                <h2 className="font-bold text-5xl">Personalize seu Game!</h2>
                <div className="w-full flex flex-col items-center">
                    <ul className="w-[70%] flex justify-between relative">
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                1
                            </p>
                            <p className="absolute top-[110px]">TEMPLATE</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                2
                            </p>
                            <p className="absolute top-[110px]">ESPECIFICAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                3
                            </p>
                            <p className="absolute top-[110px]">CONFIGURAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                4
                            </p>
                            <p className="absolute top-[110px]">DESIGN</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                5
                            </p>
                            <p className="absolute top-[110px]">SONS</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                6
                            </p>
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
                    <h2 className="w-[80%] text-3xl">Teste seu game e garanta que tudo esteja
                    exatamente como você imaginou!</h2>
                    <div className="w-full flex flex-col gap-5 text-start">
                        <p>
                            Publique seu game e dê a oportunidade para
                            o mundo se divertir com ele!
                        </p>
                        <Button variant={'verde'} className="w-[10vw] h-[5vh]">PUBLICAR!</Button>
                    </div>
                </div>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame/edit/songs">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>VOLTAR</Button>
                </Link>
                <Link href="/perfil">
                    <Button variant={'verde'} className="rounded-full" size={"lg"} onClick={() => Alert()}>SALVAR</Button>
                </Link>
            </div>
        </div>
    )
}