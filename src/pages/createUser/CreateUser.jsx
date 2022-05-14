import React from 'react';
import "./createuser.css";

export default function CreateUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="userCreateForm">
              <div className="userCreateItem">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" className="userCreateInput" />
              </div>
              <div className="userCreateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="annabeck doe"
                  className="userCreateInput"
                />
              </div>
              <div className="userCreateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userCreateInput"
                />
              </div>
              <div className="userCreateItem">
                <label>Password</label>
                <input
                  type="password"
                  className="userCreateInput"
                />
              </div>
              <div className="userCreateItem">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="+234 8167188741"
                  className="userCreateInput"
                />
              </div>
              <div className="userCreateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="29 Bailey Street,Abule Ijesha,Yaba,Lagos"
                  className="userCreateInput"
                />
              </div>
              <div className="userCreateItem">
                <label>Gender</label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
              </div>
          </form>
    </div>
  )
}
