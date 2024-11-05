'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";
import IconDirection from "@/assets/icon";

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
        {plano.descricao}
      </div>
    </div>
  );
}

const teste = [
  {
    teste: "testando",
    imagem: "Imagem tal"
  },
  {
    teste: "testando",
    imagem: "Imagem tal"
  },
  {
    teste: "testando",
    imagem: "Imagem tal"
  },
]

const CardExpandLeft = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`w-fit h-[400px] flex justify-between items-center gap-[100px] bg-[#FFFFFF] rounded-r-[80px] p-5`}>
      <p className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-w-[2000px]' : 'max-w-0'}`}>
        Esse nao apareceasddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </p>
      
      <div className="flex justify-center items-center gap-[160px]">
        <p>esse aparece</p>
        <button onClick={() => setExpanded(!expanded)} className={`${expanded ? 'rotate-[180deg]' : 'rotate-0'}`}>
          <IconDirection width={70} fill="#84EF00" />
        </button>
      </div>
    </div>
  )
}

const CardExpandRight = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`w-fit h-[400px] flex justify-between items-center gap-[100px] bg-[#FFFFFF] rounded-l-[80px] p-5`}>
      <div className="flex justify-center items-center gap-[160px]">
        <button onClick={() => setExpanded(!expanded)} className={`${expanded ? 'rotate-0' : 'rotate-[180deg]'}`}>
          <IconDirection width={70} fill="#84EF00" />
        </button>
        <p>esse aparece</p>
      </div>

      <p className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-w-[2000px]' : 'max-w-0'}`}>
        Esse nao apareceasddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </p>
    </div>
  )
}

const CardTeste = ({ teste }: any) => {
  return(
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card className="border-transparent shadow-none">
          <CardContent className="flex aspect-square items-end justify-center p-6">
            <span className="font-semibold bg-[#D9D9D9] rounded-lg h-[250px] w-[400px] flex items-center justify-center relative">
              <div className="bg-[#D9D9D9] border-[4px] border-white w-[170px] h-[170px] rounded-full flex justify-center items-center absolute top-[-38%]">
                Imagem
              </div>
              {teste.teste}
            </span>
          </CardContent>
        </Card>
      </div>         
    </CarouselItem>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[85vh] overflow-hidden">
      <div className="w-full h-full bg-white rounded-tl-[200px] rounded-bl-[80px] ml-8 flex flex-col">
        <div className="bg-[#D9D9D9] min-h-[30vh] rounded-tl-[200px]">
          {/* algo aqui */}
        </div>
        <div className="w-full h-full flex flex-col gap-5 items-center p-5">
          <h2 className="text-5xl Jaro">Apresentação</h2>
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
      <div className="w-full flex flex-col gap-10 justify-center items-center py-14">
        <h2 className="text-6xl font-semibold text-white Jaro">Planos disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {planos.map((plano, index) => (
            <PlanosCard key={index} plano={plano} />
          ))}
        </div>
        <Link href={'/planos'}>
          <Button variant="verde" className="w-[12vw] h-[5vh]">VER PLANOS</Button>
        </Link>
      </div>
      <div className="bg-white min-h-[40vh] mx-8 rounded-[80px] flex justify-center items-center">
        <Carousel className="min-h-[30vh] min-w-[70vw]">
          <CarouselContent>
            {teste.map((info, index) => (
              <CardTeste key={index} teste={info} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full gap-10 flex flex-col items-center py-14">
        <h2 className="text-6xl Jaro">Cases de Sucesso</h2>
        <div className="w-full h-auto relative">
          <CardExpandLeft />
        </div>
        <div className="w-full h-auto relative flex justify-end">
          <CardExpandRight />
        </div>
      </div>
      <div className="bg-white min-h-[70vh] mx-8 p-10 rounded-[80px] flex flex-col justify-between items-center">
        <div className="w-full flex flex-col gap-[100px] items-center">
          <h2 className="Jaro text-6xl">Faça parte do futuro dos games!</h2>
          <ul className="w-[70%] flex justify-between relative">
            <li className="w-[100px] h-[100px] bg-[#EF0000] rounded-full flex items-center justify-center relative z-10">
              <p className="text-white font-bold text-5xl">
                1
              </p>
              <p className="absolute top-[110px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </li>
            <li className="w-[100px] h-[100px] bg-[#EF6400] rounded-full flex items-center justify-center relative z-10">
              <p className="text-white font-bold text-5xl">
                2
              </p>
              <p className="absolute top-[110px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </li>
            <li className="w-[100px] h-[100px] bg-[#EBEF00] rounded-full flex items-center justify-center relative z-10">
              <p className="text-white font-bold text-5xl">
                3
              </p>
              <p className="absolute top-[110px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </li>
            <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
              <p className="text-white font-bold text-5xl">
                4
              </p>
              <p className="absolute top-[110px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </li>
            <hr className="w-full h-[3px] bg-black absolute top-[50%]" />
          </ul>
        </div>
        <Link href={''}>
          <Button variant={'verde'} className="w-[200px] h-[50px]">
            REGISTRE-SE
          </Button>
        </Link>
      </div>
    </div>
  );
}


