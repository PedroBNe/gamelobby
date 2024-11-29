-- CreateEnum
CREATE TYPE "Orientation" AS ENUM ('VERTICAL', 'HORIZONTAL');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('WEB', 'ANDROID', 'WINDOWS');

-- CreateEnum
CREATE TYPE "Connection" AS ENUM ('MULTIPLAYER', 'OFFLINE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "gameName" TEXT NOT NULL,
    "logo" TEXT,
    "icon" TEXT,
    "background" TEXT,
    "orientation" "Orientation",
    "platform" "Platform",
    "connection" "Connection",
    "useLeads" BOOLEAN NOT NULL DEFAULT false,
    "leads" TEXT[],
    "useBrindes" BOOLEAN NOT NULL,
    "brindes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemoryGame" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "backgroundColor" TEXT,
    "primaryColor" TEXT,
    "secondColor" TEXT,
    "fontColor" TEXT,
    "cardBack" TEXT,
    "cardsList" TEXT[],
    "titleColor" TEXT,
    "vitoriaColor" TEXT,
    "derrotaColor" TEXT,
    "vitoriaSound" TEXT,
    "derrotaSound" TEXT,

    CONSTRAINT "MemoryGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageItems" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "name" TEXT,
    "value" INTEGER,
    "score" INTEGER,

    CONSTRAINT "StorageItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PuzzleGame" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "pieces" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "theme" TEXT,

    CONSTRAINT "PuzzleGame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Game_userId_idx" ON "Game"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MemoryGame_gameId_key" ON "MemoryGame"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "PuzzleGame_gameId_key" ON "PuzzleGame"("gameId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemoryGame" ADD CONSTRAINT "MemoryGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageItems" ADD CONSTRAINT "StorageItems_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PuzzleGame" ADD CONSTRAINT "PuzzleGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
