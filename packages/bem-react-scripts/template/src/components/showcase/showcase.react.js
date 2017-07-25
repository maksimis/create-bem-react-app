import React from 'react';

// TODO: https://github.yandex-team.ru/lego/islands/pull/2304
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import Button from 'b:button2 m:theme=normal|action m:size=m';
import Checkbox from 'b:checkbox m:theme=normal m:size=m';

export default decl({
  block: 'showcase',
  willInit() {
    this.state = {
      checked: true,
    };
    this.onChange = () => {
      this.setState({
        checked: !this.state.checked,
      });
    };
  },
  content() {
    return (
      <p>
        <Button theme="action" size="m">Touch me</Button>
        &nbsp;&nbsp;&nbsp;
        <Button theme="normal" size="m">push Me</Button>
        &nbsp;&nbsp;&nbsp;
        <Checkbox
          theme="normal"
          size="m"
          name="wtf"
          id="h"
          checked={this.state.checked}
          onChange={this.onChange}
        />
      </p>
    );
  },
});
