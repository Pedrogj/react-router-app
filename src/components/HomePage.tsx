import { Link } from "react-router";

const products = [
  { id: 1, name: "Monitor 27" },
  { id: 2, name: "Teclado mecánico" },
];

export const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h2>Productos</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <Link to={`/products/${product.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </>
  );
};
