'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
    const [ mandou, setMandou ] = useState(false);

    if (mandou) return (
        <form className="w-[50%] h-[70%] flex flex-col gap-5">
            <h2 className="w-full flex justify-center items-center text-3xl pb-8">Redefina sua senha</h2>
            <div>
                Solicitação recebida! Verifique seu e-mail e siga as instruções para redefinir sua senha!
            </div>
        </form>
    )

    if (!mandou) return (
        <form className="w-[50%] h-[70%] flex flex-col gap-5">
            <h2 className="w-full flex justify-center items-center text-3xl pb-8">Redefina sua senha</h2>
            <div>
                <label htmlFor="eoc">E-mail ou CPF:</label>
                <Input type="text" id="eoc" />
            </div>
            <Button variant={'verde'} onClick={() => setMandou(true)}>ENVIAR E-MAIL</Button>
        </form>
    )
}