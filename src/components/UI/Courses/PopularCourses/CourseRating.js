import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { getLocalStorage, setLocalStorage } from '../utils';

export default function CourseRating (props) {

  const { id, ratingDefault, votesDefault } = props;

  const [rating, setRating] = useState(ratingDefault);

  const handleRating = (rate) => {
    let lastRating = getLocalStorage(id) ? JSON.parse(getLocalStorage(id)).rating : ratingDefault;
    let votes = getLocalStorage(id) ? JSON.parse(getLocalStorage(id)).votes : votesDefault;

    const courseRating = (parseInt(lastRating * votes) + parseInt(rate)) / (votes + 1);

    const ratingData = JSON.stringify({rating: courseRating, votes: votes + 1});

    props.handleVoting(id,votes+1)
    setLocalStorage(id,ratingData );

    setRating(courseRating)
  }

  return (
    <>
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
</>
  )
};
