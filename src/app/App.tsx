import { Routes, Route } from 'react-router-dom';
import Preloader from '../components/Preloader';
import PromoBanner from '../components/PromoBanner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Preloader />
      <PromoBanner />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}
