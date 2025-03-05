import prisma from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const rockbuster = await prisma.rockbuster.findRandom({
    include: {
      episode: true,
    }
  });

  return new NextResponse(JSON.stringify(rockbuster), { status: 200 });
}