import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function CourseRating (props) {

  const ratingDefault = props.rating;
  const [rating, setRating] = useState(ratingDefault);

  const handleRating = (rate) => {
    const lastRating = localStorage.getItem(props.id) ? localStorage.getItem(props.id) : props.rating;

    const courseRating = parseInt(lastRating) + parseInt(rate);
    localStorage.setItem(props.id, courseRating)

    const courseCurrRating = parseInt(courseRating) / parseInt(props.votes);
    console.log(courseCurrRating)
    setRating(courseCurrRating)
  }

  return (
      <Rating
        onClick={handleRating}
        initialValue={rating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='#ddd'
      />
  )
};
