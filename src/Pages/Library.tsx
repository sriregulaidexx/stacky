interface LibraryDetails {
  L_location: string;
  date: string;
  numberOfBooks: number;
  numberOfBooksOnLoan: number;
  libraryCardSystem: boolean;
  isOpen: boolean;
}

const Library = ({
  L_location,
  date,
  numberOfBooks,
  libraryCardSystem,
  isOpen,
}: LibraryDetails) => {
  return (
    <>
      <h1>Location: {L_location}</h1>
      <h2>Date: {date}</h2>
      <h2>Number of Books: {numberOfBooks}</h2>
      <h2>Library Card System: {libraryCardSystem}</h2>
      <h2>Is the Library Open: {isOpen}</h2>
    </>
  );
};

// Have a DB to save the Book details

export default Library;
