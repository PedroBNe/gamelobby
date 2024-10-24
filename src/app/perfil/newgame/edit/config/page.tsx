import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Archive from "@/utils/Archive";
import Link from "next/link";

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
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                3
                            </p>
                            <p className="absolute top-[110px]">CONFIGURAÇÕES</p>
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
            <div className="w-full p-10 flex gap-10">
               <div className="w-[15vw] min-h-[50vh] flex justify-center items-center bg-slate-300">
                    Imagem
               </div>
               <form>
                    <ul className="list-decimal text-sm flex flex-col gap-5">
                        <li>
                            <div className="flex flex-col gap-2">
                                Nome do Game
                                <Input type="text" />
                            </div>
                        </li>
                        <li>    
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    Vai captar leads*? (*Potencial cliente em prospecção) 
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center">
                                            <Checkbox id="Sim" />
                                            <label
                                                htmlFor="Sim"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Sim
                                            </label>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Checkbox id="Nao" />
                                            <label
                                                htmlFor="Nao"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    Selecione os campos de captação desejados:
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Nome
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Sobrenome
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    CPF
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    RG
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Data de Nascimento
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Profissão
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    País
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Estado
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Cidade
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Endereço
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    E-mail
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Checkbox id="Nao" />
                                                <label
                                                    htmlFor="Nao"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Telefone                                                    
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col gap-4">
                                Vai distribuir brindes?
                                <div className="flex gap-5">
                                    <div className="flex gap-1 items-center">
                                        <Checkbox id="Sim" />
                                        <label
                                            htmlFor="Sim"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Sim
                                        </label>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Checkbox id="Nao" />
                                        <label
                                            htmlFor="Nao"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    Escreva os brindes abaixo:
                                    <Input type="text" />
                                </div>
                            </div>
                        </li>
                    </ul>
               </form>
            </div>
            <div className="w-full p-10 flex flex-col gap-10">
                <div>
                    <h2>4. Upload de Imagens</h2>
                    <p className="text-sm opacity-40">Faça o upload das imagens que serão utilizadas nas cartas do jogo da memória (Máximo 6 imagens)</p>
                </div>
                <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <Archive />
                    <Archive />
                    <Archive />
                    <Archive />
                    <Archive />
                    <Archive />
                </div>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame/edit">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>VOLTAR</Button>
                </Link>
                <Link href="/perfil/newgame/edit/design">
                    <Button variant={'verde'} className="rounded-full" size={"lg"}>AVANÇAR</Button>
                </Link>
            </div>
        </div>
    )
}