'use client'

import Apple from "@/assets/apple";
import Face from "@/assets/face";
import Google from "@/assets/google";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-[70%] min-h-[40em] flex flex-col items-center gap-8">
            <h2 className="text-4xl font-bold">Login</h2>
            <form className="w-[80%] flex flex-col gap-8">
                <div>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <Input
                        placeholder="example@mail.com"
                        id="email"
                        className="bg-slate-200"
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Senha
                    </label>
                    <Input
                        placeholder="Password"
                        id="password"
                        className="bg-slate-200"
                    />
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                        Salvar Login
                    </div>
                    <Link href="/login/rec-account" className="text-[#7A6EFF]">
                        Esqueci a senha
                    </Link>
                </div>
                <Button variant={'verde'} className="text-white h-[50px] shadow-2xl" size={"lg"}>ENTRAR</Button>
            </form>
            <div className="flex gap-2">
                Não tem uma conta?
                <Link href="/login/register" className="text-[#7A6EFF] hover:opacity-70 transition">
                    Cadastre-se
                </Link>
            </div>
            <div className="flex flex-col gap-4 items-center text-2xl font-semibold">
                ENTRAR COM
                <div className="h-fit flex gap-8 items-center justify-center">
                    <Face width={50} height={50} color={"#000000"} />
                    <Apple width={50} height={50} color={"#000000"} />
                    <Google width={50} height={50} color={"#000000"} />
                </div>
            </div>
        </div>
    )
}