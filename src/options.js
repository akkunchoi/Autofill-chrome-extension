jQuery(function($){
  var page = $('#options-page'); 
  var newQuery = page.find('.new');
  var tpl = page.find('.template');
  tpl.hide();
  var id = 0;

  function createQuery(id){
    if ($('#row-' + id).length > 0){
      return $('#row-' + id);
    }
    var c = tpl.clone();
    c.removeClass('template');
    tpl.parent().append(c);
    c.show();
    c.attr('id', 'row-' + id);
    c.find('.url').attr('name', 'url-' + id);
    c.find('.query').attr('name', 'query-' + id);
    c.find('.value').attr('name', 'value-' + id);

    c.find('.remove').click(function(){
      c.remove();
      var id = c.attr('id').replace(/row-/, '');
      localStorage.removeItem('url-' + id);
      localStorage.removeItem('query-' + id);
      localStorage.removeItem('value-' + id);
    });
    return c;
  }
  newQuery.click(function(){
    createQuery(++id);
    return false;
  });
  
  page.find('input[type=checkbox]').each(function(){
    var key = $(this).attr('name');
    localStorage[key] = localStorage[key] || '';
    if (localStorage[key]){
      $(this).attr('checked', 'checked');
    }
    $(this).change(function(){
      if ($(this).attr('checked')){
        localStorage[key] = 'checked';
      }else{
        localStorage[key] = '';
      }
    });
  });

  page.find('input[type=text]').live('keyup', function(){
    var key = $(this).attr('name');
    localStorage[key] = $(this).val();
  });

  for (var k in localStorage){
    if (k.match(/^(query|url|value)-(\d+)/)){
      var type = RegExp.$1;
      var id = RegExp.$2;
      var c = createQuery(id);
      c.find('.' + type).val(localStorage[k]);
    }
  };
  
  if (id == 0){
    var c = createQuery(++id);
    c.find('.url').val('http://akkunchoi.github.io/Autofill-chrome-extension/.*');
    c.find('.query').val('input[name=example]');
    c.find('.value').val('Hello world!');
    c.find('input').trigger('keyup');
  }
});
