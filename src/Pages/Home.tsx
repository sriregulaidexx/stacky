import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <div>
        <h1>Home</h1>
        <button onClick={()=>{navigate('/Addbook')} }>AddBooks</button>
        <button name="checkout" onClick={()=>{
          navigate('/checkout')
        }}>Checkout</button>
        <button onClick= {()=>{navigate('/addperson')}}>Add Person</button>
        <button onClick= {()=>{navigate('/deleteBook')}}>Delete Book</button>
        <button onClick= {()=>{navigate('/returnbook')}}>ReturnBook  </button>
      </div>
    </>
  );
};

export default Home;
