import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Book from './components/Book';
// import Library from './Pages/Library';
import Home from './Pages/Home';

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
    </Routes>
  );
}

export default App;
