'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Search from "@/assets/search"

export default function Header() {
    return(
        <header className="w-full h-[6vh] px-5 flex justify-end items-center relative">
            <div className={`flex flex-col font-bold text-4xl absolute top-3 left-3 Jaro`}>
                <p>Game</p>
                <p>Lobby</p>
            </div>
            <nav className="w-[30%] flex justify-center items-center gap-1 absolute right-[35%]">
                <Input placeholder="O que está procurando?" type="text" className="rounded-full" />
                <Search width={50} height={30} stroke="#84EF00" />
            </nav>
            <div className="flex gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-transparent px-2 text-white text-md font-semibold hover:text-opacity-90">Explorar</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant={'nada'}>
                    Login
                </Button>
                <Button variant={'verde'}>Registre-se</Button>
            </div>
        </header>
    )
}