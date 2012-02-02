/**
 * ログイン設定からinput要素を埋める
 * 
 * @param Object my {cardnum, password, passkey_a...j}
 * @return void
 **/
var fillin = function(my){
  var form;
  var cardnum = $('input[name=CARDNUM][type=text]');
  if (cardnum.size()){
    cardnum.val(my.cardnum);
    /*
    form = $('form[name=MAIN]');
    form.submit();
    */
    return;
  }

  var paswd = $('input[name=PASWD][type=password]');
  if (paswd.size()){
    paswd.val(my.password);
    /*
    form = $('form[name=MAIN2]');
    form.submit();
    */
    return;
  }

  var passKind1 = $('input[name=PASS_KIND1][type=hidden]'); 
  var passKind2 = $('input[name=PASS_KIND2][type=hidden]'); 
  var passKey1 = $('input[name=PASS_KEY1][type=password]'); 
  var passKey2 = $('input[name=PASS_KEY2][type=password]'); 
  if (passKind1.size() && passKind2.size() && passKey1.size() && passKey2.size()){
    var passKindMap = {
      "Ａ": 'passkey_a', 
      "Ｂ": 'passkey_b', 
      "Ｃ": 'passkey_c', 
      "Ｄ": 'passkey_d', 
      "Ｅ": 'passkey_e', 
      "Ｆ": 'passkey_f', 
      "Ｇ": 'passkey_g', 
      "Ｈ": 'passkey_h', 
      "Ｉ": 'passkey_i', 
      "Ｊ": 'passkey_j'
    };
    passKey1.val(my[passKindMap[passKind1.val()]]); 
    passKey2.val(my[passKindMap[passKind2.val()]]); 
    // ボタンが３つ分かれているので入力だけしてsubmitしない
    return;
  }
}

// optionsで保存したlocalStorageにアクセス
chrome.extension.sendRequest({
  "action": "getOptions",
  "args": []
}, function(response){
  // 埋める
  fillin(response);
});

