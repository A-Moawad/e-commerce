import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Category from './pages/Category/Category';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Carts from './pages/Carts/Carts';
import Cart from './pages/Carts/Cart';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/:userId" element={<Product />} />
            <Route path="/products/category/:categoryName" element={<Category />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/carts/:cartId" element={<Cart />} />
            <Route path="*" element={<ErrorPage/>}/>

          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;


