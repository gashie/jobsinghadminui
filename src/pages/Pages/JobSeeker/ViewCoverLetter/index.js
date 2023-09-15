import { Card, CardBody } from "reactstrap";

const ViewCoverLetter = ({data}) => {
  return (
    <>
      <Card>
        <CardBody className="p-5">
          <h4 style={{ color: "#244a59", fontWeight: "bolder", textAlign :'center' }}>
          {data?.coverLetterName}
          </h4>
          <p style={{textAlign: 'justify'}} className="fs-13 mt-4">
          {data?.coverLetterDescription}
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default ViewCoverLetter;
