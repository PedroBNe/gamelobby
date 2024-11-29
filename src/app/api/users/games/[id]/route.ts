// app/api/games/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const game = await prisma.game.findUnique({
      where: { id: Number(params.id) },
    });
    if (!game)
      return NextResponse.json(
        { error: "Jogo não encontrado" },
        { status: 404 }
      );
    return NextResponse.json(game);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar o jogo" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { gameName, logo, icon, background, useLeads } = await req.json();

  try {
    const updatedGame = await prisma.game.update({
      where: { id: Number(params.id) },
      data: { gameName, logo, icon, background, useLeads },
    });
    return NextResponse.json(updatedGame);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar o jogo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.game.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar o jogo" },
      { status: 500 }
    );
  }
}
