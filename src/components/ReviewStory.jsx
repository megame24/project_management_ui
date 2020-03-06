/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  mq, inputStyle, inputButtonStyle, containerStyle, baseAlertStyle,
} from '../configs/styleConfigs';
import StoryFormInputs from './StoryForm';
import { updateStatus } from '../actions/storyActions';
import { reset } from '../actions/generalActions';
import Loading from './Loading';

const ReviewStory = ({ location }) => {
  const isLoading = useSelector((state) => state.story.isLoading);
  const apiErrMsg = useSelector((state) => state.story.errors.message);
  const userRole = useSelector((state) => state.auth.role);
  const success = useSelector((state) => state.story.success);
  const dispatch = useDispatch();
  const story = {
    summary: '',
    description: '',
    type: '',
    complexity: '',
    estimated_hrs: '',
    cost: '',
    ...location.state,
  };

  const updateStatusClick = (storyId, status) => {
    dispatch(updateStatus(storyId, status));
  };

  // reset errors and success toggles when un-mounting component
  useEffect(() => (() => dispatch(reset())), [dispatch]);

  return (
    <div css={[containerStyle]}>
      <Loading isLoading={isLoading} />
      {/* This route is only accessible to admins */}
      {userRole === 'User' && <Redirect to="/viewStories" />}
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
        {apiErrMsg && <div css={[baseAlertStyle, { width: '50%', margin: '0 auto' }]}>{apiErrMsg}</div>}
        <h1>Review story</h1>
        <StoryFormInputs
          summary={story.summary}
          description={story.description}
          type={story.type}
          complexity={story.complexity}
          estimatedHrs={`${story.estimated_hrs}`}
          cost={`${story.cost}`}
        />
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            css={[inputStyle, inputButtonStyle, { width: '45%', margin: '0' }]}
            type="button"
            value="Approve"
            onClick={() => updateStatusClick(story.id, 'Approved')}
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
            onClick={() => updateStatusClick(story.id, 'Rejected')}
          />
        </div>
      </div>
      {success && <Redirect to="/viewStories" />}
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
      estimated_hrs: PropTypes.number,
      cost: PropTypes.number,
    }),
  }).isRequired,
};

export default ReviewStory;
