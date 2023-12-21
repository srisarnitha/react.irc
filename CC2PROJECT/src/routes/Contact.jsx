import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ContactImg from "../assets/fly3.jpeg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){

    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
       
        url="/"
        btnClass="show"
        
        />
        <ContactForm/>
         <Footer/>
        </>
    )
}
export default Contact; 