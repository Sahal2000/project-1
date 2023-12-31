import React, { useState, useEffect } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("john@gmail.com");
    const navigate = useNavigate();

    const employeeData = {firstName,lastName,email};
    console.log(employeeData);

    function saveEmployee(e) {
        e.preventDefault();
        if(employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email !== "") {
            EmployeeService.saveEmployee(employeeData)
            .then(navigate("/employee"))
            .catch(e=>console.log(e));
        } 
        else {
            alert("Please, fill in all emplty");
        }
    }


  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)} type='text' placeholder='Enter First Name'/>
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='Enter Last Name'/>
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Enter Email'/>
                            </div>
                            <button onClick={(e)=>saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to={"/employee"} className='btn btn-danger' href=''>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent