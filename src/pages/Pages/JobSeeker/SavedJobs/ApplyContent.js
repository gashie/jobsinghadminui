import React, { useState } from "react";
import { Form, Col, Row, Label, Card, Input } from "reactstrap";
import { Link } from "react-router-dom";
import jobLocations from "../../../../common/data/cities.json";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
import { useFormik } from "formik";

function ApplyContent({ handleNext }) {
  const [selectedFilesSelfie, setselectedFilesSelfie] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // New state for email
  const [educationLevel, setEducationLevel] = useState(""); // New state for education level
  const [experienceLevel, setExperienceLevel] = useState(""); // New state for experience level

  const [firstInfo, setFirstInfo] = useState({});

  

  


  

 
  return (
    <>
   
    </>
  );
}

export default ApplyContent;
