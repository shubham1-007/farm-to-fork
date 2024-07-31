import { useState, createContext } from "react";
import { ProductList } from "../ProductData";
export const ProductContext = createContext();

const ProductData = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(Array(ProductList.length).fill(1));

  const [total, setTotal] = useState(0);

  return (
    <div>
      <ProductContext.Provider
        value={{
          productData,
          setProductData,
          quantity,
          setQuantity,
          total,
          setTotal,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductData;
