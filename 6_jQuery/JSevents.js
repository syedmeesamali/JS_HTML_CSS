function checkUsername(e, minLength) {
    var target = e.target;
}
function checkLength(e, minLength) {
      var el, elMsg;
      if (!e) {
          e = window.event;
      } 
      el = e.target || e.srcElement;
      elMsg = el.nextSibling;

      if (el.value.length < minLength) {
          elMsg.innerHTML = 'Username must be ' + minLength + ' characters!';
      } else {
          elMsg.innerHTML = '';
      }
  }

  var elUserName = document.getElementById('user-name');
  if (elUserName.addEventListener) {
      elUserName.addEventListener('blur', function(e) {
          checkUsername(e, 5);
      }, false);
  } else {
      elUserName.attachEvent('onblur', function(e){
          checkUsername(e, 5);
      });
  }