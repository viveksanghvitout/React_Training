import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id} = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>

      <br/>
      <br/>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ProductDetail;
