// app/api/games/[id]/memory/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../../../../lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const {
    backgroundColor,
    primaryColor,
    secondColor,
    fontColor,
    cardBack,
    cardsList,
  } = await req.json();

  try {
    const memoryGame = await prisma.memoryGame.upsert({
      where: { gameId: Number(params.id) },
      update: {
        backgroundColor,
        primaryColor,
        secondColor,
        fontColor,
        cardBack,
        cardsList,
      },
      create: {
        gameId: Number(params.id),
        backgroundColor,
        primaryColor,
        secondColor,
        fontColor,
        cardBack,
        cardsList,
      },
    });
    return NextResponse.json(memoryGame);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar ou atualizar o MemoryGame" },
      { status: 500 }
    );
  }
}
