
export default async function Home() {

  const resposta = await fetch("https://back-end-ifms-snowy.vercel.app/campi" ,{
next: {
  revalidate: 1
 }
  });

const campi = await resposta.JSON;
  return (
    <main>
      <h1>Home</h1>


      {
        //campi.map((campus) => 
       // <div> {campus.nome_campus}</div>
       // )
        }
    </main>
  )
}
