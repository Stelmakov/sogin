function number_format( number, decimals, dec_point, thousands_sep ) {
  // Format a number with grouped thousands
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +     bugfix by: Michael White (http://crestidg.com)
  var i, j, kw, kd, km;
  // input sanitation & defaults
  if( isNaN(decimals = Math.abs(decimals)) ){
    decimals = 2;
  }
  if( dec_point == undefined ){
    dec_point = ",";
  }
  if( thousands_sep == undefined ){
    thousands_sep = ".";
  }
  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
  if( (j = i.length) > 3 ){
    j = j % 3;
  } else{
    j = 0;
  }
  km = (j ? i.substr(0, j) + thousands_sep : "");
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
  //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
  kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
  return km + kw + kd;
}

(function( $ ) {


  $(function() {
  // $('select').select2();
   $('.fancybox').fancybox();

    var course = $('#course').html();
    if(course)
        course = parseFloat(course.replace(/\$/, '').replace(/\&nbsp;/, '').replace(/\s/, ''));

    $('.change-price').each(function () {

      var $price = $(this);
      var price = $price.html();
      price = price.replace(/\s/g,'');
      price = price.replace(',','.');
      var newPrice = price * course;
      newPrice = number_format(newPrice*10, 0, ".", " ");
      newPrice += " тыс.";
      $price.html(newPrice);

      // $(this).find('td').each(function () {
      //   if ($(this).children().attr('class') != undefined) {
      //     var
      //       oldPrice = $(this).find('.old-price'),
      //       oldPriceVal = oldPrice.html(),
      //       price = $(this).find('.price'),
      //       priceVal = price.html();
      //
      //     var
      //       newOldPrice = oldPriceVal * course + ' р.',
      //       newPrice = priceVal * course + ' р.';
      //
      //      // oldPrice.html(newOldPrice);
      //      // price.html(newPrice);
      //
      //      var changePrice = function (ths, price, bax, rub) {
      //
      //        $(ths).mouseenter(function () {
      //          price.html(rub)
      //        })
      //        .mouseleave(function () {
      //          price.html(bax)
      //        })
      //
      //      }
      //      changePrice(this, oldPrice, oldPriceVal, newOldPrice);
      //      changePrice(this, price, priceVal, newPrice);
      //   }
      // });

    });

  });
})(jQuery);