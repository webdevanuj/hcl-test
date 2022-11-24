import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import PopularCourses from "./PopularCourses";
import { MockData } from './CoursesMockData';
import './Courses.css'

export default function courses() {
    const Data = MockData.courses
    .sort( (a, b) => { return parseInt(b.rating) - parseInt(a.rating)});

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
        {Data && Data.map((res) => {
            return (<PopularCourses key={res.courseId} courseId={res.courseId} courseImg={res.courseImg} courseTag={res.courseTag} courseName={res.courseName} coursePrice={res.coursePrice} courseVideos={res.courseVideos} enrolledStudent={res.enrolledStudent} votes={res.votes} rating={res.rating}/>)
        })
        }
      </Row>
    </Container>
  );
}
