/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const sinon = require('sinon');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

const sample = require('../');

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

describe('functions_concepts_error_object', () => {
  it('should demonstrate error type behavior', () => {
    const objError = new Error('Error object!');

    const req = {body: {throwAsString: true}};
    const res = {end: sinon.stub()};

    sample.errorTypes(req, res);
    assert.deepStrictEqual(console.error.getCall(0).args, [objError]);
  });
});
