import AnswerBox from './components/AnswerBox';

export const dynamic = 'force-dynamic';

export default async function Home() {

  const data = await fetch('localhost:3000/api/getRandomRockbuster');
  const rockbuster = await data.json();

  return (
    <>
      <p className="text-xl">Rockbusters</p>
      <br />
      <AnswerBox rockbuster={rockbuster} />
    </>
  );
  
}
