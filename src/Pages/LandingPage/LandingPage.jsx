import { useContext, useState } from "react"
import { DataContext } from "../../context/context"
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

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
        <div className="homeConatiner">
            <h1>Food Ordering App</h1>
            <h3>Select Your Cuisine</h3>

            {
                state.cuisines.map(item => (
                    <button className="cuisineBTN" key={item.id} onClick={() => clickCuisine(item.id)} >{item.name}</button>
                ))
            }

            <div>

            {
                displayRestaurants.map(restaurant => (
                    <div key={restaurant.id} >
                        <div className="restaurant-name" onClick={() => goToRestaurant(restaurant, restaurant.name) }>
                            Dishes by {restaurant.name}</div>

                        <div className="restaurants-list">
                        {
                            restaurant.menu.map(item => (
                                <div key={item.name}>
                                   
                                    <div className="card">
      <div className="image-container">
        <img src={item.imgSrc} alt="" />
      </div>
      <div className="content">
        <h3 className="name">{item.name}</h3>
        <p className="price">${item.price}</p>
        <p className="restaurant">{restaurant.name}</p>
      </div>
    </div>
                                </div>

                            ))
                        }
                        </div>
                       
                    
                    </div>
                ))
            }
            </div>

        </div>
    )
}