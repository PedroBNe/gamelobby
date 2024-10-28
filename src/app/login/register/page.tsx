'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    const Alert = (event: string) => {
        window.alert(event)
    }
    return(
        <form className="w-[60%] h-[70%] flex flex-col gap-5">
            <h2 className="w-full flex justify-center items-center text-3xl pb-8">Cadastro</h2>
            <div className="w-full flex gap-5">
                <div className="w-full">
                    <label htmlFor="name">Nome</label>
                    <Input id="name"/>
                </div>
                <div className="w-full">
                    <label htmlFor="lastnamme">Sobrenome</label>
                    <Input id="lastnamme"/>
                </div>
            </div>
            <div className="w-full flex gap-5">
                <div className="w-full">
                    <label htmlFor="cpf">CPF</label>
                    <Input id="cpf"/>
                </div>
                <div className="w-full">
                    <label htmlFor="phone">Telefone</label>
                    <Input id="phone"/>
                </div>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <Input id="email"/>
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <Input id="password"/>
            </div>
            <div className="flex gap-2 items-center">
                <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                Concordo com os <strong className="text-[#7A6EFF]">Termos de Uso.</strong>
            </div>
            <div className="w-full flex items-center justify-center">
                <Link className="w-full flex justify-center" href="/planos" onClick={() => Alert('Conta registrada com sucesso!')}>
                    <Button variant={'verde'} className="w-[60%] h-[5vh]">REGISTRE-SE</Button>
                </Link>
            </div>
        </form>
    )
}