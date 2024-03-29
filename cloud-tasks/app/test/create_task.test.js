/**
 * Copyright 2019 Google LLC
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

const createHttpTaskWithToken = require('../createTask');
const {assert} = require('chai');

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT;
const QUEUE_ID = 'default';
const LOCATION_ID = 'us-central1';
const SERVICE_ACCOUNT =
  'test-invoker@nodejs-docs-samples-tests.iam.gserviceaccount.com'; // Service account for test project.
const URL = 'https://example.com/'; // Fake endpoint that returns status 200.

describe('Cloud Task Sample Tests', () => {
  it('should create a task', async () => {
    const date = new Date();
    const response = await createHttpTaskWithToken(
      PROJECT_ID,
      QUEUE_ID,
      LOCATION_ID,
      URL,
      SERVICE_ACCOUNT,
      date
    );

    const regex_output = new RegExp(
      `projects/${PROJECT_ID}/locations/${LOCATION_ID}/queues/${QUEUE_ID}/tasks/`
    );
    assert.match(response, regex_output);
  });
});
