/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNav from '../TopNav';
import SideNav from '../SideNav';
import { mq } from '../../configs/styleConfigs';

const UserRoute = ({ component: Component, ...rest }) => {
  const userId = useSelector((state) => state.auth.user.id);
  const sideNavStatus = useSelector((state) => state.nav.sideNavStatus);
  const redirectUrl = '/login';

  return (
    <Route
      {...rest}
      render={
        (props) => (
          userId ? (
            <div>
              <TopNav />
              <div
                css={{
                  display: 'flex',
                }}
              >
                <div
                  css={{
                    minWidth: '300px',
                    color: '#fff',
                    backgroundColor: '#0b283c',
                    height: '100vh',
                    padding: '30px',
                    display: sideNavStatus === 'show' ? 'block' : 'none',
                    zIndex: '2',
                    [mq[3]]: {
                      paddingTop: '10px',
                    },
                    [mq[2]]: {
                      padding: '10px 10px',
                    },
                    [mq[1]]: {
                      position: 'absolute',
                      left: '70',
                    },
                  }}
                >
                  <SideNav />
                </div>
                <div
                  css={{
                    width: '100%',
                    position: 'absolute',
                    top: '70',
                    height: '100vh',
                    backgroundColor: '#000',
                    opacity: '0.4',
                    display: 'none',
                    [mq[1]]: {
                      display: sideNavStatus === 'show' ? 'block' : 'none',
                    },
                  }}
                />
                <div
                  css={{
                    width: '100%',
                  }}
                >
                  <Component {...props} />
                </div>
              </div>
            </div>
          )
            : <Redirect to={redirectUrl} />
        )
      }
    />
  );
};

UserRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default UserRoute;
