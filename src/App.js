import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AboutUs from './pages/AboutUs';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
