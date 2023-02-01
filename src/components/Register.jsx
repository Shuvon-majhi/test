import React, { Component } from 'react'
import _ from "lodash";
import { useState } from 'react';
import queryString from 'query-string';

class Register extends Component {
    state = {
        phone: '',
        name: '',
        password: '',
        cpassword: ''
    }
    
    newuser={
        name:'',
        phone:'',
        password:''
    }
    
    
    fromSubmit = (e) => {
        e.preventDefault()

        
        // console.log(this.state.phone)
        // console.log(this.state.phone.length)


        const numberLenght = this.state.phone.length;
        const NumberValue = this.state.phone;

        const NumberValueArr = NumberValue.toString().split('');

        if ((numberLenght === 11 && NumberValueArr[0] === '0' && NumberValueArr[1] === '1') || (numberLenght === 13 && NumberValueArr[0] === '8' && NumberValueArr[1] === '8')
            || (numberLenght === 14 && NumberValueArr[0] === '+' && NumberValueArr[1] === '8')) {
                if (this.state.password === this.state.cpassword) {
                        let pass = this.state.cpassword
                        const data = {
                            phone: this.state.phone,
                            name: this.state.name,
                            password: pass
                        }


                        let userList=localStorage.getItem("users");

                        userList = JSON.parse(userList);
                       
                        userList.push(data);

                        localStorage.setItem("users",JSON.stringify(userList))

                        alert("Insert Successfull")
                        window.location.href = "/";
            
            
                    } else {
                        alert("Password Not Match")
                    }

                    window.location.href = "/";
        } else {
            alert("Enter right number")
        }
    }
    

    render() {
        const parsed = queryString.parse(window.location.search);
        console.log(parsed); 

        return (
            
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container mt-5">
                        <h2 className="mb-3">Register</h2>
                        <form onSubmit={this.fromSubmit}>


                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" 
                                type="number"

                                value={parsed.mobile} 
                                
                                onChange={(e) => { 
                                    this.setState({ phone: e.target.value }) }} 
                                required placeholder="Enter your number" />
                            </div>



                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" 
                                onChange={(e) => { 
                                    this.setState({ name: e.target.value }) }} 
                                    type="text" required 
                                placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" 
                                onChange={(e) => { 
                                    this.setState({ password: e.target.value }) }} 
                                    type="password" 
                                    required placeholder="Create  Password " />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" 
                                onChange={(e) => { 
                                    this.setState({ cpassword: e.target.value }) }} 
                                type="password" 
                                required placeholder="Confirm Password " />
                            </div>

                            <button className="btn btn-danger" type="submit">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        )
    }
}

export default Register