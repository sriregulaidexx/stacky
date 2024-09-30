interface Books {
  name: string;
  isbn: string;
  location: string;
  quantity: number;
  dateReceived: string;
}


const Book = ({ name, isbn, location }: Books) => {




  return (
    <>
      <h2>Book Name: {name}</h2>
      <h2>Book isbn: {isbn}</h2>
      <h2>Book location: {location}</h2>
    </>
  );
};




// Delete Book
// Checkout Book
// return book
// Lost Book
// Overdue book
// if Overdue Request For fees

export default Book;
