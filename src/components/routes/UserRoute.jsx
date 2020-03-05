/* eslint-disable no-useless-escape */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNav from '../TopNav';
import SideNav from '../SideNav';
import {
  userComponentContainerStyle, sideNavContainerStyle,
} from '../../configs/styleConfigs';

/**
 * UserRoute - wraps user / admin components, injecting nav and validation
 * @param {*} props props
 */
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
              <div css={{ display: 'flex' }}>
                <div css={[userComponentContainerStyle(sideNavStatus)]}>
                  <SideNav />
                </div>
                <div css={[sideNavContainerStyle(sideNavStatus)]} />
                <div css={{ width: '100%' }}>
                  <Component {...props} />
                </div>
              </div>
            </div>
          )
          // redirect if no logged in user
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
