import React, { useContext } from "react";
import "../assets/css/Products.css";
import { ProductList } from "../ProductData";
import { PiCurrencyInr } from "react-icons/pi";
import { ProductContext } from "../productContext/ProductContext";
import { toast } from "react-toastify";

function Products() {
  const { productData, setProductData, setTotal } = useContext(ProductContext);

  // function to add the product to the cart
  const handleClick = (product) => {
    if (productData.length >= 0) {
      const isAdded = productData.find((cartProduct) => {
        return cartProduct.name === product.name;
      });
      if (isAdded) {
        toast.warn("Product Already Added", {
          position: "top-center",
        });
      } else {
        setProductData((prevData) => [...prevData, product]);
        toast.success("Product Added To Cart", {
          position: "top-center",
        });
        setTotal((prevData) => prevData + product.price);
      }
    }
  };
  return (
    <div className="products-container">
      <div className="products-page-banner col-12 d-flex justify-content-center align-items-center">
        <h1 className="products-page-banner-heading">Products</h1>
      </div>
      <div className="products-body row w-100 ">
        <div className="products-main col-md-12 col-sm-12">
          <div className="row products-rows">
            {ProductList.map((product) => {
              return (
                <div
                  className=" col-md-2 col-sm-4 col-xs-6 product-card mt-3"
                  key={product.id}
                >
                  <div className="product-img">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="divider"></div>
                  <div className="product-name my-2">
                    <h5>{product.name}</h5>
                  </div>
                  <div className="product-price my-2">
                    <PiCurrencyInr className="mb-1" size={20} />
                    {product.price}
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn"
                      onClick={() => handleClick(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
