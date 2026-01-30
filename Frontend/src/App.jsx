import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Login from './pages/login.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const ControlledForm = lazy(() => import('./components/controlledForm.jsx'));
const Counter = lazy(() => import('./components/useEffect.jsx'));
const Product = lazy(() => import('./components/product.jsx'));
const ProductDetail = lazy(() => import('./components/productDetail.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/counter"
            element={
              <ProtectedRoute>
                <Counter />
              </ProtectedRoute>
            }
          />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/controlledform" element={<ControlledForm />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
