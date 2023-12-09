import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotosPage from './pages/PhotosPage';
function App() {
  return (

    <BrowserRouter >
    {/* Routes, Route  감싸야 함.*/}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/products/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
    </BrowserRouter>

  );
}

export default App;
