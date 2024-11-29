"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useGameContext } from "@/context/NewGameContext";
import Archive from "@/utils/Archive";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const { updateGameData } = useGameContext();
    const [formState, setFormState] = useState({
        gameName: "",
        useLeads: false,
        leads: [] as string[],
        useBrindes: false,
        brindes: [] as string[]
    });

    const [newBrinde, setNewBrinde] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxToggle = (name: "useLeads" | "useBrindes") => {
        setFormState((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleLeadsSelection = (field: string, checked: boolean) => {
        setFormState((prev) => {
            const leads = checked
                ? [...prev.leads, field]
                : prev.leads.filter((item) => item !== field);
            return { ...prev, leads };
        });
    };

    const addBrinde = () => {
        if (newBrinde.trim()) {
            setFormState((prev) => ({
                ...prev,
                brindes: [...prev.brindes, newBrinde.trim()],
            }));
            setNewBrinde(""); // Limpa o campo de novo brinde
        }
    };

    const removeBrinde = (brinde: string) => {
        setFormState((prev) => ({
            ...prev,
            brindes: prev.brindes.filter((item) => item !== brinde),
        }));
    };

    const handleSaveConfig = () => {
        console.log("Dados salvos no contexto:", formState);
        updateGameData(formState);
    };

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full min-h-[30vh] mb-16 p-10 shadow-2xl flex flex-col justify-around items-center">
                <h2 className="font-bold text-5xl">Personalize seu Game!</h2>
                <div className="w-full flex flex-col items-center">
                    <ul className="w-[70%] flex justify-between relative">
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">1</p>
                            <p className="absolute top-[110px]">TEMPLATE</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#84EF00] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">2</p>
                            <p className="absolute top-[110px]">ESPECIFICAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">3</p>
                            <p className="absolute top-[110px]">CONFIGURAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">4</p>
                            <p className="absolute top-[110px]">DESIGN</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">5</p>
                            <p className="absolute top-[110px]">SONS</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">6</p>
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
                                <Input
                                    type="text"
                                    name="gameName"
                                    value={formState.gameName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    Vai captar leads*? (*Potencial cliente em prospecção)
                                    <div className="flex gap-5">
                                        <div className="flex gap-1 items-center">
                                            <Checkbox
                                                id="useLeads"
                                                checked={formState.useLeads}
                                                onCheckedChange={() => handleCheckboxToggle("useLeads")}
                                            />
                                            <label
                                                htmlFor="useLeads"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Sim
                                            </label>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Checkbox
                                                id="noLeads"
                                                checked={!formState.useLeads}
                                                onCheckedChange={() => handleCheckboxToggle("useLeads")}
                                            />
                                            <label
                                                htmlFor="noLeads"
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
                                            {["Nome", "Sobrenome", "CPF", "RG", "Data de Nascimento", "Profissão"].map((field) => (
                                                <div key={field} className="flex items-center gap-1">
                                                    <Checkbox
                                                        id={field}
                                                        checked={formState.leads.includes(field)}
                                                        onCheckedChange={(checked) =>
                                                            handleLeadsSelection(field, checked as boolean)
                                                        }
                                                    />
                                                    <label htmlFor={field} className="text-sm font-medium leading-none">
                                                        {field}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            {["País", "Estado", "Cidade", "Endereço", "E-mail", "Telefone"].map((field) => (
                                                <div key={field} className="flex items-center gap-1">
                                                    <Checkbox
                                                        id={field}
                                                        checked={formState.leads.includes(field)}
                                                        onCheckedChange={(checked) =>
                                                            handleLeadsSelection(field, checked as boolean)
                                                        }
                                                    />
                                                    <label htmlFor={field} className="text-sm font-medium leading-none">
                                                        {field}
                                                    </label>
                                                </div>
                                            ))}
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
                                        <Checkbox
                                            id="useBrindes"
                                            checked={formState.useBrindes}
                                            onCheckedChange={() => handleCheckboxToggle("useBrindes")}
                                        />
                                        <label
                                            htmlFor="useBrindes"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Sim
                                        </label>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Checkbox
                                            id="noBrindes"
                                            checked={!formState.useBrindes}
                                            onCheckedChange={() => handleCheckboxToggle("useBrindes")}
                                        />
                                        <label
                                            htmlFor="noBrindes"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Digite um brinde e pressione Enter"
                                            value={newBrinde}
                                            onChange={(e) => setNewBrinde(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    addBrinde();
                                                }
                                            }}
                                        />
                                        <Button variant="ghost" type="button" onClick={addBrinde}>
                                            Adicionar
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {formState.brindes.map((brinde, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-1 bg-gray-200 p-2 rounded"
                                            >
                                                <span>{brinde}</span>
                                                <button
                                                    onClick={() => removeBrinde(brinde)}
                                                    className="text-red-500"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="w-full p-10 flex flex-col gap-10">
                <div>
                    <h2>4. Upload de Imagens</h2>
                    <p className="text-sm opacity-40">
                        Faça o upload das imagens que serão utilizadas nas cartas do jogo da
                        memória (Máximo 6 imagens)
                    </p>
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
                    <Button variant={"roxo"} className="rounded-full" size={"lg"}>
                        VOLTAR
                    </Button>
                </Link>
                <Link href="/perfil/newgame/design">
                    <Button
                        onClick={handleSaveConfig}
                        variant={"verde"}
                        className="rounded-full"
                        size={"lg"}
                    >
                        AVANÇAR
                    </Button>
                </Link>
            </div>
        </div>
    );
}