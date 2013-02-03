/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements. See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership. The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var NodeDRPCClient = require('node-drpc');


//var hostName = "set hostname here and uncomment this line";
//var portNo = set port No here and uncomment this line, portNo must be integer

var timeout = null;
// leave timeout as null if you dont want a timeout, or else set to a integer value

var nodeDrpcClient =  new  NodeDRPCClient( hostName, portNo, timeout);

nodeDrpcClient.execute('exclamation', 'Hello', function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log("client stored:", response);
  }
});
