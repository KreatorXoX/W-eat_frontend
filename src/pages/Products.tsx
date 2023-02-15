import { Link } from "react-router-dom";

type Props = {};

const Products = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>Products</div>
        <ul>
          <li>
            <Link to="/products/product-1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/product-2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/product-3">Product 3</Link>
          </li>
          <li>
            <Link to="/products/product-4">Product 4</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Products;
