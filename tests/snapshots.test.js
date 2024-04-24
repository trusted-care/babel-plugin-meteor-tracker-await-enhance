/**
 * We're using jest + `babel-test` to load & compare transpiled files using a before / after
 * mechanism utilizing jests' snapshot functionality.
 *
 * See here for babel-test docs: https://github.com/satya164/babel-test
 */

import path from 'path'
import { create } from 'babel-test'

// jest individual files snapshot support
import { toMatchFile } from 'jest-file-snapshot'

// add toMatchFile expect matcher which allows babel-test to support the jest snapshot mechanism
expect.extend({ toMatchFile });

// load plugin & prepare config
const {fixtures} = create({
    plugins: [require.resolve('../babel-plugin-meteor-tracker-async-enhance.js')],
})

// run fixtures from `fixtures` folder
fixtures('my plugin', path.join(__dirname, 'fixtures'))
