export default async function Home() {

  const data = await fetch('http://localhost:3000/api/getRandomRockbuster');
  const rockbuster = await data.json();

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl">Rockbusters</p>
      <br />
      <p>{rockbuster.clue}</p>
      <br />
      <p>{rockbuster.winner}</p>
    </div>
  );
  
}
