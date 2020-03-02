import React from 'react';
import { Switch } from 'react-router-dom';
import { Global } from '@emotion/core';
import routes from './configs/routes';

const App = () => (
  <div>
    <Global
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'boarder-box',
          fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        },
        body: {
          color: '#545454',
          fontWeight: 'normal',
          backgroundColor: '#fff',
        },
      }}
    />
    <Switch>
      {
        routes.map((route, index) => (
          <route.type
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))
      }
    </Switch>
  </div>
);

export default App;
