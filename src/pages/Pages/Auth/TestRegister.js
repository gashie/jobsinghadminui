import React, { useState } from "react";
import { Input, Row, Button } from "reactstrap";

function TestRegister() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value})
  };



  return (
    <>
      <div className="m-4">
        <div>
          <h5 className="text-center">Test Register</h5>
        </div>
      </div>

      <Row className="p-4">
        <Input
          name="name"
          placeholder="Enter name"
          type="text"
          onChange={handleChange}
        ></Input>
        <Input
          name="password"
          placeholder="Enter Password"
          type="password"
          className="mt-3"
          onChange={handleChange}
        ></Input>
      </Row>
      <Row className="p-4">
        <Button className="btn btn-light" style={{border: "1px solid #e0e0e0"}}
        onClick={()=>{
            console.log(values)
        }}
        >Submit</Button>
      </Row>
    </>
  );
}

export default TestRegister;
