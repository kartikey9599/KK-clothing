import { useContext } from "react";
import { ProductsContext } from "../../CONTEXTS/Product.context";
import ProductCard from "../../components/product-card/Product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
