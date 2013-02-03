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
var thrift = require('./thrift_module/thrift/lib/thrift');
//var thrift = require('thrift');


var DistributedRPC = require('./lib/DistributedRPC.js'),
    ttypes = require('./lib/storm_types.js');

function NodeDRPCClient (hostName, portNo, timeout) {

 if (!hostName || !portNo) {
    throw new Error("NodeDRPCClient initialization error ! Hostname and Port number must be specified.");

 }

 if (typeof(hostName) !== 'string') {
    throw new Error("NodeDRPCClient initialization error ! Hostname must be a string.");
 }


 if (typeof(portNo) !==  'number') {
    throw new Error("NodeDRPCClient initialization error ! PortNo must be a integer.");
 }

 if ( timeout != null && typeof(timeout) !==  'number') {
    throw new Error("NodeDRPCClient initialization error ! Timeout must be a integer.");
 }

 this.hostName = hostName;
 this.portNo = portNo;
 this.timeout = timeout;
}

NodeDRPCClient.prototype = {};


NodeDRPCClient.prototype.execute = function(drpcFunction, drpcFunctionParam, callback ) {

   var connection;

   if (!callback) {
      if (typeof(obj) !== 'function') {   
             throw new Error("NodeDRPCClient initialization error ! Callback must be a function.");
      }
   }

   if (this.timeout) {
      connection = thrift.createConnection(this.hostName, this.portNo, this.timeout);
   } else {
      connection = thrift.createConnection(this.hostName, this.portNo);
   }

   var  client = thrift.createClient(DistributedRPC, connection);

   connection.on('error', function(err) {
      
        if (!callback) {
           callback(err);
        }
   });
  
   client.execute(drpcFunction, drpcFunctionParam, function(err, response) {
 
      
       if (callback) {
         callback(err, response); 
       }
       connection.end();
   });
 
}

module.exports = NodeDRPCClient;
