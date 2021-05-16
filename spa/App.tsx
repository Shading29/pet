import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import App from './containers/App/index';

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

ReactDOM.render(<App />, document.getElementById('app'));
