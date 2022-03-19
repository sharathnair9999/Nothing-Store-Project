import { createContext } from "react";
import { useContext } from "react";

const products = [
  {
    id:1,
    name:"Laptop"
  },
  {
    id:2,
    name:"Phone"
  }
]

const ProductContext = createContext(products)

const ProductProvider = ({children}) => {
  const findProduct = (id) => products.find(product=>product.id===id)
  return (
    <ProductContext.Provider value={{products, findProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export {useProducts, ProductProvider}