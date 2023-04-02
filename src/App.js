
import './App.css';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/header';
import ProductDetail from './containers/productDetail';
import ProductList from './containers/productList';

function App() {
  return (
    <div className="App">
    <Router>
     <Header/>
     <Routes>
     <Route path ="/" exact element={<ProductList/> }/>
     <Route path ="/product/:productsId" exact element={ ProductDetail }/>
     <Route>404 NOT FOUND!</Route>
     </Routes>
    </Router> 
      
    </div>
  );
}

export default App;

