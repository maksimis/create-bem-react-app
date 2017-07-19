import React from 'react';
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import AppHeader from 'e:header';
import AppFooter from 'e:footer';
import AppWelcome from 'e:welcome';

import Showcase from 'b:showcase';

export default decl(
  {
    block: 'App',
    content({ welcomeMsg }) {
      return [
        <AppWelcome msg={welcomeMsg} key="welcome" />,
        <Showcase key="showcase" />,
      ];
    },
  },
  {
    Header: AppHeader,
    Footer: AppFooter,
  }
);
