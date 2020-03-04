/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { inputStyle } from '../configs/styleConfigs';

const fieldMarginBottom = {
  marginBottom: '20px',
};

const textAreaStyle = {
  lineHeight: '1.4',
  height: '120px',
};

const StoryFormInputs = ({
  summary, setSummary, description, setDescription, type, setType,
  complexity, setComplexity, estimatedHrs, setEstimatedHrs, cost, setCost,
}) => (
  <div>
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
      placeholder="Description"
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
  </div>
);

StoryFormInputs.propTypes = {
  summary: PropTypes.string.isRequired,
  setSummary: PropTypes.func,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func,
  complexity: PropTypes.string.isRequired,
  setComplexity: PropTypes.func,
  estimatedHrs: PropTypes.string.isRequired,
  setEstimatedHrs: PropTypes.func,
  cost: PropTypes.string.isRequired,
  setCost: PropTypes.func,
};

StoryFormInputs.defaultProps = {
  setSummary: () => {},
  setDescription: () => {},
  setType: () => {},
  setComplexity: () => {},
  setEstimatedHrs: () => {},
  setCost: () => {},
};

export default StoryFormInputs;
