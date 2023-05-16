import './App.css';
import "react-toastify/dist/ReactToastify.css";
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/header';
import { ToastContainer } from 'react-toastify';
import ProductDetail from './containers/productDetail';
import ProductList from './containers/productList';
import Cart from './containers/cart';


function App() {
  return (
    <div className="App">
    <Router>
      <ToastContainer/>
     <Header/>
     <Routes>
     <Route path ="/" exact element={<ProductList/> }/>
     <Route path ="/product/:productId" exact element={ <ProductDetail/> }/>
     <Route>404 NOT FOUND!</Route>
     <Route path ="/cart" exact element={<Cart/> }/>
     </Routes>
    </Router> 
      
    </div>
  );
}

export default App;
