
function getParamAsObject(){
  var params = location.search.substr(location.search.indexOf("?")+1);
  return JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

function getParam ( key )
{
  var obj = getParamAsObject();
  return eval('obj.'+key);
}

function htmlEncodeURL(str) {
    return String(str).replace(/ /g, '%20').replace( /%2F/g, '/');
}

function htmlDecodeURL(str) {
    return String(str).replace(/%20/g, ' ').replace(/\+/g, ' ').replace(/%2F/g, '/' );
}
