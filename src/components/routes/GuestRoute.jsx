import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestRoute = ({ component: Component, ...rest }) => {
  const userId = useSelector((state) => state.auth.user.id);
  const redirectUrl = '/';
  return (
    <Route
      {...rest}
      render={
        (props) => (
          !userId ? <Component {...props} />
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
