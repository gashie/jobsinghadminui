import React, { useMemo } from "react";
import { Card, Col, Row, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import TableContainer from "../../../Components/Common/TableContainerReactTable";

function MyCoverLetters() {
  const paginationTable = [
    {
      id: "#VL2111",
      name: "Jonathan",
      date: "07 Oct, 2021",
      total: "$24.05",
      status: "Paid",
    },
    {
      id: "#VL2110",
      name: "Harold",
      date: "07 Oct, 2021",
      total: "$26.15",
      status: "Paid",
    },
    {
      id: "#VL2109",
      name: "Shannon",
      date: "06 Oct, 2021",
      total: "$21.25",
      status: "Refund",
    },
    {
      id: "#VL2108",
      name: "Robert",
      date: "05 Oct, 2021",
      total: "$25.03",
      status: "Paid",
    },
    {
      id: "#VL2107",
      name: "Noel",
      date: "05 Oct, 2021",
      total: "$22.61",
      status: "Paid",
    },
    {
      id: "#VL2106",
      name: "Traci",
      date: "04 Oct, 2021",
      total: "$24.05",
      status: "Paid",
    },
    {
      id: "#VL2105",
      name: "Kerry",
      date: "04 Oct, 2021",
      total: "$26.15",
      status: "Paid",
    },
    {
      id: "#VL2104",
      name: "Patsy",
      date: "04 Oct, 2021",
      total: "$21.25",
      status: "Refund",
    },
    {
      id: "#VL2103",
      name: "Cathy",
      date: "03 Oct, 2021",
      total: "$22.61",
      status: "Paid",
    },
    {
      id: "#VL2102",
      name: "Tyrone",
      date: "03 Oct, 2021",
      total: "$25.03",
      status: "Paid",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (cellProps) => {
          return (
            <Link to="#" className="fw-medium">
              {cellProps.id}
            </Link>
          );
        },
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Total",
        accessor: "total",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps) => {
          switch (cellProps.status) {
            case "Paid":
              return (
                <span className="badge badge-soft-success text-uppercase">
                  {" "}
                  {cellProps.status}
                </span>
              );
            case "Refund":
              return (
                <span className="badge badge-soft-warning text-uppercase">
                  {" "}
                  {cellProps.status}
                </span>
              );
            default:
              return (
                <span className="badge badge-soft-danger text-uppercase">
                  {" "}
                  {cellProps.status}
                </span>
              );
          }
        },
      },
      {
        Header: "Actions",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps) => {
          return <React.Fragment>Details</React.Fragment>;
        },
      },
    ],
    []
  );

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">Pagination</h5>
            </CardHeader>
            <CardBody>
              <TableContainer
                columns={columns || []}
                data={paginationTable || []}
                isPagination={true}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={5}
                className="custom-header-css table align-middle table-nowrap"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
                SearchPlaceholder="Search Products..."
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MyCoverLetters;
