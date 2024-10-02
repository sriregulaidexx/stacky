//@ts-nocheck

import Book from "../components/Book";

const DeleteBook = () => {
  return (
<>
 <p>
    <Book name="bookish" isbn="123" location="Auckland"/>
 </p>

      <form>
        <label>Book name</label>
        <input type="input" name="bookname"></input>
        <input type="input" name="isbn"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default DeleteBook;
