/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Link from "next/link";

const planos = [
  {
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
  },
  {
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
  },
  {
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
  },
  {
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
  },
];

const PlanosCard = ({ plano }: any) => {
  return (
    <div className="w-[500px] flex flex-col gap-2 justify-center items-center">
      <div className="bg-[#D9D9D9] w-[300px] h-[35vh] flex flex-col gap-3 items-center p-5 rounded-lg">
        {plano}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[85vh] overflow-x-hidden">
      <div className="w-full h-full bg-white rounded-tl-[200px] rounded-bl-[80px] ml-8 flex flex-col">
        <div className="bg-[#D9D9D9] min-h-[30vh] rounded-tl-[200px]">
          {/* algo aqui */}
        </div>
        <div className="w-full h-full flex flex-col gap-5 items-center p-5">
          <h2 className="text-4xl font-semibold">Apresentação</h2>
          <div className="w-[80%] min-h-[40vh] flex gap-5 justify-between">
            <div className="w-[50%] flex justify-center items-center">
              texto
            </div>
            <div className="w-[50%] flex justify-center items-center bg-[#D9D9D9] rounded-xl">
              teste
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center p-5 py-10">
        <h2 className="text-4xl font-semibold text-white">Planos disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {planos.map((plano, index) => (
            <PlanosCard key={index} plano={plano.descricao} />
          ))}
        </div>
        <Link href={'/planos'}>
          <Button variant="verde">VER PLANOS</Button>
        </Link>
      </div>
      <div className="bg-white min-h-[40vh] mx-8 rounded-[80px] flex justify-center items-center">
        {/* mais aqui */}
      </div>
    </div>
  );
}
