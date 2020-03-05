/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/loginActions';

const SideNav = () => {
  const activeRoute = useSelector((state) => state.nav.activeRoute);
  const userRole = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <div css={{ paddingTop: '20px', fontSize: '16px' }}>
      <div
        css={{
          marginBottom: '20px',
          display: userRole === 'User' ? 'flex' : 'none',
          alignItems: 'center',
        }}
      >
        <Link css={{ color: '#fff', '&:hover': { color: '#fff' } }} to="/createStory">
          <i
            css={{
              fontSize: '20px',
              marginRight: '15px',
              color: activeRoute === 'createStory' ? '#f9c10f' : '#fff',
            }}
            className="ion-ios-compose-outline"
          />
          <span css={{ opacity: activeRoute === 'createStory' ? '1' : '0.6' }}>Create Story</span>
        </Link>
      </div>
      <div
        css={{
          marginBottom: '60px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link css={{ color: '#fff', '&:hover': { color: '#fff' } }} to="/viewStories">
          <i
            css={{
              fontSize: '20px',
              marginRight: '15px',
              color: activeRoute === 'viewStories' ? '#f9c10f' : '#fff',
            }}
            className="ion-ios-list-outline"
          />
          <span css={{ opacity: activeRoute === 'viewStories' ? '1' : '0.6' }}>View Stories</span>
        </Link>
      </div>
      <div onClick={logoutClick} css={{ opacity: '0.6', cursor: 'pointer', fontSize: '14px' }}>Logout</div>
    </div>
  );
};

export default SideNav;
