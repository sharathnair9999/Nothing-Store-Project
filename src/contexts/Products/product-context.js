import { createContext, useContext, useReducer } from "react";
import { initialState, sortData, filterData, productsReducer } from "./utils";

const ProductContext = createContext(initialState.products);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productsReducer,
    initialState
  );
  const findProduct = (id, products) =>
    products?.find((product) => product._id === id);

  const searchProduct = (productName) => {
    const products = productState?.products?.filter(
      ({ title, company, categoryName }) =>
        company.toLowerCase().includes(productName.toLowerCase()) ||
        title.toLowerCase().includes(productName.toLowerCase()) ||
        categoryName.toLowerCase().includes(productName.toLowerCase())
    );
    productDispatch({ type: "SEARCHED_PRODUCTS", payload: products });
  };
  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        findProduct,
        sortData,
        filterData,
        searchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
