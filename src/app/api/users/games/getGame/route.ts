// app/api/games/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const gameName = searchParams.get("gameName");

  // Verifica se ambos os parâmetros foram fornecidos
  if (!name || !gameName) {
    return NextResponse.json(
      { error: "Parâmetros 'name' e 'gameName' são obrigatórios" },
      { status: 400 }
    );
  }

  try {
    // Busca o jogo pelo nome do usuário (name) e o nome do jogo (gameName)
    const game = await prisma.game.findFirst({
      where: {
        gameName: gameName,
        user: {
          name: name, // Filtra pelo nome do usuário
        },
      },
    });

    if (!game) {
      return NextResponse.json(
        { error: "Jogo não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar jogo:", error);
    return NextResponse.json(
      { error: "Erro ao buscar o jogo" },
      { status: 500 }
    );
  }
}
