import bcrypt from "bcryptjs";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    console.log("Register request received:", { email, password });

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Retorno da resposta com status 201
    return new Response(
      JSON.stringify({ message: `User: ${user.id} registered successfully` }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    // Retorno de erro com status 400
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 400,
    });
  }
}
