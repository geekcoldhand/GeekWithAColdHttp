import React from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../components/Cart/AddToCart";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProductsContext();

  const temp = products.filter((product) => product.id === id);

  return (
    <div>
      {temp.map((products) => {
        const { name, price, description, stock, image } = products;
        return (
          <div className="product-center" key={products.id}>
            <img className="prod-photo" src={image} alt={name} />
            <section className="content-prod">
              <h2>{name}</h2>
              {{ stock } && <AddToCart product={products} />}
              <p className="description"> {description}</p>
            
        
              <h5 className="price-prod">${price}</h5>
              <h5 className="price-prod">Size Chart</h5>
              <p className="info-prod">
                <span>Available : </span>
                In stock
              </p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
