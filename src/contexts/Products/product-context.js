import { createContext, useContext, useReducer } from "react";
import { initialState , sortData, filterData, productsReducer } from "./utils";

const ProductContext = createContext(initialState.products);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productsReducer,
    initialState
  );
  const findProduct = (id, products) => products?.find((product) => product._id === id);
  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, findProduct , sortData, filterData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts,  ProductProvider };
