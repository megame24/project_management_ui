/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideNav = () => {
  const activeRoute = useSelector((state) => state.nav.activeRoute);

  return (
    <div
      css={{
        paddingTop: '20px',
        fontSize: '16px',
      }}
    >
      <div
        css={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          css={{
            color: '#fff',
            '&:hover': {
              color: '#fff',
            },
          }}
          to="/createStory"
        >
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
        <Link
          css={{
            color: '#fff',
            '&:hover': {
              color: '#fff',
            },
          }}
          to="/viewStories"
        >
          <i css={{ fontSize: '20px', marginRight: '15px' }} className="ion-ios-list-outline" />
          <span css={{ opacity: '0.6' }}>View Stories</span>
        </Link>
      </div>
      <div css={{ opacity: '0.6', cursor: 'pointer', fontSize: '14px' }}>Logout</div>
    </div>
  );
};

export default SideNav;
