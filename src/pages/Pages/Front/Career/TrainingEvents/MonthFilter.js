import { Col, Row } from "reactstrap";

const MonthFilter = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio5"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="productBrandRadio5">
              Januanry
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio4"
            />
            <label className="form-check-label" htmlFor="productBrandRadio4">
              March
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              May
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              July
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              September
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              November
            </label>
          </div>
        </Col>
        <Col>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio5"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="productBrandRadio5">
              Feburary
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio4"
            />
            <label className="form-check-label" htmlFor="productBrandRadio4">
              April
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              June
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              August
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              October
            </label>
          </div>
          <div className="form-check">
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id="productBrandRadio3"
            />
            <label className="form-check-label" htmlFor="productBrandRadio3">
              December
            </label>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MonthFilter;
