import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpeg"
import Trip2 from "../assets/6.jpeg"
import Trip3 from "../assets/8.jpeg"

function Trip(){
    return(
        <div className="trip">
<h1>International Flight Trips</h1>
<p>Flying to a different country</p>
<div className="tripcard">
    <TripData
    image={Trip1}
    heading ="Trip to Indonesia"
    text="Largest tropical rainforest in the world"/>
    <TripData
    image={Trip2}
    heading ="Trip to UAE"
    text="United ArabEmirates"/>
     <TripData
    image={Trip3}
    heading ="Trip to Paris"
    text="The city of light"/>
</div>
        </div>
    );
}
export default Trip;