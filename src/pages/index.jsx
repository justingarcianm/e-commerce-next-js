
export default function Home({ data }) {

  return (
<>

<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div className="container">
      {data && data.map( designer => {
        return <p key={designer.id}>{designer.name}</p>
      } )}
    </div>

</>
  )

}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/designers`)
  const data = await res.json()

  return { props: { data } }
}