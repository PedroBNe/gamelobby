'use client';

import Apple from "@/assets/apple";
import Face from "@/assets/face";
import Google from "@/assets/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('/api/users/register', { email, password });
      console.log(response.data);
      router.push('/login');
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error('Registration failed:', (error as any).response?.data || (error as any).message);
    }

  };

  return (
    <div className="w-[70%] h-auto flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold">Register</h2>
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
        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <Input
            placeholder="Confirm Password"
            id="confirmPassword"
            className="bg-slate-200"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button variant={'verde'} className="text-white h-[50px] shadow-2xl" size={"lg"}>REGISTRAR</Button>
      </form>
      <div className="flex gap-2">
        Já tem uma conta?
        <div className="text-[#7A6EFF]" onClick={() => router.push('/login')}>Entrar</div>
      </div>
      <div className="flex flex-col gap-4 items-center text-2xl font-semibold">
        REGISTRAR COM
        <div className="h-fit flex gap-8 items-center justify-center">
          <Face width={50} height={50} color={"#000000"} />
          <Apple width={50} height={50} color={"#000000"} />
          <Google width={50} height={50} color={"#000000"} />
        </div>
      </div>
    </div>
  );
}