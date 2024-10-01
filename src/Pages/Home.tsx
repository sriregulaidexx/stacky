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
      </div>
    </>
  );
};

export default Home;
