import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
// Bootstrap components ----------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// -------------------------------------------
import Navbar from "./Components/Navbar";
import Users from "./Components/users";
import Task from "./Components/Tasks/taskInput";

// Firebase config-------------------
import { db } from "./Firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
// -----------------------------------------------------------------
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
      <Navbar />
      <Container>
        <Row>
          <Col sm={4}>{/* <Users users={users} /> */}</Col>
          <Col>
            <h1>Hi there welcome to my project</h1>
            <Task />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
