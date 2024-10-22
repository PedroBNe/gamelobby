import { Input } from "@/components/ui/input";

export default function Page() {
    return(
        <div className="w-full bg-[#FFFFFF]">
            <div className="w-full shadow-2xl p-14 bg-white">
                <h2 className="font-bold text-5xl">Olá Lorem Ipsum</h2>
                <p>Bem vindo(a) ao seu painel Game Lobby</p>
            </div>
            <div className="m-8">
                <h3 className="font-semibold">Upload de imagens</h3>
                <p className="text-sm">Faça o upload das imagens que serão utilizadas nas cartas do jogo da memória (Máximo 6 imagens)</p>
                <div className="flex flex-col gap-3 mt-5">
                    <Input type="file" className="w-fit" />
                    <Input type="file" className="w-fit" />
                    <Input type="file" className="w-fit" />
                    <Input type="file" className="w-fit" />
                    <Input type="file" className="w-fit" />
                    <Input type="file" className="w-fit" />
                </div>
            </div>
        </div>
    )
}