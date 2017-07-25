import React from 'react';

// TODO: https://github.yandex-team.ru/lego/islands/pull/2304
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import logo from 't:svg';

import i18n from 'b:app t:i18n';

export default decl({
  block: 'app',
  elem: 'welcome',
  content({ msg }) {
    return [
      <img src={logo} className="app__logo" alt="logo" key="img" />,
      <h2 key="h2">{msg}</h2>,
      <h3 key="h3">{i18n('text')}</h3>,
      <h3 key="h3-lego">{i18n('second-text', { heart: `💛 ` })}</h3>,
    ];
  },
});
