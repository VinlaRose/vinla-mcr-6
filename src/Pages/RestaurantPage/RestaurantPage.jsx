import { useContext, useState } from "react"
import { DataContext } from "../../context/context";
import "./RestaurantPage.css"
import ReviewModal from "../../components/Modal/Modal";

export const RestaurantPage = () =>{

    const {state, dispatch} = useContext(DataContext);
    const [openModal, setOpenModal] = useState(false);

    
    


    const restaurant = state.restaurants.find(item => item.name === state.currentRestaurantShowing.name)

    const {name, id, menu, phone, ratings,description, cuisine_id, averageRating, address} = restaurant;
    const showModal = () => {
        setOpenModal(true)
    }

    const onClose = () => {
        setOpenModal(false)
    }

    const onSave = (reviewData) => {
        
        setOpenModal(false);
        console.log(reviewData);
        const updateData = state.restaurants.map((item) =>
    item.name === restaurant.name
      ? { ...item, ratings: [...item.ratings, reviewData] }
      : item
  );
        console.log(updateData);

        const updateRatings = updateData.map(item =>
            item.name === restaurant.name
              ? {
                  ...item,
                  averageRating: item.ratings.reduce((acc, curr) => acc + curr.rating, 0) / item.ratings.length
                }
              : item
          );
          
        dispatch({type:"UPDATE" , payload: updateRatings})
    }

    return(
        <div className="restaurantPageWrapper" >

            <div className="restoDetailsWrapper">
                <div className="restoHeading">
                {name}
                </div>
           
            <div className="restaurantDetails">
                <div className="restoDeatilsLeft">
                <p className="details">{address}</p>
                <p className="details">Average Rating: {averageRating}</p>
                </div>

                <div className="addReview">
                    <button onClick={showModal} className="addRevBtn"   >Add Review</button>
                </div>
                
            </div>

            <div className="reviewsContainer">
                <h2 className="reviewHead">Reviews</h2>

                {
                    ratings.map(item => (
                        <div className="review-container">
                        <div className="profile-image">
                          <img src={item.pp} alt="Profile" />
                        </div>
                        <div className="review-content">
                          <div className="reviewer-info">
                            <h3>{item.revName}</h3>
                            <div className="star-rating">
                              
                              
                               <span className="number-rating">{item.rating}</span> <span>&#9733;</span>
                              
                            </div>
                          </div>
                          <p className="review-description">{item.comment}</p>
                        </div>
                      </div>     
                    ))
                }
            
            </div>
            </div>
            
           

            {
                openModal && <ReviewModal onClose={onClose} onSave={onSave}/>
            }
        </div>
    )
}