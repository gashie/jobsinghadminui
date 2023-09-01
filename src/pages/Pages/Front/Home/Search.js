import { Row, Col, Input } from "reactstrap";
import bg from "../../../../assets/images/jobsinghana/bg2.png";
import "./Home.css";
const Search = () => {
  return (
    <>
      <div className="col-xxl-15 col-md-14 text-bg-color" style={{backgroundColor: 'white'}}>
        <div className="card crm-widget">
          <div className="card-body p-0 search-bg">
            <div
              className="row row-cols-xxl-5  row-cols-xxs-10 row-cols-md-3 row-cols-1 g-0 p-5"
              style={{
                display: "flex",
                justifyContent: "center",
                height: "45vh",
              }}
            >
              <div
                className="col-auto mt-5"
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "0.7rem",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  width: "100rem",
                  alignContent: "center",
                  height: "max-content",
                  
                }}
              >
                <div className="col-md-10" style={{ width: "50%" }}>
                  <h6 style={{ fontWeight: "bolder"}}>
                    Search for your new job
                  </h6>
                  <Input
                    type="text"
                    className="form-control form-control-lg bg-light border-light p-4"
                    placeholder="Search for jobs of companies"
                  />
                </div>

                <div className="col-md-2 col-xs-20" style={{width: "50%"}}>
                  <button
                    type="submit"
                    className="btn btn-dark waves-effect waves-light p-4 fs-13"
                    style={{
                      backgroundColor: "#244A59",
                      fontSize: "0.8rem",
                      marginTop: "1.7rem",
                      width: '100%'
                    }}
                  >
                    {" "}
                    Find a Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
