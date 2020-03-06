/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import UserSvg from '../asset/images/user.svg';
import { mq } from '../configs/styleConfigs';
import { toggleSideNav } from '../actions/navActions';

const TopNav = () => {
  const userFirstName = useSelector((state) => state.auth.user.first_name);
  const sideNavStatus = useSelector((state) => state.nav.sideNavStatus);
  const dispatch = useDispatch();

  const toggleSideNavClick = () => {
    const status = sideNavStatus === 'show' ? 'hide' : 'show';
    dispatch(toggleSideNav(status));
  };

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        backgroundColor: '#1b5687',
        padding: '0 30px',
        color: '#fff',
        [mq[2]]: {
          padding: '0 10px',
        },
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <i
          css={{ fontSize: '2rem', cursor: 'pointer' }}
          className="ion-android-menu"
          onClick={toggleSideNavClick}
        />
        <h1
          css={{
            margin: '0 0 0 60px',
            [mq[2]]: {
              margin: '0 0 0 20px',
            },
          }}
        >
          PROJ-M
        </h1>
      </div>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <UserSvg css={{ marginRight: '20px' }} />
        <div>{userFirstName}</div>
      </div>
    </div>
  );
};

export default TopNav;
