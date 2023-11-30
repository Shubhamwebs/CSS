import { useState } from "react";
import "./App.css";


function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");

  const [Users, setUsers] = useState([]);

  const [Edit, setEdit] = useState(false);

  const [active, setactive] = useState(null);

  const addUser = (e) => {
    e.preventDefault();

    const User = {
      Name,
      Email,
      Address,
    };

    if (Edit) {
      //update user
      let copy = Users;
      Object.assign(copy[active], User);
      setUsers([...copy]);
      setEdit(false);
      setactive(null);
    } else {
      //add user
    }

    setUsers([...Users, User]);

    setName("");
    setEmail("");
    setAddress("");
  };

  const onEditClick = (index) => {
    const User = Users[index];

    setName(User.Name);
    setEmail(User.Email);
    setAddress(User.Address);
    setactive(index);
    setEdit(true);
  };

  const DeleteUsers = (User) => {
    if (window.confirm("Are you sure you weant to delete?")) {
      let copy = Users.filter((item) => item !== User);

      setUsers([...copy]);
    }
  };

  return (
    <>
      <div className="container pt-5 ">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-5 bg-opacity-25 border border-3 border-success rounded-4">
            <form className="p-4" onSubmit={addUser}>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label fs-2">
                  Enter your Name:
                </label>
                <input
                  type="text"
                  className="form-control p-2 fs-3"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label for="exampleInputEmail1" className="form-label fs-2">
                  Enter your Email ID. :
                </label>
                <input
                  type="email"
                  className="form-control p-2 fs-3"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text fs-5">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label fs-2">
                  Enter your address:
                </label>
                <input
                  type="text"
                  className="form-control p-2 fs-3"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label w-100" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary from-control w-100 fs-3"
              >
                {Edit ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <table className="table table-bordered table-hover mt-5">
          <thead>
            <tr>
              <th className="fs-2">Name</th>
              <th className="fs-2">Email</th>
              <th className="fs-2">Address</th>
              <th className="fs-2">Edit</th>
              <th className="fs-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((Users, index) => {
              return (
                <tr>
                  <td className="fs-4">{Users.Name}</td>
                  <td className="fs-4">{Users.Email}</td>
                  <td className="fs-4">{Users.Address}</td>
                  <td>
                    <button
                      className="btn btn-info fs-3"
                      onClick={() => onEditClick(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger fs-3"
                      onClick={() => DeleteUsers(Users)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
