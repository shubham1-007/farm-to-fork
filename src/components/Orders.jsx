import React, { useEffect, useState } from "react";
import "../assets/css/Orders.css";
import axios from "axios";
import { IoMdCart } from "react-icons/io";
import { PiCurrencyInr } from "react-icons/pi";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import product5 from "../assets/images/product-5.png";
import product6 from "../assets/images/product-6.png";
import product7 from "../assets/images/product-7.png";
import product8 from "../assets/images/product-8.png";
import product9 from "../assets/images/product-9.png";
import product10 from "../assets/images/product-10.png";

function Orders() {
  const [orders, setOrders] = useState([]);
  const url = "http://localhost:3004/orders";
  const userName = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    axios.get(`${url}?email=${userName.email}`).then((res) => {
      setOrders(res.data);
    });
    // eslint-disable-next-line
  }, []);

  // function to get image of product
  const getProductImage = (productName) => {
    switch (productName) {
      case "Apple":
        return product1;
      case "Potatoes":
        return product2;
      case "Carrot":
        return product3;
      case "Strawberries":
        return product4;
      case "Cucumber":
        return product5;
      case "Peppers":
        return product6;
      case "Melon":
        return product7;
      case "Broccoli":
        return product8;
      case "Banana":
        return product9;
      case "CauliFlower":
        return product10;
      default:
        return product1;
    }
  };

  return (
    <div className="orders-container">
      <div className="container">
        <div className="row heading-row">
          <h2>Your Orders</h2>
        </div>
        <div className="orders-main-container">
          {orders.length === 0 ? (
            <div className="empty-cart">
              <div className="row cart">
                <div className="col-md-6 col-sm-12 text-center ">
                  <h3>No orders found</h3>
                  <p>Click on the product to Order</p>
                  <IoMdCart size={200} color="#508d4e" />
                </div>
              </div>
            </div>
          ) : (
            <div className="row order-row">
              {orders.map((order, i) => {
                return (
                  <div className="orders-row mb-3" key={i}>
                    <h5 className="">{`Order Id : ${order.id}`}</h5>
                    {order.products.map((product) => {
                      return (
                        <div key={product.productName} className="row">
                          <div className="product-row col-md-6 col-sm-12 mb-sm-3">
                            <div className="row">
                              <div className="product-img col-5">
                                <img
                                  src={getProductImage(product.productName)}
                                  alt=""
                                  height={50}
                                />
                              </div>
                              <div className="prouduct-name col-7 py-3 mr-2">
                                {product.productName}
                              </div>
                            </div>
                          </div>
                          <div className="product-row col-md-6 col-sm-12 d-flex justify-content-end mb-3 ">
                            <div className="row">
                              <div className="col-12 text-end">
                                <h6>{`Rs.${product.productPrice}`}</h6>
                              </div>
                              <div className="col-12 text-end">
                                {`Qty.${product.quantity}`}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="row order-total">
                      <h6 className="text-end ml-2">
                        {`Order Total: `}
                        <PiCurrencyInr className="mb-1" size={18} />
                        {`${order.total}`}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
