export default async function Home() {

  const data = await fetch('http://localhost:3000/api/getRandomRockbuster');
  const rockbuster = await data.json();

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl">Rockbusters</p>
      <p>{rockbuster.test}</p>
    </div>
  );
  
}
