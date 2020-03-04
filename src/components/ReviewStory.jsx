import React from 'react';
import PropTypes from 'prop-types';

const ReviewStory = ({ location }) => {
  const story = location.state;
  return (
    <div>{story.createdBy}</div>
  );
};

ReviewStory.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      createdBy: PropTypes.number,
    }),
  }).isRequired,
};

export default ReviewStory;
