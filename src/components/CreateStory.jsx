/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { activeRoute } from '../actions/navActions';
import { createStory, resetCreateStorySuccess } from '../actions/storyActions';
import {
  mq, inputStyle, inputButtonStyle, baseAlertStyle,
} from '../configs/styleConfigs';
import Loading from './Loading';

const textAreaStyle = {
  lineHeight: '1.4',
  height: '120px',
};

const fieldMarginBottom = {
  marginBottom: '20px',
};

const CreateStory = () => {
  const success = useSelector((state) => state.story.success);
  const userRole = useSelector((state) => state.auth.role);
  const isLoading = useSelector((state) => state.story.isLoading);
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
      dispatch(resetCreateStorySuccess());
    };
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      summary,
      description,
      type,
      complexity,
      estimatedHrs,
      cost,
    };
    dispatch(createStory(formData));
  };

  return (
    <div css={{
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
      <Loading isLoading={isLoading} />
      {
        userRole === 'Admin' && <Redirect to="/viewStories" />
      }
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
        <input
          css={[inputStyle, fieldMarginBottom]}
          type="text"
          value={summary}
          placeholder="Summary"
          name="summary"
          required
          onChange={(event) => setSummary(event.target.value)}
        />
        <textarea
          css={[inputStyle, textAreaStyle, fieldMarginBottom]}
          type="text"
          value={description}
          placeholder="Summary"
          name="description"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <select
          css={[inputStyle, fieldMarginBottom, { height: '40px', backgroundColor: 'transparent' }]}
          placeholder="Select story type"
          required
          value={type}
          onChange={(event) => setType(event.currentTarget.value)}
        >
          <option value="" disabled>Select story type</option>
          <option
            key="enhancement"
            value="enhancement"
          >
            Enhancement
          </option>
          <option
            key="bugfix"
            value="bugfix"
          >
            Bug fix
          </option>
          <option
            key="development"
            value="development"
          >
            Development
          </option>
          <option
            key="qa"
            value="qa"
          >
            QA
          </option>
        </select>
        <select
          css={[inputStyle, fieldMarginBottom, { height: '40px', backgroundColor: 'transparent' }]}
          placeholder="Select story complexity"
          required
          value={complexity}
          onChange={(event) => setComplexity(event.currentTarget.value)}
        >
          <option value="" disabled>Select story complexity</option>
          <option
            key="low"
            value="low"
          >
            Low
          </option>
          <option
            key="mid"
            value="mid"
          >
            Mid
          </option>
          <option
            key="high"
            value="high"
          >
            High
          </option>
        </select>
        <div css={[fieldMarginBottom, { display: 'flex' }]}>
          <input
            css={[inputStyle, { width: '70%' }]}
            type="number"
            value={estimatedHrs}
            placeholder="Estimated time of completion in hours"
            name="estimatedHrs"
            required
            onChange={(event) => setEstimatedHrs(event.target.value)}
          />
          <div css={{ width: '30%', display: 'flex', alignItems: 'center' }}>
            <span css={{
              width: '30%',
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '120%',
              paddingRight: '10px',
            }}
            >
              $
            </span>
            <input
              css={[inputStyle, { width: '70%' }]}
              type="number"
              value={cost}
              placeholder="Cost"
              name="cost"
              required
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <input
          css={[inputStyle, inputButtonStyle]}
          type="submit"
          value="Create Story"
        />
      </form>
      {
        success && <Redirect to="/viewStories" />
      }
    </div>
  );
};

export default CreateStory;
