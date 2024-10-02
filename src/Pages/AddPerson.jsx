import { useState } from "react";

const AddPerson = () => {
  const [inputs, setInputs] = useState({}); // Fix destructuring here

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value })); // Fix function parameter
  }

  function onHandleSubmit(event) {
    event.preventDefault();
    alert(`${inputs.firstname }:firstname` );
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>First Name</label>
        <input
          name="firstname" 
          type="input"
          onChange={onChange}
          placeholder="FirstName"
          value={inputs.firstname || ""}
        />
        <label>Last Name</label>
        <input
          name="lastname"  
          type="input"
          onChange={onChange}
          placeholder="LastName"
          value={inputs.lastname || ""}
        />
        <input
        type="Submit"
        value="Submit"
        ></input>
      </form>
    </>
  );
};

export default AddPerson;
