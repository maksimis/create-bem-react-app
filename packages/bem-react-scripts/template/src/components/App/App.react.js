import React from 'react';
import { decl } from 'bem-react-core';

import Button from 'b:button2 m:theme=normal m:size=m';

export default decl({
  block: 'App',
  content() {
    return (
      <span>
        Welcome to BEM in your <Button theme="normal" size="m">React</Button>
      </span>
    );
  },
});
