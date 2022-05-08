import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import {
  initialState,
  sortData,
  filterData,
  productsReducer,
  initialAlertState,
} from "./utils";

const ProductContext = createContext(initialState.products);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productsReducer,
    initialState
  );
  const showAlert = (type, message, delay = 3000) => {
    productDispatch({
      type: "SHOW_ALERT",
      payload: { type: type, message: message, show: true },
    });
    setTimeout(() => {
      productDispatch({ type: "SHOW_ALERT", payload: initialAlertState });
    }, delay);
  };

  const getCategories = async () => {
    try {
      const {
        data: { categories },
      } = await axios.get("/api/categories");
      productDispatch({ type: "CATEGORIES", payload: categories });
    } catch (error) {
      showAlert("error", "Could not retrieve categories");
    }
  };

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
  useEffect(() => {
    productState?.categories.length === 0 && getCategories();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        findProduct,
        sortData,
        filterData,
        searchProduct,
        showAlert,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
