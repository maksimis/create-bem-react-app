import React from 'react';
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import logo from 't:svg';

import i18n from 'b:App t:i18n';

export default decl({
  block: 'App',
  elem: 'welcome',
  content({ msg }) {
    return [
      <img src={logo} className="App__logo" alt="logo" key="img" />,
      <h2 key="h2">{msg}</h2>,
      <h3 key="h3">{i18n('text')}</h3>,
      <h3 key="h3-lego">{i18n('second-text', { heart: `💛 ` })}</h3>,
    ];
  },
});
