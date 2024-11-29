/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import Delete from '@/assets/delete';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useGameContext } from '@/context/NewGameContext';

export default function FormPage() {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [leadsArray, setLeadsArray] = useState<string[]>([]);
    const [brindesArray, setBrindesArray] = useState<string[]>([]);
    const [savedData, setSavedData] = useState<Record<string, any>>({});
    const [collectLeads, setCollectLeads] = useState(false);
    const [giveBrindes, setGiveBrindes] = useState(false);

    const { updateGameData } = useGameContext();
    const [formState, setFormState] = useState({
        orientation: "VERTICAL",
        platform: "WEB",
        connection: "Online",
        useBrindes: false,
        brindes: [] as string[]
    });

    const handleDeleteBrindesItem = (brinde: string) => {
        setBrindesArray((prev) => prev.filter((item) => item !== brinde));
    };

    const handleAddBrinde = (brinde: string) => {
        if (brinde.trim()) {
            setBrindesArray((prev) => !prev.includes(brinde) ? [...prev, brinde] : prev);
        }
    };

    const handleDeleteLeadsItem = (leads: string) => {
        setLeadsArray((prev) => prev.filter((item) => item !== leads));
    };

    const handleSetCollectLeads = (value: string) => {
        const isCollecting = value === 'Sim';
        setCollectLeads(isCollecting);

        if (!isCollecting) {
            setLeadsArray([]);
        }
    };

    const handleSetGiveBrindes = (value: string) => {
        const isGiving = value === 'Sim';
        setGiveBrindes(isGiving);

        if (!isGiving) {
            setBrindesArray([]);
        }
    };

    const handleSelectChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleLeadsChange = (value: string) => {
        setLeadsArray((prev) => {
            if (!prev.includes(value)) {
                return [...prev, value];
            }
            return prev;
        });
    };

    useEffect(() => {
        const updatedData = {
            ...formData,
            coletaLeads: collectLeads ? leadsArray : [],
            brindes: giveBrindes ? brindesArray : [],
        };
        setSavedData(updatedData);
    }, [formData, leadsArray, brindesArray, collectLeads, giveBrindes]);

    const selectOptions = (
        items: string[],
        placeholder: string,
        key: string,
        onChange: (value: string) => void,
        disable: boolean
    ) => (
        <Select onValueChange={(value) => onChange(value)}>
            <SelectTrigger className="w-[25vw] rounded-full shadow-md" disabled={disable}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item, index) => (
                        <SelectItem key={index} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );

    return (
        <div className="w-full">
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
                        <li className="w-[100px] h-[100px] bg-[#7F1DFF] rounded-full flex items-center justify-center relative z-10">
                            <p className="text-white font-bold text-5xl">
                                2
                            </p>
                            <p className="absolute top-[110px]">ESPECIFICAÇÕES</p>
                        </li>
                        <li className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex items-center justify-center relative z-10">
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
            <form className="w-full">
                <ul className="flex flex-col gap-10 m-10 list-decimal text-sm">
                    <li>
                        <div className="flex flex-col gap-2">
                            Orientação do Game
                            {selectOptions(['Horizontal', 'Vertical'], "Selecione um item", 'orientacao', (value) =>
                                handleSelectChange('orientacao', value), false
                            )}
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Tipo de Software
                            {selectOptions(['Android', 'Apple', 'Windows', 'Web'], "Selecione um tipo de software", 'software', (value) =>
                                handleSelectChange('software', value), false
                            )}
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Tipo de Conexão
                            {selectOptions(['Multiplayer DataBase', 'Multiplayer Local', 'Multiplayer Mirror', 'Offline', 'Online'], "Selecione um item", 'conexao', (value) =>
                                handleSelectChange('conexao', value), false
                            )}
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Vai coletar Leads?
                            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
                                {selectOptions(['Sim', 'Não'], "Selecione um item", 'coletaLeads', handleSetCollectLeads, false)}
                                <div className='flex flex-col gap-2'>
                                    {selectOptions(['Nome', 'Sobrenome', 'CPF', 'E-mail'], "Selecione os Campos de Coleta desejados:", 'leadCampos', handleLeadsChange, !collectLeads)}
                                    <ul className="flex gap-2">
                                        {leadsArray.map((leads, index) => (
                                            <li key={index} className='bg-[#F3F4F6] p-2 rounded-full flex items-center gap-2'>
                                                {leads}
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleDeleteLeadsItem(leads);
                                                    }}
                                                    className='flex items-center justify-center rounded-full hover:bg-opacity-90 transition'>
                                                    <Delete />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            Vai distribuir brindes?
                            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
                                {selectOptions(['Sim', 'Não'], "Selecione um item", 'giveBrindes', handleSetGiveBrindes, false)}
                                {
                                    <div className="flex flex-col gap-2">
                                        <Input
                                            disabled={!giveBrindes}
                                            placeholder="Digite um brinde e aperte Enter"
                                            type="text"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleAddBrinde(e.currentTarget.value);
                                                    e.currentTarget.value = '';
                                                }
                                            }}
                                            className="max-w-[25vw] rounded-full shadow-md"
                                        />
                                        <ul className="flex gap-2">
                                            {brindesArray.map((brinde, index) => (
                                                <li key={index} className='bg-[#F3F4F6] p-2 rounded-full flex items-center gap-2'>
                                                    {brinde}
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleDeleteBrindesItem(brinde);
                                                        }}
                                                        className='flex items-center justify-center rounded-full hover:bg-opacity-90 transition'>
                                                        <Delete />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
            <div className="p-10">
                <h2 className="text-2xl font-bold mb-4">Dados Salvos:</h2>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {JSON.stringify(savedData, null, 2)}
                </pre>
            </div>
            <div className="w-full p-16 flex justify-between">
                <Link href="/perfil/newgame">
                    <Button variant={'roxo'} className="rounded-full" size={"lg"}>VOLTAR</Button>
                </Link>
                <Link href="/perfil/newgame/config">
                    <Button variant={'verde'} className="rounded-full" size={"lg"}>AVANÇAR</Button>
                </Link>
            </div>
        </div>
    );
}
