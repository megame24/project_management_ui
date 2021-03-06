/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { activeRoute } from '../actions/navActions';
import { baseAlertStyle, containerStyle } from '../configs/styleConfigs';
import Loading from './Loading';
import { reset } from '../actions/generalActions';
import { getStories } from '../actions/storyActions';

const ViewStories = () => {
  const isLoading = useSelector((state) => state.story.isLoading);
  const history = useHistory();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.role);
  const stories = useSelector((state) => state.story.stories);
  const apiErrMsg = useSelector((state) => state.story.errors.message);

  const statusColors = {
    Approved: '#c4ede5',
    Rejected: '#f9d2d2',
  };

  useEffect(() => {
    dispatch(activeRoute('viewStories'));
    dispatch(getStories());
    return () => {
      dispatch(activeRoute(''));
    };
  }, [dispatch]);

  // reset errors and success toggles when un-mounting component
  useEffect(() => (() => dispatch(reset())), [dispatch]);

  const storyClick = (story) => {
    if (userRole === 'User') return;
    history.push('/reviewStory', story);
  };

  return (
    <div css={[containerStyle]}>
      <Loading isLoading={isLoading} />
      {apiErrMsg && <div css={[baseAlertStyle, { width: '50%', margin: '0 auto' }]}>{apiErrMsg}</div>}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Summary</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Complexity</Table.HeaderCell>
            <Table.HeaderCell>Estimated time for completion (hours)</Table.HeaderCell>
            <Table.HeaderCell>Cost associated to it ($)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            stories.map((story, i) => (
              <Table.Row
                onClick={() => storyClick(story)}
                key={i}
                css={{
                  cursor: userRole === 'Admin' ? 'pointer' : 'default',
                  backgroundColor: statusColors[story.status] ? statusColors[story.status] : '#d9d9d9',
                }}
              >
                <Table.Cell>{story.summary}</Table.Cell>
                <Table.Cell>{story.description}</Table.Cell>
                <Table.Cell>{story.type}</Table.Cell>
                <Table.Cell>{story.complexity}</Table.Cell>
                <Table.Cell>{story.estimated_hrs}</Table.Cell>
                <Table.Cell>{story.cost}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default ViewStories;
