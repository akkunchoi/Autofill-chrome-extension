var autoSave = function(key, elem){
  if (localStorage[key] == undefined){
    localStorage[key] = '';
  }
  elem.value = localStorage[key];
  console.log('restored ' + key + '=' + elem.value);
  elem.addEventListener('keyup', function(){
    localStorage[key] = elem.value;
    console.log('saved ' + key + '=' + elem.value);
  });
}
window.onload = function(){
  var list = [
    'cardnum', 
    'password',
    'passkey_a',
    'passkey_b',
    'passkey_c',
    'passkey_d',
    'passkey_e',
    'passkey_f',
    'passkey_g',
    'passkey_h',
    'passkey_i',
    'passkey_j'
  ];
  $.each(list, function(k, v){
    var e = document.getElementById(v);
    autoSave(v, e);
  });
}
