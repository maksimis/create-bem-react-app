// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const babelJest = require('babel-jest');
const paths = require('../paths');
const levels = paths.appLevels;
const langs = paths.appLangs;

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  plugins: [
    // TODO: https://github.com/babel/babel/pull/5469#issuecomment-317588327
    [require.resolve('babel-plugin-transform-es2015-destructuring'), {}],
    [
      require.resolve('babel-plugin-bem-import'),
      {
        levels,
        langs,
        techs: ['js'],
        // TODO: https://github.com/bem/webpack-bem-loader/issues/25
        naming: 'origin',
        techMap: {
          // TODO: https://github.com/bem/webpack-bem-loader/issues/41
          js: ['react.js'],
        },
      },
    ],
  ],
  babelrc: false,
});
