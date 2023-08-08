
export const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA": 
        return {
          ...state,
        //   data: [...state.data, action.payload], 
        //   filteredData: [...state.filteredData, action.payload], 
        };
      case "UPDATE":
        return {
          ...state,
          restaurants: action.payload,
        };
    case "SHOW":
        return{
            ...state,
            currentRestaurantShowing: action.payload
        }
      
        
      default:
        return state;
    }
  };
  
  