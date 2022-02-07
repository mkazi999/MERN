import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>The Products page</h2>
      <ul>
          <li><Link to ='/products/p1'>A book </Link></li>
          <li><Link to ='/products/p2'>A car</Link></li>
          <li><Link to ='/products/p3'>A coffee</Link></li>
      </ul>
    </section>
  );
};

export default Products;
