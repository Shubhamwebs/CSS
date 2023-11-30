import React, { useEffect, useState } from "react";
import "./App.css";
import Student from "./Componets/Student";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import AddStudents from "./Componets/AddStudents";

function App() {
  let initList;
  let data = JSON.parse(localStorage.getItem("list"));
  if (data === null) {
    initList = [""];
  } else {
    initList = data;
  }
  console.log(initList);
  // const students = [
  //   {
  //     id: 101,
  //     name: "Prince",
  //     email: "prince0848@gmail.com",
  //     phoneNo: 8378279963,
  //     birth: "08/01/2000",
  //   },
  //   {
  //     id: 102,
  //     name: "Bharat",
  //     email: "prince0848@gmail.com",
  //     phoneNo: 8378279963,
  //     birth: "08/01/2000",
  //   },
  //   {
  //     id: 103,
  //     name: "Subham",
  //     email: "prince0848@gmail.com",
  //     phoneNo: 8378279963,
  //     birth: "08/01/2000",
  //   },
  //   {
  //     id: 104,
  //     name: "Piyush",
  //     email: "prince0848@gmail.com",
  //     phoneNo: 8378279963,
  //     birth: "08/01/2000",
  //   },
  // ];

  const [list, setList] = useState(initList);

  const onDelete = (value) => {
    setList(list.filter((item) => item !== value));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItems = (name, email, contact, bDate) => {
    const newStu = {
      name: name,
      email: email,
      phoneNo: contact,
      birth: bDate,
    };
    setList([...list, newStu]);
  };

  const onAllSave = (name, email, phoneNo, birth, item) => {
    setList(
      list.map((unit) => {
        if (unit === item) {
          return {
            ...item,
            name: name,
            email: email,
            phoneNo: phoneNo,
            birth: birth,
          };
        } else {
          return unit;
        }
      })
    );
  };

  return (
    <>
      <Navbar title="Amar Infotech" searchBar={true} />
      <Student items={list} onDelete={onDelete} onAllSave={onAllSave} />
      <AddStudents addItems={addItems} />
      <Footer />
    </>
  );
}

export default App;
