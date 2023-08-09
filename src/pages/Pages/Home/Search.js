import {Row, Col, Input} from 'reactstrap'

const Search = () => {
   return (
    <>
        
              <div className="col-xxl-15 col-md-14">
                <div className="card crm-widget">
                  <div className="card-body p-0">
                    <div
                      className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0 p-5"
                      style={{
                        backgroundColor: "#244A59",
                        display: "flex",
                        justifyContent: "center",
                        height: '55vh'
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
                          height: '20vh', 
                         
                        }}
                      >
                         
                        <div className="col-md-10">
                         
                          <Input
                            type="text"
                            className="form-control form-control-lg bg-light border-light"
                            placeholder="Search for jobs of companies"
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg waves-effect waves-light"
                            style={{
                              backgroundColor: "#244A59",
                              fontSize: "0.8rem",
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
   )
}

export default Search;