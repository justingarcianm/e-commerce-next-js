export default function Home({ data }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home Page</h1>

      <div className="container">
        {data &&
          data.map((product) => {
            return <p key={product.id}>{product.name}</p>;
          })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  return { props: { data } };
}
