function swapStyleSheet(sheet){
	document.getElementById('accent-color').setAttribute('href', sheet);
}




    $('#color-1').click(function () {
      // stylesheet stuff...
      createCookie('cookie','primary',1);
    });
    $('#color-2').click(function () {
      // stylesheet stuff...
      createCookie('cookie','indigo',1);
    }); 
    $('#color-3').click(function () {
      // stylesheet stuff...
      createCookie('cookie','rose',1);
    }); 
  


    $(document).ready(function(){
      updateResult();
    });

    function updateResult() {
      var cookieValue = getCookie('cookie');
      if (cookieValue.length) {
        $('#accent-color').attr('href', 'assets/css/' + cookieValue + '.css');
      }
    }


