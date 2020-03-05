/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { activeRoute } from '../actions/navActions';
import { createStory, storeCreatedStory } from '../actions/storyActions';
import { reset } from '../actions/generalActions';
import {
  mq, inputStyle, inputButtonStyle, baseAlertStyle, containerStyle,
} from '../configs/styleConfigs';
import Loading from './Loading';
import StoryFormInputs from './StoryForm';

const fieldMarginBottom = {
  marginBottom: '20px',
};

const CreateStory = () => {
  const isLoading = useSelector((state) => state.story.isLoading);
  const success = useSelector((state) => state.story.success);
  const created = useSelector((state) => state.story.created);
  const userRole = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.user.id);
  const apiErrMsg = useSelector((state) => state.story.errors.message);
  const dispatch = useDispatch();
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [estimatedHrs, setEstimatedHrs] = useState('');
  const [cost, setCost] = useState('');


  useEffect(() => {
    dispatch(activeRoute('createStory'));
    return () => {
      dispatch(activeRoute(''));
    };
  }, [dispatch]);

  useEffect(() => (() => dispatch(reset())), [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      createdBy: userId,
      summary,
      description,
      type,
      complexity,
      estimatedHrs,
      cost,
    };
    dispatch(createStory(formData));
  };

  useEffect(() => {
    const formData = {
      createdBy: userId,
      summary,
      description,
      type,
      complexity,
      estimatedHrs,
      cost,
    };
    if (created) {
      // save created story on redux store since the mock api do not return it
      dispatch(storeCreatedStory(formData));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [created]);

  return (
    <div css={[containerStyle]}>
      <Loading isLoading={isLoading} />
      {/* Only users should be able to access this route */}
      {userRole === 'Admin' && <Redirect to="/viewStories" />}
      <form
        onSubmit={handleSubmit}
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
        {apiErrMsg && <div css={[baseAlertStyle, fieldMarginBottom]}>{apiErrMsg}</div>}
        <h1>Create story</h1>
        <StoryFormInputs
          summary={summary}
          setSummary={setSummary}
          description={description}
          setDescription={setDescription}
          type={type}
          setType={setType}
          complexity={complexity}
          setComplexity={setComplexity}
          estimatedHrs={estimatedHrs}
          setEstimatedHrs={setEstimatedHrs}
          cost={cost}
          setCost={setCost}
        />
        <input
          css={[inputStyle, inputButtonStyle]}
          type="submit"
          value="Create Story"
        />
      </form>
      {success && <Redirect to="/viewStories" />}
    </div>
  );
};

export default CreateStory;
