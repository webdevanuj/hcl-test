import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PlayCircle, People } from "react-bootstrap-icons";
import "./index.css";
import CourseRating from "./CourseRating";

const PopularCourses = (props) => {
  const {
    courseId,
    courseImg,
    courseTag,
    courseName,
    coursePrice,
    courseVideos,
    enrolledStudent,
    rating,
    votes,
  } = props;

  /* const handleRating = (rate) => {
    localStorage.setItem(props.id, rate)
    setRating(rate)
  } */

  return (
    <Col md="6" lg="4">
      <Card className="courseCard">
        <Card.Img variant="top" src={courseImg} className="courseImg" />
        <Card.Body>
          <Row className="align-items-center">
            <Col md="6" className="courseTag">
              {courseTag}
            </Col>
            <Col md="6" className="text-end coursePrice">
              {coursePrice}
            </Col>
          </Row>

          <Card.Title className="courseName">{courseName}</Card.Title>

          <div className="featured align-items-center d-flex">
            <span>
              <i className="icon">{<PlayCircle />}</i>
              {courseVideos}
            </span>
            <span>
              <i className="icon">
                <People />
              </i>
              {enrolledStudent}
            </span>
          </div>
        </Card.Body>
        <Card.Footer>
          <Row className="align-items-center">
            <Col>
              <div className="courseRating">
                <i className="icon">
                  <CourseRating id={courseId} votes={votes} rating={rating} />
                </i>
                {votes}
              </div>
            </Col>
            <Col className="text-end">
              <Button variant="primary">Enroll</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PopularCourses;
