-- CreateEnum
CREATE TYPE "Format" AS ENUM ('XFM', 'PODCAST');

-- CreateEnum
CREATE TYPE "RickyApproval" AS ENUM ('TRUE', 'FALSE', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "format" "Format" NOT NULL,
    "series" INTEGER NOT NULL,
    "episode" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "winner" TEXT,
    "prize" TEXT,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rockbuster" (
    "id" SERIAL NOT NULL,
    "clue" TEXT NOT NULL,
    "initials" TEXT[],
    "answer" TEXT NOT NULL,
    "karl_comment" TEXT,
    "ricky_approval" "RickyApproval",

    CONSTRAINT "Rockbuster_pkey" PRIMARY KEY ("id")
);
