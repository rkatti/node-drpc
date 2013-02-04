/* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This content is released under the MIT License.
http://opensource.org/licenses/MIT
*/


//Contact @rakatti/rakatti@gmail.com for node-drpc support

var NodeDRPCClient = require('node-drpc');


//var hostName = "set hostname here and uncomment this line";
//var portNo = set port No here and uncomment this line, portNo must be integer

var timeout = null;
// leave timeout as null if you dont want a timeout, or else set to a integer value

//var stormFunctionName = "type the storm function name here";
//var stormFunctionParam = "type stormfunction parameter as JSON string here";


var nodeDrpcClient =  new  NodeDRPCClient( hostName, portNo, timeout);

nodeDrpcClient.execute(stormFunctionName, stormFunctionParam, function(err, response) {
  if (err) {
    console.error(err);
    // implement error handling code here
  } else {
    console.log("Storm DRPC Response : ", response);
    // Implement your code here
  }
});
