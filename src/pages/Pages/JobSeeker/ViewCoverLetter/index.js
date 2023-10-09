import { Card, CardBody } from "reactstrap";

const ViewCoverLetter = ({ data }) => {
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <>
      <Card>
        <CardBody className="p-5">
          <h4
            style={{
              color: "#244a59",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {data?.coverLetterName}
          </h4>

          <div
            dangerouslySetInnerHTML={{
              __html: decodeHTML(data?.coverLetterDescription || "Please Select a Cover Letter to view it."),
            }}
          ></div>
        </CardBody>
      </Card>
    </>
  );
};

export default ViewCoverLetter;
