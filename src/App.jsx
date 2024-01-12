import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Users from "./Components/users";
import Task from "./Components/taskInput";

import { db } from "./Firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState("");

  // BELOW ARE IMPORTED DB COMING FROM A FIREBASE COLLECTION
  const usersCol = collection(db, "users");
  const emailCol = collection(db, "email");
  const tasksCol = collection(db, "tasks");
  // ----------

  const getUsers = async () => {
    const usersSnapshot = await getDocs(usersCol);
    const usersList = await usersSnapshot.docs.map((doc) => doc.data());
    setUsers(usersList);
  };

  const handleEmailChange = (e) => {
    console.log(e);
    setNewEmail(e);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Users
        users={users}
        
      />
      <Task />
    </>
  );
}

export default App;
