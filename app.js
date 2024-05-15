// Copyright 2024 kairaknight
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * node module
 */

const cors = require('cors');
const cookieParser = require('cookie-parser');


/**
 * custom modules
 */
const login = require('./src/routes/login.route');


// instial express app

const express = require('express');
const app = express();


/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));


/**
 * Enable cors and cookie parser
 */
app.use(cors()).use(cookieParser());


/**
 * EJS settings
 */
app.set('view engine','ejs');


/**
 * login page
 */
app.use('/login', login);


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});