import Flight1 from"../assets/fly1.jpeg"
import Flight2 from"../assets/fly2.jpeg"

import "./DestinationStyles.css"
const Destination =()=>{
    return(
<div className="destination">
    <h1>Popular Offers</h1>
    
    <div className="first-des">
        <div className="des-text">

        </div>
        
        <p >book any ​domestic one-way flight of your choice from 12 noon onwards, till limited bookings last. ​To avail Flat 50% discount simply enter coupon code CT50AIR for flight bookings. Offer is applicable for limited domestic one way flight bookings.</p>
    <br></br>
    </div>
    <div className="image">
        <img alt ="img" src={Flight1}/>
        <img alt ="img" src={Flight2}/>
    </div>
   
   
</div>
    )

}
export default Destination