// app/api/games/[id]/puzzle/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../../../../lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { pieces, difficulty, theme } = await req.json();

  try {
    const puzzleGame = await prisma.puzzleGame.upsert({
      where: { gameId: Number(params.id) },
      update: { pieces, difficulty, theme },
      create: {
        gameId: Number(params.id),
        pieces,
        difficulty,
        theme,
      },
    });
    return NextResponse.json(puzzleGame);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar ou atualizar o PuzzleGame" },
      { status: 500 }
    );
  }
}
