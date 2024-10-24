'use client'

import Face from "@/assets/face";
import Insta from "@/assets/insta";
import Linkedin from "@/assets/linkedin";
import Whats from "@/assets/whats";

export default function Footer() {
    return(
        <footer className="w-full py-3 px-16 text-white flex justify-between items-center gap-10">
            <div className="font-bold text-xl">
                <p>Game</p>
                <p>Lobby</p>
            </div>
            <nav className="w-full">
                <ul className="w-full flex justify-around text-sm">
                    <li>TERMOS E CONDIÇÕES</li>
                    <li>POLÍTICA DE COOKIES</li>
                    <li>POLÍTICA DE PRIVACIDADE</li>
                    <li>SUPORTE</li>
                </ul>
            </nav>
            <div className="flex gap-4">
                <Insta width={30} height={30} color={"#ffffff"} />
                <Face width={30} height={30} color={"#ffffff"} />
                <Whats width={30} height={30} color={"#ffffff"} />
                <Linkedin width={30} height={30} color={"#ffffff"} />
            </div>
        </footer>
    )
}