import React from 'react';
import { decl } from 'bem';

import Footer from 'b:footer';

export default decl({
  block: 'App',
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
