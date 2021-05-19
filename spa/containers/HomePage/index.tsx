import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import reducer from './reducer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import injectReducer from '../../redux/injectReducer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import injectSaga from '../../redux/injectSaga';
import saga from './saga';
import history from '../../redux/history';

interface IProps {}

const LoginPage: React.FC<IProps> = (props: IProps) => {
  return <button onClick={() => history.replace('/login')}>Это Home Page!</button>;
};

const withConnect = connect(null, null);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(withReducer, withSaga, withConnect)(LoginPage);
