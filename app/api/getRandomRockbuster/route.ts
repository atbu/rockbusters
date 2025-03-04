import prisma from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const rockbuster = await prisma.rockbuster.findFirst();
  const rockbusterClue = rockbuster?.clue;
  const episodeId = rockbuster?.episodeId;
  const episode = await prisma.episode.findUnique({
    where: {
      id: episodeId,
    }
  });
  const episodeWinner = episode?.winner;

  return new NextResponse(JSON.stringify({clue: rockbusterClue, winner: episodeWinner}), { status: 200 });
}