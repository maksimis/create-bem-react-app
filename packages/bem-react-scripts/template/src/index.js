import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import BPage from 'b:b-page';
import App from 'b:App';

export const mainView = props => (
  <BPage mix={{ block: 'b-page', elem: 'body' }}>
    <App.Header />
    <App {...props} />
    <App.Footer />
  </BPage>
);

if (typeof window !== 'undefined') {
  const initialProps = window.APP_PROPS || {
    welcomeMsg: 'Welcome to Lego on React',
  };

  // client only
  ReactDOM.render(mainView(initialProps), document.getElementById('root'));
}
