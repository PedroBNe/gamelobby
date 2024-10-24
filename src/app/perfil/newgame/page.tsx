import { Button } from "@/components/ui/button"
import Link from "next/link"

/* eslint-disable @typescript-eslint/no-explicit-any */
const templates = [
    {
        "nome": "JOGO DA MEMÓRIA",
        "disabled": false,
        "link": "/perfil/newgame/edit"
    },
    {
        "nome": "LOREM IPSUM",
        "disabled": true,
        "link": "/perfil/newgame/edit"
    },
    {
        "nome": "LOREM IPSUM",
        "disabled": true,
        "link": "/perfil/newgame/edit"
    },
    {
        "nome": "LOREM IPSUM",
        "disabled": true,
        "link": "/perfil/newgame/edit"
    },
    {
        "nome": "LOREM IPSUM",
        "disabled": true,
        "link": "/perfil/newgame"
    },
] // mock Templates

const Cards = ( { card }: any ) => {
    return(
        <div className="min-h-[35vh] rounded-xl p-5 gap-5 flex flex-col items-center bg-white shadow-2xl">
            <div className="w-full h-[20vh] bg-slate-400 flex justify-center items-center">
                imagem
            </div>
            {card.nome}
            <Button variant={'roxo'} className="w-[9vw]">VER EXEMPLO</Button>
            {
                card.disabled 
                ?
                <Button variant={'disabled'} className="w-[9vw]" disabled>EM BREVE</Button>
                :
                <Link href={`${card.link}`}>
                    <Button variant={'verde'} className="w-[9vw]">USAR TEMPLATE</Button>
                </Link>
            }
        </div>
    )
} // Esqueleto de cards

export default function NewGame() {
    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[15vh] flex items-center justify-center">
                <h2 className="font-bold text-5xl">Selecione o Template</h2>
            </div>
            <div className="w-[90%] h-full m-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {templates.map((temp, index) => (
                    <Cards key={index} card={temp} />
                ))}
            </div>
        </div>
    )
}