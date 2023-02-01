import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import queryString from 'query-string';


export default function Home() {


  const [phone, setPhone] = useState("")
  let nevigate = useNavigate();

  

  const formSubmit = (e) => {

    e.preventDefault()
    if (phone.length === 0) {
      alert("password not support");
      return
    }
    

    const singData = localStorage.getItem("users")
    

    const AllData = JSON.parse(singData);

    if (typeof AllData === "undefined" || AllData === null) {
      alert("need to register")
      
      
      nevigate(`register?mobile=${phone}`);
      return
    }

    const obj = AllData.filter((item) => {
      return item.phone === phone
    })


    

    if (obj.length===0) {
      alert(" you need to register")
      
      nevigate(`register?mobile=${phone}`);
    } else {
      nevigate("/password", { state: { obj: obj } })
    }
  }


   
  return (

    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="container mt-5">

          <h2 className="mb-3">Login</h2>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Enter your mobile number
              </label>
              <input className="form-control" 
              type="number" 
              id="phone" 
              onChange={(e) => { setPhone(e.target.value) }} />
            </div>

            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
