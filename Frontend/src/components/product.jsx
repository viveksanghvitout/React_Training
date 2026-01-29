import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  const [allProducts, setAllProducts] = useState([]); // original data
  const [products, setProducts] = useState([]);       // filtered/display data
  const [search, setSearch] = useState("");

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  useEffect(() => {
    if (data?.products) {
      setAllProducts(data.products);
      setProducts(data.products);
    }
  }, [data]);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(pro =>
      pro.title.toLowerCase().startsWith(value.toLowerCase())
    );


    setProducts(filtered);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <h3>Product List</h3>

      <input  type="text"  placeholder="Search"  value={search}  onChange={(e) => handleSearch(e.target.value)}  />

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
            <strong>{product.title}</strong> — ₹{product.price}
            </Link>
         </li>
        ))}
      </ul>

      <br/>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default Product;
