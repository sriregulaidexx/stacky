/* eslint-disable @typescript-eslint/no-unused-vars */
import Person from "../components/Person";

const bookslist = [
  {
    bookname: "count of monte cristo",
    bookquantity: 5,
    location: "Auckland",
    isAvailable: true,
    requestor: "Alan",
    dues: true,
    totalDues: 545,
    eligibleForRetrieval: true,
  },
];

const personData = [
  {
    name: "Sharun",
    phoneNumber: "8792349480329874",
    sex: "M",
    isVerified: true,
    accountNumber: " 20938490238492034",
    email: "sri@test.com",
    creditCheck: true,
    due: 1234.8,
  },
];

export default function Checkout() {
  return (
    <>
      <div>
        <h1>CheckoutBook</h1>
        {bookslist.map((values) => (
          <>
            <p>{values.bookname}</p>
            <p>{values.bookquantity}</p>
            <p>{values.location}</p>
            <p>{values.isAvailable}</p>
            <p>{values.requestor}</p>
            <p>{values.dues}</p>
            <p>{values.totalDues}</p>
            <p>{values.eligibleForRetrieval}</p>
          </>
        ))}
      </div>
      <div>
        {personData.map((data) => (
          <>
            <div key={data.phoneNumber}></div>{" "}
            <Person
              name={data.name}
              phoneNumber={data.phoneNumber}
              sex={data.sex}
              isVerified={data.isVerified}
              accountNumber={data.accountNumber}
              email={data.email}
              creditCheck={data.creditCheck}
              dues={data.due}
            />
          </>
        ))}
      </div>
    </>
  );
}
