/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mq, inputStyle, inputButtonStyle } from '../configs/styleConfigs';
import StoryFormInputs from './StoryForm';
import { updateStatus } from '../actions/storyActions';
import { reset } from '../actions/generalActions';

const ReviewStory = ({ location }) => {
  const userRole = useSelector((state) => state.auth.role);
  const success = useSelector((state) => state.story.success);
  const dispatch = useDispatch();
  const story = {
    summary: '',
    description: '',
    type: '',
    complexity: '',
    estimatedHrs: '',
    cost: '',
    ...location.state,
  };

  const updateStatusClick = (storyToUpdate) => {
    dispatch(updateStatus(storyToUpdate));
  };

  useEffect(() => (() => dispatch(reset())), [dispatch]);

  return (
    <div
      css={{
        width: '100%',
        padding: '50px',
        [mq[3]]: {
          padding: '30px',
        },
        [mq[1]]: {
          padding: '10px',
        },
      }}
    >
      {
        userRole === 'User' && <Redirect to="/viewStories" />
      }
      <div
        css={{
          width: '50%',
          [mq[3]]: {
            width: '70%',
          },
          [mq[1]]: {
            width: '100%',
          },
        }}
      >
        <h1>Review story</h1>
        <StoryFormInputs
          summary={story.summary}
          description={story.description}
          type={story.type}
          complexity={story.complexity}
          estimatedHrs={`${story.estimatedHrs}`}
          cost={`${story.cost}`}
        />
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            css={[inputStyle, inputButtonStyle, { width: '45%', margin: '0' }]}
            type="button"
            value="Approve"
            onClick={() => updateStatusClick({ summary: story.summary, status: 'approved' })}
          />
          <input
            css={[
              inputStyle,
              inputButtonStyle,
              {
                width: '45%',
                margin: '0',
                backgroundColor: '#e74b4b',
                '&:hover': {
                  backgroundColor: '#ca1c1c',
                },
              }]}
            type="button"
            value="Reject"
            onClick={() => updateStatusClick({ summary: story.summary, status: 'rejected' })}
          />
        </div>
      </div>
      {
        success && <Redirect to="/viewStories" />
      }
    </div>
  );
};

ReviewStory.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      summary: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      complexity: PropTypes.string,
      estimatedHrs: PropTypes.number,
      cost: PropTypes.number,
    }),
  }).isRequired,
};

export default ReviewStory;
