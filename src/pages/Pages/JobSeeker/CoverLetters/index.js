import {Table, Button, Col} from 'reactstrap'
import data from './data'
import {Link} from 'react-router-dom'

const CoverLetters = () =>{
    return (
        <>
         <div style={{display: "flex", justifyContent: 'space-between'}}>
      <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
        My Alerts
      </h5>

      <Button className="btn btn-dark" style={{backgroundColor: '#244a59'}}
    //   onClick={()=>{
    //     setCreate(true)
    //   }}
      >
     Add cover letter
      </Button>
      </div>
      <Col className="m-5">
        <div className="table-responsive">
          <Table className="align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Inserted</th>
                <th scope="col">Updated</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                <th scope="col">View</th>
                <th scope="col">Duplicate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a, key) => (
                <tr key={key}>
                  <th scope="row">
                    <Link to="#" className="fw-medium">
                      {a.name}
                    </Link>
                  </th>
                 
                  <td>{a.inserted}</td>
                  <td>{a.updated}</td>
                  <td>{a.edit}</td>
                 
                  <td>
                    <p
                      style={{
                        color: "red",
                        cursor: 'pointer'
                      }}
                    >
                      {a.delete}
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        color: "#244a59", 
                        cursor: 'pointer'
                      }}
                    >
                      {a.view}
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        color: "#244a59",
                        cursor: 'pointer'
                      }}
                    >
                      {a.duplicate}
                    </p>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col> 
        </>
    )
}

export default CoverLetters;