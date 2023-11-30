import React, { useState } from "react";

const AddStudents = ({ addItems }) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setContact] = useState("");
  const [bDate, setbDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !bDate) {
      alert("please fill the value into input");
    } else {
      addItems(name, email, contact, bDate);
      setName("");
      setemail("");
      setContact("");
      setbDate("");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-3">Add New Student</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="FullName" className="form-label">
            FullName
          </label>
          <input
            type="text"
            className="form-control"
            id="FullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="CantactNo" className="form-label">
            CantactNo
          </label>
          <input
            pattern="[6-9]{1}[0-9]{9}"
            type="tel"
            className="form-control"
            id="CantactNo"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="BDate" className="form-label">
            Birth Date
          </label>
          <input
            type="date"
            className="form-control"
            id="BDate"
            value={bDate}
            max={"2010-01-01"}
            onChange={(e) => {
              return setbDate(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudents;
