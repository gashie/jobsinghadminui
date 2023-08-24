import {Container} from 'reactstrap'

const ViewReceipt = () => {
  return (
    <>
      <h4
        style={{ color: "#244a59", fontWeight: "bolder" }}
        className="m-4 p-2"
      >
        Cash payment
      </h4>

      <div className="d-flex mt-4" style={{ justifyContent: "space-between" }}>
        <div className="mt-5">
          <p style={{ fontWeight: "bolder" }}>Gashie's Technologies</p>
          <p>23 Independent Avenue,</p>
          <p>334 Silver Lane,</p>
          <p>Accra, Ghana.</p>
        </div>

        <div>
          <p style={{ fontWeight: "bolder", textAlign: "right" }}>
            Invoice Number
          </p>
          <p style={{ textAlign: "right" }}>1025632</p>
          <p style={{ fontWeight: "bolder", textAlign: "right" }}>Date</p>
          <p style={{ textAlign: "right" }}>23/05/23</p>
          <p style={{ fontWeight: "bolder", textAlign: "right" }}>Reference</p>
          <p style={{ textAlign: "right" }}>Invoice number 23</p>
        </div>
      </div>

      <h5 style={{ fontWeight: "bolder" }}>Job Postings</h5>
      <Container>
      <div id="customerList">
        <div className="table-responsive table-card mt-3 mb-1">
          <table
            className="table align-middle table-nowrap"
            id="customerTable"
            style={{ backgroundColor: "white" }}
            border="1px"
          >
            <thead className="table-light">
              <tr>
                <th style={{border: '1px solid black'}}>Description</th>
                <th style={{border: '1px solid black'}}>Amount (GHS)</th>
              </tr>
            </thead>
            <tbody className="list form-check-all">
              <tr>
                <td className="startDate" style={{border: '1px solid black'}}>3 Job postings</td>
                <td className="startDate" style={{border: '1px solid black'}}>500</td>
              </tr>
              <tr>
                <td className="startDate" >
                    <p style={{textAlign: 'right'}} >Total</p>
                </td>
                <td className="startDate" style={{border: '1px solid black'}}>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </Container>
    </>
  );
};

export default ViewReceipt;
