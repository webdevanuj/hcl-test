import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PlayCircle, People } from "react-bootstrap-icons";
import "./index.css";
import CourseRating from "./CourseRating";
import { MockData } from "../CoursesMockData";
import { getLocalStorage, setLocalStorage } from "../utils";

const PopularCourses = (props) => {

  const Data = MockData.courses;
  const [courseVoting, setCourseVoting] = useState([]);

  const setData = Data.map((res) => {
    const rating = getLocalStorage(res.courseId) ?
                    JSON.parse(getLocalStorage(res.courseId)).rating :
                    res.rating;
    const votes = getLocalStorage(res.courseId) ?
                    JSON.parse(getLocalStorage(res.courseId)).votes :
                    res.votes;
    const ratingData = JSON.stringify({rating: rating, votes: votes});

    setLocalStorage(res.courseId,ratingData );
    return {
        ...res,
        rating,
        votes
    };

  });

  const sortedData = setData.sort((a, b) => {
    return parseInt(b.rating) - parseInt(a.rating);
  });

  const handleVoting = (voting) => {
    setCourseVoting(voting);
  }

  return (
    <>
      {Data &&
        sortedData.map((res) => {
            const rating = getLocalStorage(res.courseId) ?
            JSON.parse(getLocalStorage(res.courseId)).rating :
            res.rating;

            const votes = getLocalStorage(res.courseId) ?
            JSON.parse(getLocalStorage(res.courseId)).votes :
            res.votes;

          return (
            <Col md="6" lg="4" key={res.courseId}>
              <Card className="courseCard">
                <Card.Img
                  variant="top"
                  src={res.courseImg}
                  className="courseImg"
                />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md="6" className="courseTag">
                      {res.courseTag}
                    </Col>
                    <Col md="6" className="text-end coursePrice">
                      {res.coursePrice}
                    </Col>
                  </Row>

                  <Card.Title className="courseName">
                    {res.courseName}
                  </Card.Title>

                  <div className="featured align-items-center d-flex">
                    <span>
                      <i className="icon">{<PlayCircle />}</i>
                      {res.courseVideos}
                    </span>
                    <span>
                      <i className="icon">
                        <People />
                      </i>
                      {res.enrolledStudent}
                    </span>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Row className="align-items-center">
                    <Col>
                      <div className="courseRating">
                        <i className="icon">
                          <CourseRating
                            id={res.courseId}
                            votesDefault={votes}
                            ratingDefault={rating}
                            handleVoting={handleVoting}
                          />
                        </i>
                        {votes} Votes
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
        })
      }
    </>
  );
};

export default PopularCourses;
