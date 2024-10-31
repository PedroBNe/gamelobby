import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  // Verifica se o token está presente
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redireciona para a página de login
  }

  try {
    const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não está definida nas variáveis de ambiente");
    }

    // Verifica e decodifica o token usando jose
    await jwtVerify(token, jwtSecret);

    // Token válido, prosseguir para a rota original
    return NextResponse.next();
  } catch (error) {
    console.error("Token inválido ou expirado:", error);
    return NextResponse.redirect(new URL("/login", req.url)); // Redireciona para a página de login
  }
}

// Configuração para definir as rotas que devem usar o middleware
export const config = {
  matcher: ["/perfil", "/perfil/"], // Proteger a rota com e sem a barra final
};
