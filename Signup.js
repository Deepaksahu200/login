import React from 'react';
import * as yup from 'yup';

import {sigupSchema} from '../validation/Sigup_validation';

function Signup() {
  const createVali = async (e)=>{
    e.preventDefault();
    let formData ={
      Firstname :e.target[0].value,
      Lastname :e.target[1].value ,
      Email :e.target[2].value ,
      Password:e.target[3].value,
    };
    const isValid = await sigupSchema.isValid(formData);
    console.log("tocheak is validation work or not" , isValid)
  }
  return (
    <form onSubmit={createVali}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default Signup