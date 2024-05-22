import './App.css'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import SharedLayout from './pages/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from './pages/Category/Category';

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
            <Route path="*" element={<ErrorPage/>}/>


          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;


