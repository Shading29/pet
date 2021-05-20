import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import App from './containers/App/index';
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from './configureStore';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from './redux/history';

const fontObserver = new FontFaceObserver('Open Sans', {});

fontObserver.load().then(
  function () {
    window.console.log('Шрифт загружен');
    document.body.classList.add('fontLoaded');
  },
  function () {
    window.console.error('Ошибка загрузки шрифта');
    console.log('');
  },
);

const store = configureStore();

const container = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(container, document.getElementById('app'));
