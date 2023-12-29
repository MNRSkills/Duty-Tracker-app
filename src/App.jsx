import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Users from "./Components/users";

import { db } from "./Firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [fullName, setFullName] = useState({
    first_name: "",
    last_name: "",
  });
  const [newEmail, setNewEmail] = useState("");

  const usersCol = collection(db, "users");
  const emailCol = collection(db, "email");
  const getUsers = async () => {
    const usersSnapshot = await getDocs(usersCol);
    const usersList = await usersSnapshot.docs.map((doc) => doc.data());
    setUsers(usersList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (fullName && newEmail) {
        await addDoc(usersCol, fullName);
        await addDoc(emailCol, newEmail);
      }
    } catch {
      console.log("ERROR ON THE TRYCATCH");
    }
  };

  const handleChange = (e) => {
    setFullName({
      ...fullName,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    console.log(e);
    setNewEmail(e);
  };

  console.log(users, "THe state now");
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Users
        users={users}
        fullName={fullName}
        newEmail={newEmail}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleEmailChange={handleEmailChange}
      />
    </>
  );
}

export default App;
