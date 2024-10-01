import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Book from './components/Book';
// import Library from './Pages/Library';
import Home from './Pages/Home';
import AddBook from './Pages/AddBook';
import Checkout from './Pages/CheckoutBook';

// const books = [
//   {
//     BookName: 'bookname1',
//     Bookisbn: '123123',
//     BookLocation: 'city',
//   },
// ];

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/addbook' element={<AddBook/>}> </Route>
      <Route path='/checkout' element={<Checkout/>}>
      </Route>
    </Routes>
  );
}

export default App;
