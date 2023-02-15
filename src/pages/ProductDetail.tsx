import { Link, useParams } from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
  const productId = useParams().id;

  return (
    <div>
      <div>ProductDetail - {productId}</div>
      <p>
        <Link to=".." relative="path">
          Back to Products
        </Link>
      </p>
      <p>
        <Link to=".." relative="route">
          Back to Home Page
        </Link>
      </p>
    </div>
  );
};

export default ProductDetail;
