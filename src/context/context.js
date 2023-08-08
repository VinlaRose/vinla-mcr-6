import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { cuisineData, restaurantsData } from "../data";





const initialValue = {
   cuisines: cuisineData,
   restaurants: restaurantsData,
   currentRestaurantShowing: null
   
}



export const DataContext = createContext(initialValue);

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

   
 

      

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )   
}