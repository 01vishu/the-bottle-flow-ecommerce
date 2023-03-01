import "../style/components/Product.scss";
import { AiOutlinePlus } from "react-icons/ai";
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <span>${product.price}</span>
      <button>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Product;
