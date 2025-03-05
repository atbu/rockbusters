import prisma from 'lib/prisma'

import AnswerBox from './components/AnswerBox';
import { RockbusterWithEpisode } from '@/types/types';

export const dynamic = 'force-dynamic';

export default async function Home() {

  const data = await prisma.rockbuster.findRandom({
    include: {
      episode: true,
    }
  });

  return (
    <>
      <p className="text-xl">Rockbusters</p>
      <br />
      <AnswerBox rockbuster={data} />
    </>
  );
  
}
