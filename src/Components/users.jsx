import React, { useState, useEffect } from "react";
import FormComp from "./Form";

const Users = () => {
  const [fullName, setFullName] = useState({
    first_name: "",
    last_name: "",
  });
  const fields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
    },
    // {
    //   name: "email",
    //   label: "Email",
    // },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("THIS IS FULL NAME", e);
    // we need to now send the email data and how to structure that
    try {
      if (fullName) {
        await addDoc(usersCol, fullName);
      }
    } catch {
      console.log("ERROR ON THE TRYCATCH");
    }
  };

  const handleChange = (e) => {
    console.log("THIS IS WORKING");
    setFullName({
      ...fullName,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormComp
      fields={fields}
      onSubmit={handleSubmit}
      onChange={handleChange}
      formData={fullName}
    />
  );
};

export default Users;
