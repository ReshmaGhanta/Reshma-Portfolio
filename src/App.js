import CustomRoutes from "./routes/CustomRoutes"
import { Container } from "react-bootstrap";
import {Nav} from './nav';
//import NavProvider from "./context/NavContext";
import { CustomNavContext } from './context/NavContext';
import Home from "./views/Home";
import Contact from "./views/Contact";
import Education from "./views/Education";
import Footer from "./components/Footer"
import Main from "./views/Main";
function App() {
  return (

    <CustomRoutes/>
 
  );
}

export default App;
