import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestRoute = ({ component: Component, ...rest }) => {
  const userId = useSelector((state) => state.auth.user.id);
  const role = useSelector((state) => state.auth.role);
  let redirectUrl = '/createStory';
  if (role === 'Admin') redirectUrl = '/viewStories';
  return (
    <Route
      {...rest}
      render={
        (props) => (
          !userId ? <Component {...props} />
            // redirect if user is logged in
            : <Redirect to={redirectUrl} />
        )
      }
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default GuestRoute;
