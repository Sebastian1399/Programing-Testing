import "../css/navbar.css"
import { popularProducts } from "../data";
import Product from "../components/Product";


const Products = () => {
  return (
    <div className="containerp">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
