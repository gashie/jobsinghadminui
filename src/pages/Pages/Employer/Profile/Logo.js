import {
  Card,
  CardTitle,
  Container,
  Row,
  Col,
  CardImg,
  CardText,
  CardBody,
  Input,
  Button,
  Label,
} from "reactstrap";
//import logo1 from "./logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateLogo } from "../../../../store/actions";
const ProfileLogo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input element
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const handleLogo = () => {
    const formData = new FormData();
    formData.append("companyId", userInfo?.userInfo?.company?.companyId);
    formData.append("appLogo", selectedFile);

    dispatch(updateLogo(formData));
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        className="d-flex mt-5 p-5"
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h5 className="fw-bolder">Modify Your Logo</h5>

          <Col lg={10} className="mt-4">
            <label>Upload Logo</label>
            <label>Upload Logo</label>
            <Input
              type="file"
              className="form-control p-3"
              id="websitetext"
              placeholder="Enter Company Name"
              style={{ border: "1px solid #e0e0e0" }}
              onChange={handleImageChange}
            />
          </Col>
          <Button
            className="btn btn-dark mt-5 p-3 w-50 my-5"
            style={{ backgroundColor: "#244a59" }}
          >
            Save
          </Button>

          <div className="py-5">
          <h4 className="py-5" >
            Your Current logo
          </h4>
          {selectedImage ? (
            <img
              alt="Selected Logo"
              src={selectedImage}
              className="img-fluid avatar-xxl rounded-rectangle px-5"
            />
          ) : (
            <div className="mt-5 ">
              {" "}
              <p >No image selected</p>
            </div>
          )}
        </div>
        </div>

      
      </div>
    </>
  );
};

export default ProfileLogo;
