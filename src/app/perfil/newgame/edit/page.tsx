import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    return(
        <div className="w-full flex flex-col items-center">
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
                            <p className="absolute top-[110px]">CONFIGURAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                3
                            </p>
                            <p className="absolute top-[110px]">UPLOAD</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                4
                            </p>
                            <p className="absolute top-[110px]">DESIGN</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                5
                            </p>
                            <p className="absolute top-[110px]">SONS</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                6
                            </p>
                            <p className="absolute top-[110px]">TESTE</p>
                        </li>
                        <hr className="w-full h-[3px] bg-black absolute top-[50%]" />
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <ul className="flex flex-col gap-10 m-10 list-decimal text-sm">
                    <li>
                        <div className="flex flex-col gap-2">
                            Orientação do Game
                            <Input placeholder="teste" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Tipo de Software
                            <Input placeholder="teste" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Tipo de Conexão
                            <Input placeholder="teste" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Vai coletar Leads?
                            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
                                <Input placeholder="teste" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                                <Input placeholder="Selecione os Campos de Coleta desejados" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Vai distribuir brindes?
                            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
                                <Input placeholder="teste" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                                <Input placeholder="Digite os brindes abaixo e de um enter a cada brinde" type="text" className="max-w-[25vw] rounded-full shadow-md"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>VOLTAR</Button>
                </Link>
                <Link href="/perfil/newgame/edit/config">
                    <Button variant={'verde'} className="rounded-full" size={"lg"}>AVANÇAR</Button>
                </Link>
            </div>
        </div>
    )
}