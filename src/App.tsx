import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Book from './components/Book';
// import Library from './Pages/Library';
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import Checkout from "./Pages/CheckoutBook";
//@ts-ignore
import AddPerson from "./Pages/AddPerson";
import DeleteBook from './Pages/DeleteBook'
import ReturnBook from './Pages/ReturnBook'



function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/addbook" element={<AddBook />}>
        {" "}
      </Route>
      <Route path="/checkout" element={<Checkout />}></Route>

      <Route path="/addperson" element={<AddPerson />}></Route>
      <Route path="/deleteBook" element={<DeleteBook />}></Route>
      <Route path="/returnbook" element={<ReturnBook />}></Route>
    </Routes>
  );
}

export default App;
