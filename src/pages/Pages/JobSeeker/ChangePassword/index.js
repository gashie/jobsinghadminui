import React from "react";
import {Col, Label, Input, Row } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

function ChangePassword() {
  return (
    <>
    <h5>Change Password</h5>
    <p>Your new password must contain at least 6 characters and a number</p>
     <div className="mb-3 col-xl-5 mt-5">
<Label htmlFor="employeeName" className="form-label" style={{fontSize: '0.8rem'}}>Currnet Password</Label>
    <Input type="password" className="form-control" id="employeeName" placeholder="Currnet Password"/>
</div>
<div className="mb-3 col-xl-5">
    <Label htmlFor="employeeUrl" className="form-label" style={{fontSize: '0.8rem'}}>New Password</Label>
    <Input type="password" className="form-control" id="employeeUrl" placeholder="New Password"/>
</div>
<div className="mb-3 col-xl-5">
    <Label htmlFor="StartleaveDate" className="form-label" style={{fontSize: '0.8rem'}}>Confirm New password</Label>
    <Input type="password" className="form-control" id="employeeUrl" placeholder="Confirm New Password"/>
</div>


<div className="text-end">
    <button type="submit" className="btn " style={{
        backgroundColor: '#244a59', color: 'white', width: '100%'
    }}>Submit</button>
</div>
    </>
  );
}

export default ChangePassword;
