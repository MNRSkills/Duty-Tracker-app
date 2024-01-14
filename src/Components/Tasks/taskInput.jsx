import React, { useState, useEffect } from "react";

// Components -----------------------
import FormComp from "../Form";
import Issues from "./Issues";
// -----------------------------------
// Firebase config-------------------
import { db } from "../../Firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
// -----------------------------------------------------------------
const Task = () => {
  const [task, setTask] = useState({
    date: "0111002",
    category: ["Incident", "Service Request", "Change Management"],
    assign: "",
    reporter: "",
    description: "",
  });
  const [issues, setIssues] = useState([]);
  const tasksCol = collection(db, "tasks");

  const handleChange = (e) => {
    console.log("THIS IS WORKING", e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("THIS WORKS");

    try {
      if (task) {
        await addDoc(tasksCol, task);
      }
    } catch {
      console.log("ERROR ON THE TRYCATCH");
    }
  };
  const fields = [
    {
      name: "date",
      label: "Date",
      type: "text",
    },
    {
      name: "category",
      label: "Category",
      type: "text",
    },
    {
      name: "assign",
      label: "Assign to",
      type: "text",
    },
    {
      name: "reporter",
      label: "Who is reporting",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
  ];

  const getTasksList = async () => {
    const tasksSnapshot = await getDocs(tasksCol);
    const tasksList = await tasksSnapshot.docs.map((doc) => doc.data());
    setIssues(tasksList);
  };

  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <FormComp
        fields={fields}
        onSubmit={handleSubmit}
        onChange={handleChange}
        formData={task}
      />
      {issues.map((issue, index) => {
        return <Issues issue={issue} key={index} />;
      })}
    </>
  );
};

export default Task;
