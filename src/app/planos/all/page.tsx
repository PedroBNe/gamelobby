/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Link from "next/link";

const planos = [
    {
        titulo: "Plano 1",
        descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
    },
    {
        titulo: "Plano 2",
        descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
    },
    {
        titulo: "Plano 3",
        descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
    },
    {
        titulo: "Plano 4",
        descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
    },
];

const PlanosCard = ({ titulo, descricao }: any) => {
    return (
        <div className="w-[250px] flex flex-col gap-2 justify-center items-center">
            <div className="bg-[#D9D9D9] h-[35vh] flex flex-col gap-3 items-center p-5 rounded-lg">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <div>{descricao}</div>
            </div>
            <Link href={'/planos/pay'}>
                <Button variant="verde">Selecionar</Button>
            </Link>
        </div>
    );
}

export default function Planos() {
    return (
        <div className="w-[90%] h-full flex flex-col justify-around items-center p-10">   
            <div className="w-[80%] flex flex-col gap-10 items-center">
                <h2 className="text-3xl font-semibold">Planos Disponíveis</h2>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {planos.map((plano, index) => (
                    <PlanosCard key={index} titulo={plano.titulo} descricao={plano.descricao} />
                ))}
            </div>
        </div>
    );
}
