# Node-DRPC  -- Simple Storm DRPC wrapper

## Install

<pre>
  npm install node-drpc
</pre>

Or from source:

<pre>
  git clone git://github.com/rkatti/node-drpc.git
  cd node-drpc
  npm link
</pre>

## Super simple to use

Want to connect your Javascript application with Storm Framework, use node-drpc. Node-DRPC is a Storm DRPC client in javascript for nodejs. The client encapsulates Storm-thrift related details. You can simply connect to any DRPC client by passing in the hostname/ipaddress and port no. of the target DRPC server.


```javascript
var nodeDrpc = require('node-drpc');

//Note : timeout is optional
var nodeDrpcClient =  new  nodeDrpc( hostName, portNo, timeout);

nodeDrpcClient.execute( Storm function Name, Storm function parameter as JSON string, function(err, response) {
  if (err) {
    console.error(err);
    // implement error handling logic here
  } else {
    console.log("Storm function response :", response);
    // implement your logic here
  }
});


```


## Licence

Node-DRPC is licenced under the MIT licence. 
