const initialAlertState = {
  type: null,
  message: null,
  show: false,
};

const initialState = {
  product: {},
  products: [],
  searchedProducts: [],
  categories: [],
  loading: false,
  filters: {
    priceSort: "LOW_TO_HIGH",
    filterByBrand: [],
    filterByCategory: [],
    filterByRating: 0,
    filterByRange: 2000,
    filterByStock: false,
  },
  alert: initialAlertState,
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload, searchedProducts: [] };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
    case "SEARCHED_PRODUCTS":
      return { ...state, searchedProducts: action.payload };
    case "PRODUCT":
      return { ...state, product: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SHOW_ALERT":
      return { ...state, alert: action.payload };
    case "PRICE_SORT":
      return {
        ...state,
        filters: { ...state.filters, priceSort: action.payload },
      };
    case "FILTER_BY_BRAND":
      let currBrand = action.payload;
      let brandArray = state.filters.filterByBrand.includes(currBrand)
        ? state.filters.filterByBrand.filter((brand) => brand !== currBrand)
        : [...state.filters.filterByBrand, currBrand];
      return {
        ...state,
        filters: { ...state.filters, filterByBrand: brandArray },
      };
    case "FILTER_BY_CATEGORY":
      let currCategory = action.payload;
      let categoryArray = state.filters.filterByCategory.includes(currCategory)
        ? state.filters.filterByCategory.filter(
            (category) => category !== currCategory
          )
        : [...state.filters.filterByCategory, currCategory];
      return {
        ...state,
        filters: { ...state.filters, filterByCategory: categoryArray },
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, filterByRating: action.payload },
      };
    case "FILTER_BY_RANGE":
      return {
        ...state,
        filters: { ...state.filters, filterByRange: action.payload },
      };
    case "FILTER_BY_STOCK":
      return {
        ...state,
        filters: { ...state.filters, filterByStock: action.payload },
      };
    case "RESET_FILTERS":
      return {
        ...state,
        filters: { ...initialState.filters },
      };
    default:
      return state;
  }
};

const sortData = (products, sortBy) => {
  return sortBy !== null && sortBy === "LOW_TO_HIGH"
    ? products.sort((a, b) => a.price - b.price)
    : sortBy === "HIGH_TO_LOW"
    ? products.sort((a, b) => b.price - a.price)
    : products;
};

const filterData = (
  products,
  brandFilter,
  categoryFilter,
  ratingFilter,
  rangeFilter,
  includeOutOfStockFilter
) => {
  return products
    .filter(({ company }) =>
      brandFilter.length > 0 ? brandFilter.includes(company) : true
    )
    .filter(({ categoryName }) =>
      categoryFilter.length > 0 ? categoryFilter.includes(categoryName) : true
    )
    .filter(({ rating }) => (ratingFilter > 0 ? rating >= ratingFilter : true))
    .filter(({ price }) =>
      rangeFilter > 2000
        ? parseInt(price) >= rangeFilter && parseInt(price) <= 500000
        : true
    )
    .filter(({ inStock }) => (includeOutOfStockFilter ? true : inStock));
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export {
  initialState,
  sortData,
  filterData,
  productsReducer,
  initialAlertState,
  debounce,
};
