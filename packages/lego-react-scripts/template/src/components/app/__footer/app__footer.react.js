import React from 'react';

// TODO: https://github.yandex-team.ru/lego/islands/pull/2304
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import Footer from 'b:footer';

export default decl({
  block: 'app',
  elem: 'footer',
  content() {
    return (
      <Footer
        start="2005"
        tld="ru"
        region="ru"
        statUrl="//stat.yandex.ru/stats.xml?ReportID=-225&amp;ProjectID=1"
      />
    );
  },
});
