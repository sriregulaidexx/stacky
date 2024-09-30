//Add book  -- get book information using Book Component

//Todo Add state to save the book
type Books = {
  bookname: string;
  isbn: string;
  location: string;
  quantity: number;
  dateReceived: string;
};

const AddBook = ({
  bookname,
  isbn,
  location,
  quantity,
  dateReceived,
}: Books) => {
  return (
    <>
      <h1>Add Books to the Library</h1>
      <form>
        Book name
        <input type="text">{bookname}</input>
        isbn
        <input type="text">{isbn}</input> location
        <input type="text">{location}</input> quantity
        <input type="text">{quantity}</input> dateReceived
        <input type="text">{dateReceived}</input>
        <input type="submit">Submit </input>
      </form>
    </>
  );
};

export default AddBook;
