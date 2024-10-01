//@ts-nocheck
import { useState } from "react";

const AddBook = () => {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Book Name: ${inputs.book}`);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Add Book
            <input
              name="book"
              onChange={handleChange}
              value={inputs.book || ""}
              type="text"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default AddBook;
