import React from "react";

interface PersonTypes {
  name: string;
  phoneNumber: string;
  sex: string;
  isVerified: boolean;
  accountNumber: string;
  email: string;
  creditCheck: boolean;
  dues: number;
}

const Person = ({
  name,
  phoneNumber,
  sex,
  isVerified,
  accountNumber,
  email,
  creditCheck,
  dues,
}: PersonTypes) => {
  return (
    <>
      <p>{name}</p>
      <p>{phoneNumber}</p>
      <p>{sex}</p>
      <p>{isVerified}</p>
      <p>{accountNumber}</p>
      <p>{email}</p>
      <p>{creditCheck}</p>
      <p>{dues}</p>
    </>
  );
};

export default Person;
