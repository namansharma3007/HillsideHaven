import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Cancel from './components/Cancel/Cancel';
import Edit from './components/Edit/Edit';
import Navbar from './components/Navbar/Navbar';
import Refund from './components/Refund/Refund';
import Checkout from './components/Checkout/Checkout';
import EditDetails from './components/Edit/EditDetails/EditDetails'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/edit/:email" element={<EditDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
