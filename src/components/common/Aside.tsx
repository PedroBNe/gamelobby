import Coin from "@/assets/coin";
import { Button } from "../ui/button";
import Gear from '@/assets/gear.png';
import Mega from '@/assets/megaphone.png';
import Money from '@/assets/money.png';
import Rating from '@/assets/rating.png';
import Rubik from '@/assets/rubik.png';
import User from '@/assets/user.png';
import Album from '@/assets/album.png';
import Image from "next/image";
import Link from "next/link";

export default function Aside() {
    return(
        <aside className="min-w-[430px] max-w-[430px] px-10 min-h-screen bg-[#7F1DFF] rounded-tl-[180px] relative">
            <div className="absolute top-[200px] left-[10%]">
                <div className="w-full flex flex-col justify-center items-center gap-14 relative">
                    <div className="flex justify-center items-center absolute top-[-130px]">
                        <div className="w-[160px] h-[160px] bg-slate-400 rounded-full flex justify-center items-center border-[5px] border-white">
                            Imagem
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#7A6EFF] shadow-2xl p-4 flex flex-col justify-center items-center gap-3 rounded-lg">
                        <p className="font-bold text-white mt-7">Olá Lorem ipsum</p>
                        <div className="flex items-center gap-5">
                            <Link href={'/perfil/newgame'}>
                                <Button variant={'verde'} className="rounded-full">+ Novo Jogo</Button>
                            </Link>
                            <div className="rounded-full bg-[#FFFFFF7D] shadow-2xl p-2 flex items-center justify-center gap-1">
                                <Coin />
                                <p>000</p>
                            </div>
                        </div>
                    </div>
                    <nav className="w-full">
                        <ul className="flex flex-col gap-4 text-white text-2xl font-semibold">
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Rubik} alt="gear-ico" />
                                Meus Projetos
                            </li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={User} alt="gear-ico" />
                                Editar
                             Perfil</li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Rating} alt="gear-ico" />
                                Usuários
                            </li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Album} alt="gear-ico" />
                                Galeria de Jogos
                            </li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Mega} alt="gear-ico" />
                                Marketing
                            </li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Money} alt="gear-ico" />
                                Pagamentos
                            </li>
                            <hr className="border-1"/>
                            <li className="flex gap-3">
                                <Image src={Gear} alt="gear-ico" />
                                Configurações
                            </li>
                            <hr className="border-1"/>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}