import React from 'react';
import GlobalStyle from '../../global-styles';
import { IProps, IState } from './types';
import { AppWrapper } from './wrappers';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../routes/AuthRoute';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import { connect } from 'react-redux';
import { compose } from 'redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import injectSaga from '../../redux/injectSaga';
import saga from './saga';

class App extends React.Component<IProps, IState> {
  render() {
    console.log('rerender');
    return (
      <AppWrapper>
        <Switch>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*// @ts-ignore*/}
          <ProtectedRoute exact path="/" component={HomePage} />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*// @ts-ignore*/}
          <ProtectedRoute path="/login" component={LoginPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   clientFillPage: makeSelectClientFillPage(),
// });
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     getIframeLink: ev => dispatch(getIframeLink(ev)),
//     clearIframeLink: () => dispatch(clearIframeLink()),
//   };
// }

const withConnect = connect(null, null);
const withSaga = injectSaga({ key: 'global', saga });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withRouter(compose(withSaga, withConnect)(App));
