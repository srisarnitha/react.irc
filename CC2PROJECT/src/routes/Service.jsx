import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ServiceImg from "../assets/9.jpeg" 
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Heros from "../components/Heros";
import Services from "../components/Services";
 function Service(){

    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
       
        url="/"
        btnClass="show"
        />
        <Heros/>
        <Services/>
       <Trip/>
        <Footer/>
        </>
    )
}
export default Service;