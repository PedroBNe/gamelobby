import { Button } from "@/components/ui/button";
import Archive from "@/utils/Archive";
import Link from "next/link";
import ColorTable from "@/utils/ColorTable";

export default function Page() {

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
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
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
            <div className="w-full p-10 flex gap-10">
               <div className="w-[15vw] min-h-[50vh] flex justify-center items-center bg-slate-300">
                    Imagem
               </div>
               <div>
                    <ul className="list-decimal text-sm flex flex-col gap-5">
                        <li>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h2>Envio da logomarca (.PNG)</h2>
                                    <p className="text-sm opacity-40">A logomarca será exibida no verso das cartas, no verso das imagens selecionadas previamente.</p>
                                    <div className="w-[15vw]">
                                        <Archive /> 
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
               </div>
            </div>
            <div className="w-full p-10 flex flex-col gap-10">
            <ul className="text-sm grid grid-cols-2 gap-5">
                <li>
                    2. Cor do background
                    <ColorTable />
                </li>
                <li>
                    3. Cor primária
                    <ColorTable /> 
                </li> 
                <li>
                    4. Cor secundária
                    <ColorTable /> 
                </li> 
                <li>
                    5. Cor da fonte
                    <ColorTable /> 
                </li> 
            </ul>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame/config">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>VOLTAR</Button>
                </Link>
                <Link href="/perfil/newgame/songs">
                    <Button variant={'verde'} className="rounded-full" size={"lg"}>AVANÇAR</Button>
                </Link>
            </div>
        </div>
    )
}