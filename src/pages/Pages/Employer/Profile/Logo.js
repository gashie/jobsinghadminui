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
  Spinner,
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

  const handleLogo = () => {
    const formData = new FormData();
    formData.append("companyId", userInfo?.userInfo?.company?.companyId);
    formData.append("appLogo", selectedFile);

    dispatch(updateLogo(formData));
  };

  const { imageLoading, imageError } = useSelector((state) => ({
    imageLoading: state.Login.updateLogoLoading,
    imageError: state.Login.updateLogoError,
  }));

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
            <Input
              type="file"
              className="form-control p-3"
              id="websitetext"
              placeholder="Enter Company Name"
              style={{ border: "1px solid #e0e0e0" }}
              onChange={handleFileChange}
            />
          </Col>
          <Button
            style={{ backgroundColor: "#244a59" }}
            disabled={imageError || !selectedFile || imageLoading}
            className="btn btn-dark px-5 mt-4 p-3"
            onClick={() => {
              handleLogo();
            }}
          >
            {imageLoading ? (
              <Spinner size="sm" className="me-2">
                {" "}
                Loading...{" "}
              </Spinner>
            ) : null}
            Save
          </Button>

          <div className="py-5">
            <h4 className="">Your Current logo</h4>

            <Col
              style={{
                position: "relative",

                marginTop: "4rem",
              }}
              xl={3}
              md={4}
              xs={7}
            >
              <p style={{ textAlign: "center" }}>
                <img
                  src={
                    "https://108.166.181.225:5050/uploads/image/logos/" +
                    userInfo?.userInfo?.company?.companyLogo
                  }
                  alt="profile-img"
                  className="avatar-xxl"
                ></img>
              </p>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLogo;
