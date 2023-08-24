import { Button } from "reactstrap";

const ProfileLogo = () => {
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
             <input type="file"  style={{border: "1px solid gray", borderRadius: "0.5rem"}} className="p-2"></input>
      </div>

      <div className="mt-5">
          <Button className="btn btn-dark" style={{backgroundColor: '#244a59'}}>
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
