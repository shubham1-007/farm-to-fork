import React, { useContext, useState } from "react";
import { ProductContext } from "../productContext/ProductContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/Cart.css";
import { PiCurrencyInr } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";

function Cart() {
  // getting product details from produt Context
  const { productData, quantity, setQuantity, total, setTotal } =
    useContext(ProductContext);
  const [grandTotal, setGrandTotal] = useState(total);
  const navigate = useNavigate();

  //function to handle quantity increase
  const handleIncrease = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index] += 1;
    setQuantity(newQuantity);
    handleTotal(newQuantity);
  };

  // function to handle quantity decrease
  const handleDecrease = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 1) {
      newQuantity[index] -= 1;
      setQuantity(newQuantity);
      handleTotal(newQuantity);
    }
  };

  // function to handle total
  const handleTotal = (quantity) => {
    let newGrandTotal = 0;
    for (let i = 0; i < productData.length; i++) {
      newGrandTotal += productData[i].price * quantity[i];
    }

    setGrandTotal(newGrandTotal);
    setTotal(newGrandTotal);
  };

  return (
    <div className="cart-container">
      <div className="cart-wrapper p-3">
        {productData.length !== 0 && (
          <h3 className="cart-heading">Your Cart</h3>
        )}
        {productData.length <= 0 ? (
          <div className="empty-cart">
            <div className="row cart">
              <div className="col-md-6 col-sm-12 text-center ">
                <h3>No items in the cart</h3>
                <p>Click on the product to add it to the cart</p>
                <IoMdCart size={200} color="#508d4e" />
              </div>
            </div>
          </div>
        ) : (
          <div className="table-responsive w-100">
            <table className="table">
              <thead className="ml-2">
                <tr>
                  <td>
                    <h5>Product</h5>
                  </td>
                  <td width={150}>
                    <h5>Price</h5>
                  </td>
                  <td width={200}>
                    <h5>Quantity</h5>
                  </td>
                  <td width={150}>
                    <h5>Total</h5>
                  </td>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, i) => (
                  <tr key={product.id}>
                    <td className="product">
                      <div className="row p-4">
                        <div className="col-md-6 product-img">
                          <img
                            src={product.img}
                            alt={product.title}
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center mt-3">
                          <h6>{product.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="pt-5 ">
                      <div className="col-md-4 d-flex justify-content-center align-items-center mt-3"></div>
                      {product.price}
                    </td>
                    <td className="pt-5">
                      <div className="row mt-2">
                        <div className="col-md-2 col-sm-12 mb-3">
                          <button
                            className="btn btn-secondary"
                            style={{
                              height: "30",
                              width: "35px",
                              backgroundColor: "#80AF81",
                              outline: "none",
                              border: "none",
                              color: "black",
                            }}
                            onClick={() => handleDecrease(i)}
                          >
                            -
                          </button>
                        </div>
                        <div className="col-md-2 col-sm-12 mb-3 pt-1">
                          <span className="quantity mx-3">{quantity[i]}</span>
                        </div>
                        <div className="col-md-2 col-sm-12 mb-3">
                          <button
                            className="btn btn-primary"
                            style={{
                              height: "30",
                              width: "35px",
                              backgroundColor: "#ffc038",
                              outline: "none",
                              border: "none",
                              color: "black",
                            }}
                            onClick={() => handleIncrease(i)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="pt-5 ">
                      <div className="mt-2">{product.price * quantity[i]}</div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2" className="text">
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>
                      <PiCurrencyInr className="mb-1" size={20} />
                      {grandTotal}
                    </h5>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
