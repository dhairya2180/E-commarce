// import logo from './logo.svg';
// import { BrowserRouter as Roter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Carosul from './Component/Carousl/Carosul';
import Footer from './Component/Footer/Footer';
import Items from './Component/Items/Items';
import MainFooter from './Component/MainFooter/MainFooter';
import Mainnavbar from './Component/Mainnavbar.js/Mainnavbar';
import Other from './Component/OtherFooter/Other';
import Supernav from './Component/Supernavbar/Supernav';
// import Error from './Component/404/Error';
// import Datils from "../Component/Shoping/Datils";
// import Contect from "./Contect"
// import Checkout from './Checkout';
function App() {
  return (
    <>
  


      <Footer/>
    <Mainnavbar/>
    <Supernav/>
    <Carosul/>
    <Items/>
    <MainFooter/>
    <Other/>
{/* <Error/> */}
{/* <Contect/> */}
  {/* <Checkout/> */}
    </>
  );
}

export default App;
