import apiCall from "../utils/apiCall";

export default function Home({ designer, discounts, latest }) {
  console.log(designer, discounts, latest);

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold">Discounted Products</h2>
        <div>
          {discounts &&
            discounts.map((product) => {
              return (
                <div key={product.id}>
                  <h3>{product.name}</h3>
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Featured Designer</h2>
        <div>
          {designer &&
            designer.Product.map((product) => {
              return <div key={product.id}>{product.name}</div>;
            })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Latest Arrivals</h2>
        <div>
          {latest &&
            latest.map((product) => {
              return <div key={product.id}>{product.name}</div>;
            })}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  let designer = await apiCall("/home/designer");
  let discounts = await apiCall("/home/discounts");
  let latest = await apiCall("/home/latest");

  return { props: { designer, discounts, latest } };
}
