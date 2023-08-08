import { useContext, useState } from "react"
import { DataContext } from "../../context/context"
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const {state, dispatch} = useContext(DataContext);
    const [displayRestaurants, setDisplayRestaurants] = useState([]);
    const navigate = useNavigate();
    
    const clickCuisine = (id) => {
      
        const requiredRestaurants = state.restaurants.filter(item => item.cuisine_id === Number(id));
      
        setDisplayRestaurants(requiredRestaurants)
    }

    const goToRestaurant = (data,name) => {
        dispatch({type: "SHOW", payload: data})
        navigate(`/${name}`)
    }
    return (
        <div>
            <h1>Food Ordering App</h1>
            <h3>Select Your Cuisine</h3>

            {
                state.cuisines.map(item => (
                    <button key={item.id} onClick={() => clickCuisine(item.id)} >{item.name}</button>
                ))
            }

            <div className="restaurants-list">

            {
                displayRestaurants.map(item => (
                    <div key={item.id} >
                        <h3 onClick={() => goToRestaurant(item, item.name) }>{item.name}</h3>
                        {
                            item.menu.map(item => (
                                <div key={item.name}>
                                    {item.name}
                                </div>
                            ))
                        }
                    
                    </div>
                ))
            }
            </div>

        </div>
    )
}