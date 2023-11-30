import React, { useState } from "react";

export default function StudentsInfo({ item, onDelete, onAllSave }) {
  const [edit, setEdit] = useState(true);
  const [name, setname] = useState(item.name);
  const [email, setemail] = useState(item.email);
  const [phoneNo, setphoneNo] = useState(item.phoneNo);
  const [birth, setbirth] = useState(item.birth);
  const OnEdit = () => {
    setEdit(!edit);
    onAllSave(name, email, phoneNo, birth, item);
  };
  return (
    <div>
      <h2>
        Name :{" "}
        {edit ? (
          item.name
        ) : (
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        )}
      </h2>
      <h2>
        Email :{" "}
        {edit ? (
          item.email
        ) : (
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        )}
      </h2>
      <h2>
        ContactNo :{" "}
        {edit ? (
          item.phoneNo
        ) : (
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setphoneNo(e.target.value)}
          />
        )}
      </h2>
      <h2>
        Birth :{" "}
        {edit ? (
          item.birth
        ) : (
          <input
            type="date"
            value={birth}
            onChange={(e) => setbirth(e.target.value)}
          />
        )}
      </h2>
      <button
        onClick={() => onDelete(item)}
        type="button"
        className="btn btn-primary me-5"
      >
        Delete
      </button>
      <button onClick={OnEdit} type="button" className="btn btn-primary">
        {edit ? "Edit" : "Save"}
      </button>
      <hr />
    </div>
  );
}
