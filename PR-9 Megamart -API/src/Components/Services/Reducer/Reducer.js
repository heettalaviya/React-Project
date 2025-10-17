const initialState = {
  products: [],       
  currentProduct: null, 
  isLoading: false,
  isError: "",
  isCreated: false,
  isUpdated: false,
};

const MenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ADD_PRODUCT_SUC":
      return {
        ...state,
        isCreated: true,
        isError: "",
        isLoading: false,
      };
    case "ADD_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message || "Failed to add product",
        isCreated: false,
        isLoading: false,
      };

    case "GET_ALL_PRODUCT_SUC":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isCreated: false,
        isUpdated: false,
        isError: "",
      };
    case "GET_ALL_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message || "Failed to fetch products",
        isLoading: false,
      };

    case "GET_PRODUCT_SUC":
      return {
        ...state,
        currentProduct: action.payload,
        isLoading: false,
      };
    case "GET_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message || "Failed to fetch product",
        isLoading: false,
      };

    case "DELETE_PRODUCT_SUC":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
        isLoading: false,
        isError: "",
      };
    case "DELETE_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message || "Failed to delete product",
        isLoading: false,
      };

    case "UPDATE_PRODUCT_SUC":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        currentProduct: null,
        isUpdated: true,
        isLoading: false,
        isError: "",
      };
    case "UPDATE_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message || "Failed to update product",
        isLoading: false,
      };

    case "FILTER_PRODUCTS":
      const { categories = [], brands = [], patterns = [] } = action.payload;

      const filteredProducts = state.products.filter((product) => {
        const matchCategory =
          categories.length === 0 ||
          categories.some(
            (cat) => cat.toLowerCase() === product.categoryType.toLowerCase()
          );
        const matchBrand =
          brands.length === 0 ||
          brands.some((b) => b.toLowerCase() === product.brand.toLowerCase());
        const matchPattern =
          patterns.length === 0 ||
          patterns.some((p) =>
            (product.pattern || [])
              .map((i) => i.toLowerCase())
              .includes(p.toLowerCase())
          );

        return matchCategory && matchBrand && matchPattern;
      });

      return {
        ...state,
        products: filteredProducts,
      };

    default:
      return state;
  }
};

export default MenReducer;
