$(function(evt){
  var boton = $(".tiendaTrigger");
  var i=0;
  $('.tiendaTrigger:not(:first)').addClass('triggerInactivo')
  $('.tiendaTxt1').show();
  $(boton).each(function(i) {
      i++;
      $(this).on("mouseenter", function() {
          //$(boton).addClass('triggerActivo')
          if($(this).hasClass('triggerInactivo')){
            //no hagas nada
            $(boton).addClass('triggerInactivo')
            $(this).removeClass('triggerInactivo')
          }
          //$(boton).removeClass('triggerActivo')
          $('.txtTienda').hide();
          $('.backoff').css('opacity','0');
          $('.tiendaTxt'+i).fadeIn( 400 );
          $('.bak'+i).css('opacity','1')
          console.log('wof wof wof ')
      })
  });

  function sendForm(inf){
    console.log(inf.formObject())
    $.ajax({
      url: $('#form').attr('action'),
      method: "POST",
      data: inf.formObject(),
      dataType: "json",
      success: function(){
        console.log('se envio')
        $('.correo').html('<div class="exito"><img class="ok" src="img/like.svg"><p>Se ha enviado tu información, nos pondremos en contacto contigo lo más pronto posible.</p></div>')
      },error: function(){
        console.log('algo paso')
      }
    });
  }
  // para pasar la info a json
  $.fn.formObject = function() {
    var form = {};
    $.each($(this).serializeArray(), function (i, field) {
    form[field.name] = field.value || "";
    });

    return form;
  };

  $('#form').on('submit', function(e){
    e.preventDefault()
    sendForm($(this))
    return false
  })

  var typeWriting = new TypeWriting({
      targetElement   : document.getElementsByClassName('bold')[0],
      inputString     : 'El proximo sera el tuyo...',
      typing_interval : 130,
      blink_interval  : '1s',
      cursor_color    : '#660777',
  }, function() {
      console.log("END");
  });

  //expiremento scroll
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true,
    responsiveFallback: false
  });
});
