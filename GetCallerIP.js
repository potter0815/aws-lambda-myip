console.log('Loading event');

exports.handler = function(event, context) {
  context.done(null, {"ip" : getFirstIP(event.caller_ip)});
};


//helper
// extracts first IP Address from X-Forwarded-For
// X-Forwarded-For: "88.174.190.200, 54.239.171.45"
function getFirstIP(ip_header) {
    if(ip_header.indexOf(',') > 0) {
        return ip_header.substr(0, ip_header.indexOf(','));
    }
    return ip_header;
}

function showObject(obj) {
  var result = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " , " + obj[p] + "\n";
    } 
  }              
  return result.toString();
}