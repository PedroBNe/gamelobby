// app/api/games/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  try {
    const games = await prisma.game.findMany();
    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar jogos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { gameName, logo, icon, background, useLeads, useBrindes, userId } =
    await req.json();

  try {
    const newGame = await prisma.game.create({
      data: {
        gameName,
        logo,
        icon,
        background,
        useLeads: useLeads || false,
        useBrindes: useBrindes || false, // Garantindo que useBrindes esteja presente
        user: { connect: { id: userId } },
      },
    });
    return NextResponse.json(newGame, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error("Erro ao criar o jogo:", error);
    return NextResponse.json(
      { error: "Erro ao criar o jogo" },
      { status: 500 }
    );
  }
}
