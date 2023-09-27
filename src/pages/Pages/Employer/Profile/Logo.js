import { Button } from "reactstrap";
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateLogo } from "../../../../store/actions";
const ProfileLogo = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input element
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const dispatch = useDispatch()

  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const handleLogo = () =>{
   const formData = new FormData()
   formData.append("companyId", userInfo?.userInfo?.company?.companyId)
   formData.append("appLogo", selectedFile)

   dispatch(updateLogo(formData))

  }

  return (
    <>
      <div className="d-flex m-3" style={{ justifyContent: "space-between" }}>
        <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>Edit Profile</h4>

        <h6
          style={{ cursor: "pointer", border: "1px solid #244a59" }}
          className="p-2"
        >
          Modify your Logo
        </h6>
      </div>

      <div className="d-flex gap-5 mt-5">
      <label>Logo:</label>
      <input
        type="file"
        style={{ border: "1px solid gray", borderRadius: "0.5rem" }}
        className="p-2"
        onChange={handleFileChange}
      />
      {/* Display the selected file name, if any */}
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>

      <div className="mt-5">
          <Button className="btn btn-dark" style={{backgroundColor: '#244a59'}}
          onClick={()=>{
            handleLogo()
          }}
          >
            Save
          </Button>
      </div>

      <div className="mt-5">
          <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>Your current logo</h5>
          <p>You stll didn't upload any logo</p>
      </div>
    </>
  );
};

export default ProfileLogo;
