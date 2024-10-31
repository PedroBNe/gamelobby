'use client';

import Apple from "@/assets/apple";
import Face from "@/assets/face";
import Google from "@/assets/google";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { email, password });
            console.log(response.data);
            router.push('/perfil');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login falhou: Verifique suas credenciais.");
        }
    };

    return (
        <div className="w-[70%] h-auto flex flex-col items-center gap-8">
            <h2 className="text-4xl font-bold">Login</h2>
            <form className="w-[80%] flex flex-col gap-8" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <Input
                        placeholder="example@mail.com"
                        id="email"
                        className="bg-slate-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <Input
                        placeholder="Password"
                        id="password"
                        className="bg-slate-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox className="data-[state=checked]:bg-[#7A6EFF] data-[state=checked]:text-white" />
                        Salvar Login
                    </div>
                    <div className="text-[#7A6EFF] cursor-pointer hover:text-opacity-70 transition" onClick={() => router.push('/rec-account')}>Esqueci a senha</div>
                </div>
                <Button variant={'verde'} className="text-white h-[50px] shadow-2xl" size={"lg"}>ENTRAR</Button>
            </form>
            <div className="flex gap-2">
                Não tem uma conta?
                <div className="text-[#7A6EFF] cursor-pointer hover:text-opacity-70 transition" onClick={() => router.push('/register')}>Cadastre-se</div>
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
    );
}