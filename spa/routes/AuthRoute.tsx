import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface IProps {
  component: React.FC<RouteComponentProps>;
}

// eslint-disable-next-line react/prop-types
const ProtectedRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
