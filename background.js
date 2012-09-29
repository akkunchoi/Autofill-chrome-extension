// 汎用的に使えるように
// ref. http://d.hatena.ne.jp/umezo/20091115/1258291572
var core = {
  /**
   * 
   * @return Object
   */
  "getOptions": function(){
    console.log('getOptions', localStorage);
    return localStorage;
  },
  // 通信したい
}

window.onload = function(){
  /**
   * request: {
   *   action: "...",
   *   args: [a, b, c, ...]
   * }
   **/
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    var ret = (core[request.action] || function(){}).apply(this, request.args);
    sendResponse(ret);
  });
}
