export default async function Home() {

  const data = await fetch('http://localhost:3000/api/getRandomRockbuster');
  const rockbuster = await data.json();

  return (
    <>
      <p className="text-xl">Rockbusters</p>
      <br />
      <p>{rockbuster.episode.winner}</p>
    </>
  );
  
}
