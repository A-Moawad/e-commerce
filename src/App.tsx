import './App.css'
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import SharedLayout from './pages/SharedLayout';
import Categories from './pages/Categories';
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
            <Route path="products/:categories" element={<Categories />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;


