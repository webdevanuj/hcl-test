import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import PopularCourses from "./PopularCourses";
import './Courses.css'

export default function courses() {

  return (
    <Container fluid>
      <Row className="align-items-center mt-3 mb-5">
        <Col xs lg="8">
          <h1 className="courseHeading">Most Popular Courses</h1>
        </Col>
        <Col xs lg="4">
          <Dropdown className="courstSortDropdown d-inline">
            <Dropdown.Toggle variant="success" id="dropdown-basic">Popular</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Rating</Dropdown.Item>
              <Dropdown.Item>Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button size="lg">View All Course</Button>
        </Col>
      </Row>
      <Row className="mb-5">
        <PopularCourses />
      </Row>
    </Container>
  );
}
