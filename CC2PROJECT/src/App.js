/*import "./styles.css";*/

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Service from "./routes/Service.jsx";
import Contact from "./routes/Contact.jsx";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginPage from "./components/LoginPage.jsx";
function App(){
return(
  <div className="App">
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path = "/register" element={<RegistrationForm/>}/>
      <Route path = "/login" element={<LoginPage/>}/>
     </Routes>
   
    {/* <RegistrationForm/> */}
    {/* <LoginPage/> */}
    {/* <Home/> */}
    </div>
  );
}
export default App;