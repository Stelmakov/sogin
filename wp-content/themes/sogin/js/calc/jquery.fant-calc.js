(function ($) {
$(function () {

  var cpb = {
    initialize: function () {
      // Вызов слушателей
      cpb.listeners();
      // Вызов функций - <option> наполнения копирование данных.
      cpb.copyDoors(cpb.notCombOne, cpb.doors.dOneNotComb);
      cpb.copyDoors(cpb.notCombTwo, cpb.doors.dTwoNotComb);
      cpb.copyDoors(cpb.notCombThree, cpb.doors.dThreeNotComb);
      cpb.copyDoors(cpb.notCombFour, cpb.doors.dFourNotComb);

      // cpb.doorsHeight();

      // Вызов фукнции копированния данных
      cpb.copyData();
      cpb.hideOptions();
      cpb.combinationDoors();
    },

    // calculator info
    calculatorData: $('.calculator-data'),

    // main elements
    senator: $('#senator'),
    modus: $('#modus'),
    widthSelect: $('#width_select'),
    quantity: $('#quantity'),
    notCombOne: $('#not_combination_one'),
    notCombTwo: $('#not_combination_two'),
    notCombThree: $('#not_combination_three'),
    notCombFour: $('#not_combination_four'),
    doors: {
      dThreeParent: $('#parent_door_three'),
      dFourParent: $('#parent_door_four'),

      dOne: $('#door_one'),
      dTwo: $('#door_two'),
      dThree: $('#door_three'),
      dFour: $('#door_four'),

      dOneNotComb: $('#door_one_not_comb'),
      dOneComb: $('#door_one_comb'),

      dTwoNotComb: $('#door_two_not_comb'),
      dTwoComb: $('#door_two_comb'),

      dThreeNotComb: $('#door_three_not_comb'),
      dThreeComb: $('#door_three_comb'),

      dFourNotComb: $('#door_four_not_comb'),
      dFourComb: $('#door_four_comb'),
    },
    combHor: $('#comb_hor'),
    wrapComb: $('#wrap_combinations'),

    // variables additional elements
    addElems: $('#add_elems'),
    rearWall: $('#rear_wall'),
    floor: $('#floor'),
    ceiling: $('#ceiling'),
    sideWalls: $('#side_walls'),
    shelves: $('#shelves'),
    qunatShelves: $('#quant_shelves'),
    boxes: $('#boxes'),
    backglight: $('#backglight'),

    sideBox: $('#sideBox'),
    sideWall: $('#sideWall'),
    sideShelves: $('#sideShelves'),
    // Price
    priceDefault: $('.pr-default'),
    resultPrice: $('#result_price'),

    // Images
    doorsImages: $('#img_doors'),
    doorOneImg: $('#img_doors').children('div:nth-child(1)'),
    doorTwoImg: $('#img_doors').children('div:nth-child(2)'),
    doorThreeImg: $('#img_doors').children('div:nth-child(3)'),
    doorFourImg: $('#img_doors').children('div:nth-child(4)'),

    // View Result
    viewDoorsImgs: $('#view_doors > div'),
    viewDoorsImgsInside: $('#view_doors_inside > div'),
    orderBtn: $('#order_btn'),
    submitBtn: $('#submit_btn'),

    // Control Cabinet
    controlCab: $('#control_cabinet'),
    senatorBtn: $('#senator_btn'),
    modusBtn: $('#modus_btn'),

    hideOptions: function () {
      cpb.quantity.children().not(':first').hide();
    },

    // doorsHeight: function () {
    //   $(window).load(function () {
    //     cpb.viewDoorsImgs.find('img').height(cpb.viewDoorsImgs.find('img').first().height());
    //   });
    //   $(window).resize(function () {
    //     cpb.viewDoorsImgs.find('img').height(cpb.viewDoorsImgs.find('img').first().height());
    //   });
    // },

    copyData: function () {
       /*
        КОПИРОВАНИЕ В ОПЦИИ СЕЛЕКТА (ШИРИНА ШКАФА) ДАННЫХ ИЗ ДОЧЕРНИХ ДИВОВ ДИВА СЕНАТОР.
        1) Кол-во дочерних дивов дива с данными senator.
        2) Цикл генерирующий кол-во <option> равный кол-ву дивов 1) и вставляющий их при каждой итерации в селект Ширина шкафа.
        3) Цикл по дочерним элементам дива senator, который принимает анонимную функции в контексте которой связываются опции селекта -
        Ширина шкафа с доч. эелементами дива сенатор. Селектам копируются атрибуты с соответствующего дива.
       */

       // 1
       var senatorLength = cpb.senator.children('div').length;

      // 2
       for (var i = 0; i < senatorLength; i ++) {
         $('<option>', {
         }).appendTo(cpb.widthSelect);
       }

       // 3
       cpb.senator.children('div').each(function () {

          cpb.widthSelect.children().eq(
            $(this).index())
            .attr({
              'value' : $(this).data('width'),
              'data-price-two' : $(this).data('price-two'),
              'data-price-three' : $(this).data('price-three'),
              'data-price-four' : $(this).data('price-four'),
              'data-wall' : $(this).data('wall'),
              'data-floor' : $(this).data('floor'),
              'data-ceiling' : $(this).data('ceiling'),
            })
            .text($(this).data('width') + ' мм');

       });

       // Price onload
       cpb.senatorBtn.trigger('click');

       // Price boxes
       cpb.boxes.children().each(function () {
         var valueX = parseInt($(this).attr('value')) * parseInt(cpb.sideBox.data('side-box'));
         $(this).attr('data-side-box', valueX);
       });

       // Price sideWall
       cpb.sideWalls.children().each(function () {
         var valueX = parseInt($(this).attr('value')) * parseInt(cpb.sideWall.data('side-wall'));
         $(this).attr('data-side-wall', valueX);
       });

       // Price shelves
       cpb.shelves.children().each(function () {
         var valueX = parseInt($(this).attr('value')) * parseInt(cpb.sideShelves.data('side-shelves'));
         $(this).attr('data-side-shelves', valueX);
       });

       /* КАРТИНКИ ПРИ ЗАГРУЗКЕ
          1) Массив из двух ссылок
          imgUrl1 - Первый дочерний див
          imgUrl2 - Второ дочерний див
          2) В цикле генерируются картинки дверей (2штуки). В src подставляется урл картинки сохраненый в переменную.
          И добавляются в див с просмотром картинок.
       */

       // 1
       var imgUrl1 = $('#img_doors').children().eq(0).data('img'),
           imgUrl2 = $('#img_doors').children().eq(1).data('img'),
           imgArr = [imgUrl1, imgUrl2];

       var j = 0;
       for (var i = 0; i < 2; i++) {
        j++;
        $('<img src="'+imgArr[i]+'" class="'+$('#opti_2').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
       }

       /* В цикле генерируются внутренние картинки и вставляются в див viewDoorsImgsInside.
          Ссылки берутся из дива с данными #inside_two по индексу.
       */
      for (var i = 0; i < 2; i++) {
        $('<img src="'+$('#inside_two').children().eq(i).data('imgs')+'" class="inside2" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
      }
      cpb.viewDoorsImgsInside.children().eq(0);
      cpb.viewDoorsImgsInside.children().eq(1);

      /* Миниаютры дверей
         door - дверь (<select> выбора комбинированные или не комбинированные)
         imgs - идентификатор для обертки миниатюр
         varl - переменная сохраняющая ссылку на обертку миниатюр
         doorval - дверь (<select> выбора комбинированные или не комбинированные)
         =======================
         Алгоритм:
         Функция appendDoors вызывается 4 раза.
         Функции appendDoors передаются вышеперечисленные аргументы при вызове.
         1) Создается див обертывающий картинки и вставляется после текущей двери <select>
         родительского дива с классом form-group и кэшируется в переменную.
         2) В цикле кол-во итераций равно кол-ву комбинаций. Сcылка берется из первого дочернего элемента, дива с индексом
         текущей итерации и вставляетс в varl.
         3) Текущая обертка ищет дочерние изображение и применяет метод css в которой указываются нужные стили.
         4) При клике на изображение обертки кэшируется индекс картинки на которой было вызвано событие.
         Затем текущей двери <select> применяется метод trigger, который изменяет <option> с сохраненным индексом.
      */
      var appendDoors = function (door, imgs, varl, doorval) {
        // 1
        $('<div id="'+imgs+'" class="mini-doors"></div>').insertAfter(door.parent());
        $('#'+imgs+'').wrap('<div class="form-group wrp-mini"></div');
        var varl = $('#'+imgs);


        // for (var i = 0; i < cpb.wrapComb.children('div').length; i++) {
        //   var cloneImgs = cpb.wrapComb.children('div').eq(i).find('div div').eq(1).data('img');
        //   $('<img src="'+cloneImgs+'" alt="">').appendTo(varl);
        // }

        // 2
        for (var i = 0; i < $('#mini_imgs').children('div').length; i++) {
          var cloneImgs = $('#mini_imgs').children('div').eq(i).data('mini');
          $('<img src="'+cloneImgs+'" alt="">').appendTo(varl);
        }


        // 3
        varl.children('img').css({
          'width' : '27px',
          'margin-right' : '25px',
          'cursor' : 'pointer'
        }).closest('.form-group').css('margin', '10px 0');

        // 4
        varl.on('click', 'img', function(n) {
          var currIndx = $(this).index() + 1;
          $(doorval).val(currIndx).trigger('change')
        });
      }
      appendDoors(cpb.doors.dOne, 'doors_imgs', 'doorsImgs', '#door_one');
      appendDoors(cpb.doors.dTwo, 'doors_imgs1', 'doorsImgs1', '#door_two');
      appendDoors(cpb.doors.dThree, 'doors_imgs2', 'doorsImgs2', '#door_three');
      appendDoors(cpb.doors.dFour, 'doors_imgs3', 'doorsImgs3', '#door_four');

    },
    copyDoors: function (doorcopy, appendcopy) {
       /* <option> наполнения копирование данных.
          Функция вызывается 4 раза при загрузке страницы.
          Фунцкия принимает 2 аргумента:
          doorcopy - див с данными для не комбинированных дверей (#not_combination_one)
          appendcopy - <select> наполнения (Дсп, зеркало, лакомат) переданной функции для не комбинированных дверей.
          =======================
          Алгоритм:
          1) В переменную сохраняется кол-во дивов, дива с данными (Дсп, Зеркало, Лакомта...).
             В цикле генерируется кол-во <option> равное кол-ву дивов, дива с данными. И вставляется в <select> наполнения переданной функции.
          2) Javascript в цикле пробегает по каждому диву, дива с данными и принимает анонимную функцию в которой <select>'у переданному
             функции, дочернему элелементу <option> в метод eq передается текущий индекс дива. Связанному <option> добавляются атрибуты,
             value - текущий индекс
             data-notcomb -  текущую цену
             data-img - текущую картинку. И метод text копирует текущий текст.
       */

       // 1
       var notCombLenght1 = doorcopy.children().length;

       for (var i = 0; i < notCombLenght1; i ++) {
         $('<option>', {
         }).appendTo(appendcopy);
       }

       // 2
       doorcopy.children('div').each(function () {

          appendcopy.children().eq(
            $(this).index())
            .attr({
              'value' : $(this).index(),
              'data-notcomb' : $(this).data('notcomb'),
              'data-img' : $(this).data('img')
            })
            .text($(this).text());

       });

    },

    listeners: function () {
      // Ширина шкафа <select>
      cpb.widthSelect.on('change', cpb.changeWidth);
      // Количеств дверей <select>
      cpb.quantity.on('change', cpb.changeQuantity);

      // Дверь1 <select>
      cpb.doors.dOne.on('change', cpb.showCombOne);
      // Дверь2 <select>
      cpb.doors.dTwo.on('change', cpb.showCombTwo);
      // Дверь3 <select>
      cpb.doors.dThree.on('change', cpb.showCombThree);
      // Дверь3 <select>
      cpb.doors.dFour.on('change', cpb.showCombFour);

      // Наполнение не комбинированное - Дверь1 - <select>
      cpb.doors.dOneNotComb.on('change', cpb.doorOneChange);
      // Наполнение не комбинированное - Дверь2 - <select>
      cpb.doors.dTwoNotComb.on('change', cpb.doorTwoChange);
      // Наполнение не комбинированное - Дверь3 - <select>
      cpb.doors.dThreeNotComb.on('change', cpb.doorThreeChange);
      // Наполнение не комбинированное - Дверь4 - <select>
      cpb.doors.dFourNotComb.on('change', cpb.doorFourChange);

      // Наполнение комбинированное - Дверь1 - <select>
      cpb.doors.dOneComb.on('change', cpb.doorOneChangeComb);
      // Наполнение комбинированное - Дверь2 - <select>
      cpb.doors.dTwoComb.on('change', cpb.doorTwoChangeComb);
      // Наполнение комбинированное - Дверь3 - <select>
      cpb.doors.dThreeComb.on('change', cpb.doorThreeChangeComb);
      // Наполнение комбинированное - Дверь4 - <select>
      cpb.doors.dFourComb.on('change', cpb.doorFourChangeComb);

      // Задняя стенка - <select>
      cpb.rearWall.on('change', cpb.rearWallPrice);
      // Пол - <select>
      cpb.floor.on('change', cpb.floorPrice);
      // Потолок - <select>
      cpb.ceiling.on('change', cpb.ceilingPrice);
      // Задняя стенка - <select>
      cpb.sideWalls.on('change', cpb.sideWallsPrice);
      // Боковые полки - <select>
      cpb.shelves.on('change', cpb.shelvesPrice);
      // Поковые стенки - <select>
      cpb.qunatShelves.on('change', cpb.qunatChangeImg);
      // Выдвижные ящики - <select>
      cpb.boxes.on('change', cpb.boxesPrice);
      // Подсветка - <select>
      cpb.backglight.on('change', cpb.backglightPrice);
      // Кнопка заказа - <button>
      cpb.orderBtn.on('click', cpb.orderForm);
      // Копирование все данных
      cpb.submitBtn.on('click', cpb.submitFunction);

      // Таб сенатор - <a>
      cpb.senatorBtn.on('click', cpb.changeDataCabinet);
      // Таб модус - <a>
      cpb.modusBtn.on('click', cpb.changeDataCabinet);

    },

    changeDataCabinet: function () {
      /* ИЗМЕНЕНИЕ ВСЕХ ДАННЫХ У ОПЦИЙ СЕЛЕКТА - ШИРИНА ШКАФА ПРИ КЛИКЕ НА ТАБ И ОСНОВНОЙ ЦЕНЫ
         Функция вызывается при клике на ссылку таба
         1) Провека на класс актив, в случае отсутствия добавляется класс актив.
         2) Очистка и копирование данных для селекта (Ширина шкафа) из дочерних дивов дива с данными. (#modus или #senator)
         3) Приведение к числу данных с ценой для ширины 800 и активных опций не комбинированых дверей. И изменение основной цены.
      */

      // 1
      if (!$(this).parent().hasClass('active')) {
        $(this).parent().addClass('active');
        cpb.controlCab.children('li').not($(this).parent()).removeClass('active');
      }

      // 2
      if ($(this).parent().hasClass('active') && $(this).attr('id') == 'modus_btn') {

         cpb.widthSelect.children().removeAttr('data');

         cpb.modus.children('div').each(function () {

            cpb.widthSelect.children().eq(
              $(this).index())
              .attr({
                'value' : $(this).data('width'),
                'data-price-two' : $(this).data('price-two'),
                'data-price-three' : $(this).data('price-three'),
                'data-price-four' : $(this).data('price-four'),
                'data-wall' : $(this).data('wall'),
                'data-floor' : $(this).data('floor'),
                'data-ceiling' : $(this).data('ceiling'),
              })
              .text($(this).data('width') + ' мм');

         });

      }
      else if ($(this).parent().hasClass('active') && $(this).attr('id') == 'senator_btn') {

         cpb.widthSelect.children().removeAttr('data');

         cpb.senator.children('div').each(function () {

            cpb.widthSelect.children().eq(
              $(this).index())
              .attr({
                'value' : $(this).data('width'),
                'data-price-two' : $(this).data('price-two'),
                'data-price-three' : $(this).data('price-three'),
                'data-price-four' : $(this).data('price-four'),
                'data-wall' : $(this).data('wall'),
                'data-floor' : $(this).data('floor'),
                'data-ceiling' : $(this).data('ceiling'),
              })
              .text($(this).data('width') + ' мм');

         });
      }
      // 3
       var rp = Number(cpb.widthSelect.children(':first').attr('data-price-two')),
           rp1 = Number(cpb.doors.dOneNotComb.children(':first').attr('data-notcomb')),
           rp2 = Number(cpb.doors.dTwoNotComb.children(':first').attr('data-notcomb'));
       
      cpb.widthSelect.val('800');
      cpb.doors.dOne.val('0');
      cpb.doors.dTwo.val('0');
      cpb.doors.dOneComb.val('1');
      cpb.doors.dTwoComb.val('1');

      cpb.rearWall.val('1');
      cpb.floor.val('1');
      cpb.ceiling.val('1');
      cpb.sideWalls.val();
      cpb.qunatShelves.val('0');
      cpb.boxes.val('0');
      cpb.backglight.val('1');
        
      cpb.priceDefault.html(rp + rp1 + rp2);


    },

    orderForm: function () {

      // СПРЯТАТЬ ПОКАЗАТЬ ФОРМУ ЗАКАЗА
      $('.form-success').slideToggle();


    },
    submitFunction: function() {
      // КОПИРОВАНИЕ ТЕКСТА И КАРТИНОК ДЛЯ ОТПРАВКИ
        $('#sendtext').text('');

          var titleOne = $(cpb.controlCab.find('.active a')),
              titleOne = titleOne.text();

          var copyOne = [],
              copyTwo = [];

          $('#copy_one').children('div').filter(':visible').not('.wrp-mini').each(function (indx, element) {
             copyOne.push('\n' + $(element).find('label').text() +': ' + $(this).find('select').filter(':visible').children('option:selected').text());
          });
          $('#copy_two').children('div').filter(':visible').not('.wrp-mini').each(function (indx, element) {
             copyTwo.push('\n' + $(element).find('label').text() +': ' + $(this).find('select').filter(':visible').children('option:selected').text());
          });

          var copyImgOne = [],
              copyImgTwo = [];

          $(cpb.viewDoorsImgs).find('img').each(function () {
            var firstImgData = $(this).attr('src');
            copyImgOne.push('\n' +firstImgData)
            // copyImgOne.push('\n' + 'http://' + window.location.hostname + '/' + firstImgData)
          });

          $(cpb.viewDoorsImgsInside).find('img').each(function () {
            var firstImgData = $(this).attr('src');
            copyImgTwo.push('\n' +firstImgData)
            // copyImgTwo.push('\n' + 'http://' + window.location.hostname + '/' + firstImgData)
          });

         $('#sendtext').html(
          'Шкаф - ' + titleOne + '\n' + ',' +
          copyOne + '\n' +
          copyTwo + '\n\n' +
          'Изображения' + '\n' +
          'Фасад шкафа - ' + copyImgOne + '\n' +
          'Внутреннее наполнение - ' + copyImgTwo
        );

    },

    changeWidth: function() {
      /* ИЗМЕНЕНИЕ ШИРИНЫ ШКАФА - УДАЛЕНИЕ ВСТАВКА ОПЦИЙ КОЛ-ВО ДВЕРЕЙ. УДАЛЕНИЕ ВСТАВКА ИЗОБРАЖЕНИЙ ДВЕРЕЙ.
         УДАЛЕНИЕ ВСТАВКА ВНУТРЕННИХ ДВЕРЕЙ.
        1) При событии изменения селекта ширина шкафа, сохраняются переменные с ссылками на опции селекта Кол-во дверей
           и данные с ценой текушей активной опциии.
        2) Если значение закэшированно в переменную то логическая переменная сохраняет истину, иначе ложь.
        3) Проверка какая опция в селекте Кол-дверей является активной. В соответсвии с ней логическая переменная сохраняет истину,
           иначе ложь.
        4) Проверяется каждый селект наполнения для не комбинированных дверей. Если этот селект не спрятан, то кэшируем
           в соответствующую переменную для двери (imgUrl) данные из селекта активной опции не комбинированного наполнения ссылку на картинку,
           иначе если селект спрятан, то кэшируем в соответствующую переменную для двери (imgUrl) данные из селекта активной опции
           комбинированного наполнения ссылку на картинку.
           И создается массив с этими данными.
        5)
         5.1) (а) Если активная опция имеет только data(price-two)
           5.1.1) Если кол-во опций селекта, Кол-во дверей, больше одного или первая опция не #opti_2.
            Яваскрипт очищает селект Кол-во дверей и вставляет опцию #opti_2.
            Js прячет Дверь3 и Дверь4.
            Если изображение подсветки присутствует, то для него js изменяет атрибут ссылки из дива с данными для двух дверей.
           5.1.2) Если дочерние изображения дива #view_doors не имеют класс opti_2, яваскрипт удаляет изображения с классами opti_3 и opti_4
             В цикле яваскрипт генерирует изображения равное кол-ву дверей и вставляет в див #view_doors.
             Данные в src берет из массива imgArrr.
           5.1.3) Если дочерние изображения дива #view_doors_inside не имеют класс inside2, яваскрипт удаляет изображения с классами inside3 и inside4
             В цикле яваскрипт генерирует изображения равное кол-ву дверей и вставляет в див #view_doors_inside. Данные для
             src берутся из дочерних дивов дива #copy_imgs_inside.

         5.2) (a, b) Если активная опция имеет data(price-two) и data(price-three)
         5.3) (b) Если активная опция имеет только data(price-three)
         5.4) (b,c) Если активная опция имеет data(price-three) и data(price-four)
         5.5) (c) Если активная опция имеет только data(price-four)
      */

      // 1
      var optiOne = cpb.quantity.children('#opti_2'),
          optiTwo = cpb.quantity.children('#opti_3'),
          optiThree = cpb.quantity.children('#opti_4'),
          dataTwo = $(this).children('option:selected').data('price-two'),
          dataThree = $(this).children('option:selected').data('price-three'),
          dataFour = $(this).children('option:selected').data('price-four'),
          a, b, c;

      // 2
        dataTwo != undefined ? a = true : a = false;
        dataThree != undefined ? b = true : b = false;
        dataFour != undefined ? c = true : c = false;

      // 3
        cpb.quantity.children(':first-child').is(optiOne) ? opt1 = true : opt1 = false;
        cpb.quantity.children(':first-child').is(optiTwo) ? opt2 = true : opt2 = false;
        cpb.quantity.children(':first-child').is(optiThree) ? opt3 = true : opt3 = false;

      // 4
        if (!cpb.doors.dOneNotComb.parent().hasClass('hidden')) {
          var imgUrl1 = cpb.doors.dOneNotComb.children('option:selected').data('img');
        }
        else {
          var imgUrl1 = cpb.doors.dOneComb.children('option:selected').attr('class');
        }
        if (!cpb.doors.dTwoNotComb.parent().hasClass('hidden')) {
          var imgUrl2 = cpb.doors.dTwoNotComb.children('option:selected').data('img');
        }
        else {
          var imgUrl2 = cpb.doors.dTwoComb.children('option:selected').attr('class');
        }
        if (!cpb.doors.dThreeNotComb.parent().hasClass('hidden')) {
          var imgUrl3 = cpb.doors.dThreeNotComb.children('option:selected').data('img');
        }
        else {
          var imgUrl3 = cpb.doors.dThreeComb.children('option:selected').attr('class');
        }
        if (!cpb.doors.dFourNotComb.parent().hasClass('hidden')) {
          var imgUrl4 = cpb.doors.dFourNotComb.children('option:selected').data('img');
        }
        else {
          var imgUrl4 = cpb.doors.dFourComb.children('option:selected').attr('class');
        }
        var imgArr = [imgUrl1, imgUrl2, imgUrl3, imgUrl4];


       // 5
        // 5.1
        if (a && !b && !c) {

           // 5.1.1
           if (cpb.quantity.children().length > 1 || !opt1) {
             cpb.quantity.empty().append('<option id="opti_2" value="2">2 двери</option>');
             $('#select2-quantity-container').text('2 двери');

             cpb.doors.dThreeParent.addClass('hidden');
             cpb.doors.dFourParent.addClass('hidden');

             cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-two'));

           }

          // 5.1.2
          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_2')) {

           cpb.viewDoorsImgs.children('.opti_3, .opti_4').remove();

             var j = 0;
             for (var i = 0; i < 2; i++) {
              j++;
                $('<img src="'+imgArr[i]+'" class="'+$('#opti_2').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
             }

          }

          // 5.1.3
          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside2')) {
            cpb.viewDoorsImgsInside.find('.inside3, .inside4').remove();
            for (var i = 0; i < 2; i++) {
              $('<img src="'+$('#inside_two').children().eq(i).data('imgs')+'" class="inside2" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }

        }
        // 5.2
        else if (a && b && !c) {
           if (cpb.quantity.children().length < 2 || opt2) {
             cpb.quantity.empty().append('<option id="opti_2" value="2">2 двери</option><option id="opti_3" value="3">3 двери</option>');
             $('#select2-quantity-container').text('2 двери');

             cpb.doors.dThreeParent.addClass('hidden');
             cpb.doors.dFourParent.addClass('hidden');

             cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-two'));
           }

          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_2')) {

           cpb.viewDoorsImgs.children('.opti_4, .opti_3').remove();


           var j = 0;
           for (var i = 0; i < 2; i++) {
            j++;
               $('<img src="'+imgArr[i]+'" class="'+$('#opti_2').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
             }

          }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside2')) {
            cpb.viewDoorsImgsInside.find('.inside3, .inside4').remove();
            for (var i = 0; i < 2; i++) {
              $('<img src="'+$('#inside_two').children().eq(i).data('imgs')+'" class="inside2" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }

        }
        // 5.3
        else if (!a && b && !c) {
           if (cpb.quantity.children().length > 1 || !opt2) {
             cpb.quantity.empty().append('<option id="opti_3" value="3">3 двери</option>');
             $('#select2-quantity-container').text('3 двери');

             cpb.doors.dThreeParent.removeClass('hidden');
             cpb.doors.dFourParent.addClass('hidden');

             cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-three'));

           }

          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_3')) {

           cpb.viewDoorsImgs.children('.opti_2, .opti_4').remove();

           var j = 0;
           for (var i = 0; i < 3; i++) {
            j++;
              $('<img src="'+imgArr[i]+'" class="'+$('#opti_3').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

          }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside3')) {
            cpb.viewDoorsImgsInside.find('.inside2, .inside4').remove();
            for (var i = 0; i < 3; i++) {
              $('<img src="'+$('#inside_three').children().eq(i).data('imgs')+'" class="inside3" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }


        }
        // 5.4
        else if (!a && b && c) {
          if (cpb.quantity.children().length < 2 || opt1) {
             cpb.quantity.empty().append('<option id="opti_3" value="3">3 двери</option><option id="opti_4" value="4">4 двери</option>')
             $('#select2-quantity-container').text('3 двери');

             cpb.doors.dThreeParent.removeClass('hidden');
             cpb.doors.dFourParent.addClass('hidden');

             // change img backlight
             cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-three'));

           }

          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_3')) {

           cpb.viewDoorsImgs.children('.opti_2, .opti_4').remove();


           var j = 0;
           for (var i = 0; i < 3; i++) {
            j++;
              $('<img src="'+imgArr[i]+'" class="'+$('#opti_3').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

          }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside3')) {
            cpb.viewDoorsImgsInside.find('.inside2, .inside4').remove();
            for (var i = 0; i < 3; i++) {
              $('<img src="'+$('#inside_three').children().eq(i).data('imgs')+'" class="inside3" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }


        }
        // 5.5
        else if (!a && !b && c) {
           if (cpb.quantity.children().length > 1 || !opt3) {
             cpb.quantity.empty().append('<option id="opti_4" value="4">4 двери</option>')
             $('#select2-quantity-container').text('4 двери');


             cpb.doors.dThreeParent.removeClass('hidden');
             cpb.doors.dFourParent.removeClass('hidden');

           cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-four'));

           }

          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_4')) {

           cpb.viewDoorsImgs.children('.opti_2, .opti_3').remove();

           var j = 0;
           for (var i = 0; i < 4; i++) {
            j++;
              $('<img src="'+imgArr[i]+'" class="'+$('#opti_4').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

          }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside4')) {
            cpb.viewDoorsImgsInside.find('.inside2, .inside3').remove();
            for (var i = 0; i < 4; i++) {
              $('<img src="'+$('#inside_four').children().eq(i).data('imgs')+'" class="inside4" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }


        }
        else {
        }
      // show hide options change val select ##

      // change wall floor ceiling price
       var wallFloorCeiling  = function (price, dat) {
        if ($(price).html() != undefined) {
          if ((cpb.widthSelect.children('option:selected').data(dat)) != ($(price).html())) {
             cpb.priceDefault.html(+(cpb.priceDefault.html()) - +($('.price-floor').html()));

             $(price).html(cpb.widthSelect.children('option:selected').data(dat));
             cpb.priceDefault.html(+(cpb.priceDefault.html()) + +($(price).html()));

          }
        }
       }
       wallFloorCeiling('.price-floor', 'floor');
       wallFloorCeiling('.price1-ceiling', 'ceiling');
       wallFloorCeiling('.price-wall', 'wall');

      // change price
      if ($('#opti_2').is(':selected') && a) {
        cpb.priceDefault.html(dataTwo)
      }
      else if ($('#opti_3').is(':selected') && b) {
        cpb.priceDefault.html(dataThree)
      }
      else if ($('#opti_4').is(':selected') && c) {
        cpb.priceDefault.html(dataFour)
      }

     // sum all elements
     cpb.sumAllelements();

     // change backlight
     cpb.changeBacklight();

     // Trigger position
     var triggerPosition = function (elem, vari, number) {
       if ($(elem).val() != number) {
         var vari = $(elem).val();

         $(elem).val(number).trigger('change');
         setTimeout(function () {
           $(elem).val(vari).trigger('change');
         }, 100);
       }
     }
     triggerPosition('#boxes', 'newPosBox', 0);
     triggerPosition('#side_walls', 'newPosWalls', 0);
     triggerPosition('#ceiling', 'newPosCeil', 1);
     triggerPosition('#floor', 'newPosFloor', 1);
     triggerPosition('#rear_wall', 'newPosWall', 1);
     triggerPosition('#shelves', 'newPosShelv', 0);

    },

    // Change option combination
    doorsCahngeComb: function (class1, comb) {
      var dynamicPrice = parseInt(cpb.priceDefault.html()),
          currentData = parseInt(comb.children('option:selected').attr('data-comb-hor-app'));

       if (cpb.resultPrice.children('span').hasClass(class1)) {

        cpb.priceDefault.html(dynamicPrice - parseInt($('.'+class1+'').html()));
        $('.'+class1+'').remove();

        var dynamicPrice = parseInt(cpb.priceDefault.html());

        $('<span class="'+class1+' hidden">'+currentData+'</span>')
        .insertAfter(cpb.priceDefault);

        cpb.priceDefault.html(dynamicPrice + currentData );

      }
      else {
        alert('error')
      }
    },

    doorOneChangeComb: function () {
      cpb.doorsCahngeComb('price-comb-o1', cpb.doors.dOneComb);

      // Картинка активной опции комбинированной двери
      cpb.viewDoorsImgs.children('img#1').attr('src', $(this).children('option:selected').attr('class'));
    },
    doorTwoChangeComb: function () {
      cpb.doorsCahngeComb('price-comb-o2', cpb.doors.dTwoComb);

      // Картинка активной опции комбинированной двери
      cpb.viewDoorsImgs.children('img#2').attr('src', $(this).children('option:selected').attr('class'));

    },
    doorThreeChangeComb: function () {
      cpb.doorsCahngeComb('price-comb-o3', cpb.doors.dThreeComb);

      // Картинка активной опции комбинированной двери
      cpb.viewDoorsImgs.children('img#3').attr('src', $(this).children('option:selected').attr('class'));

    },
    doorFourChangeComb: function () {
      cpb.doorsCahngeComb('price-comb-o4', cpb.doors.dFourComb);

      // Картинка активной опции комбинированной двери
      cpb.viewDoorsImgs.children('img#4').attr('src', $(this).children('option:selected').attr('class'));
    },
    // Change option combination ##

    combinationDoors: function () {
       // Combination id
       cpb.wrapComb.children().each(function () {
         var index = $(this).index(),
             index = index + 1,
             currentId1 = $(this).children().eq(0).attr('id'),
             currentId2 = $(this).children().eq(1).attr('id'),
             currentId3 = $(this).children().eq(2).attr('id'),
             currentId4 = $(this).children().eq(3).attr('id');

         cpb.doors.dOne.children().eq(index).attr({
            'id' : currentId1
          });
         cpb.doors.dTwo.children().eq(index).attr({
            'id' : currentId2
          });
         cpb.doors.dThree.children().eq(index).attr({
            'id' : currentId3
          });
         cpb.doors.dFour.children().eq(index).attr({
            'id' : currentId4
          });
       });

    },

    showHideComb: function (doorVal, notcomb, comb, class1, class2) {
      if (doorVal.val() != '0') {
        notcomb.parent().addClass('hidden');
        comb.parent().removeClass('hidden');
      }
      else {
        notcomb.parent().removeClass('hidden');
        comb.parent().addClass('hidden');
      }


      // Если значение селекта двери не равно 0 -- комбинированные
      if (doorVal.val() != '0') {

        var o = '#'+doorVal.children('option:selected').attr('id');

         cpb.wrapComb.find('div'+o+'').children().each(function () {
           var index = $(this).index(),
               currenApp = $(this).data('comb-hor-app'),
               currentHor = $(this).data('comb-hor'),
               currentImg = $(this).data('img');

            comb.children().eq(index).attr({
              'data-comb-hor' : currentHor,
              'data-comb-hor-app' : currenApp,
              'class' : currentImg
            })
            .text($(this).text())

         });

        var currentData = parseInt(comb.children('option:selected').attr('data-comb-hor')),
            currentData1 = parseInt(comb.children('option:selected').attr('data-comb-hor-app')),
            dynamicPrice = parseInt(cpb.priceDefault.html());

        if (!cpb.resultPrice.children('span').hasClass(class1)) {
          $('<span class="'+class1+' hidden">'+currentData+'</span>')
          .insertAfter(cpb.priceDefault);
          $('<span class="'+class2+' hidden">'+currentData1+'</span>')
          .insertAfter(cpb.priceDefault);

          cpb.priceDefault.html(dynamicPrice + currentData + currentData1);
        }
        else {
          cpb.priceDefault.html(dynamicPrice - parseInt($('.'+class1+'').html()) - parseInt($('.'+class2+'').html()));
          $('.'+class1+'').remove();
          $('.'+class2+'').remove();

         var dynamicPrice = parseInt(cpb.priceDefault.html());

          $('<span class="'+class1+' hidden">'+currentData+'</span>')
          .insertAfter(cpb.priceDefault);
          $('<span class="'+class2+' hidden">'+currentData1+'</span>')
          .insertAfter(cpb.priceDefault);

          cpb.priceDefault.html(dynamicPrice + currentData + currentData1);
        }

      }
      else {

          var dynamicPrice = parseInt(cpb.priceDefault.html());
          cpb.priceDefault.html(dynamicPrice - parseInt($('.'+class1+'').html()) - parseInt($('.'+class2+'').html()));
          $('.'+class1+'').remove();
          $('.'+class2+'').remove();
      }

    },

    showCombOne: function () {
      cpb.showHideComb(cpb.doors.dOne, cpb.doors.dOneNotComb, cpb.doors.dOneComb, 'price-comb1', 'price-comb-o1');

      if (cpb.resultPrice.children('span').hasClass('price-fnc')) {
        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - parseInt($('.price-fnc').html()));
        $('.price-fnc').remove();
      }

      // Тугл картинки активной опции - комбинированные, не комбинированные
      if ($(this).val() != '0') {
        cpb.viewDoorsImgs.children('img#1').attr('src', cpb.doors.dOneComb.children('option:selected').attr('class'));
      }
      else {
        cpb.viewDoorsImgs.children('img#1').attr('src', cpb.doors.dOneNotComb.children('option:selected').data('img'));
      }

    },
    showCombTwo: function () {
      cpb.showHideComb(cpb.doors.dTwo, cpb.doors.dTwoNotComb, cpb.doors.dTwoComb, 'price-comb2', 'price-comb-o2');

      if (cpb.resultPrice.children('span').hasClass('price-fnc-two')) {
        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - parseInt($('.price-fnc-two').html()));
        $('.price-fnc-two').remove();
      }

      // Тугл картинки активной опции - комбинированные, не комбинированные
      if ($(this).val() != '0') {
        cpb.viewDoorsImgs.children('img#2').attr('src', cpb.doors.dTwoComb.children('option:selected').attr('class'));
      }
      else {
        cpb.viewDoorsImgs.children('img#2').attr('src', cpb.doors.dTwoNotComb.children('option:selected').data('img'));
      }

    },
    showCombThree: function () {
      cpb.showHideComb(cpb.doors.dThree, cpb.doors.dThreeNotComb, cpb.doors.dThreeComb, 'price-comb3', 'price-comb-o3');

      if (cpb.resultPrice.children('span').hasClass('price-fnc-three')) {
        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - parseInt($('.price-fnc-three').html()));
        $('.price-fnc-three').remove();
      }

      // Тугл картинки активной опции - комбинированные, не комбинированные
      if ($(this).val() != '0') {
        cpb.viewDoorsImgs.children('img#3').attr('src', cpb.doors.dThreeComb.children('option:selected').attr('class'));
      }
      else {
        cpb.viewDoorsImgs.children('img#3').attr('src', cpb.doors.dThreeNotComb.children('option:selected').data('img'));
      }

    },
    showCombFour: function () {
      cpb.showHideComb(cpb.doors.dFour, cpb.doors.dFourNotComb, cpb.doors.dFourComb, 'price-comb4', 'price-comb-o4');

      if (cpb.resultPrice.children('span').hasClass('price-fnc-four')) {
        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - parseInt($('.price-fnc-four').html()));
        $('.price-fnc-four').remove();
      }

      // Тугл картинки активной опции - комбинированные, не комбинированные
      if ($(this).val() != '0') {
        cpb.viewDoorsImgs.children('img#4').attr('src', cpb.doors.dFourComb.children('option:selected').attr('class'));
      }
      else {
        cpb.viewDoorsImgs.children('img#4').attr('src', cpb.doors.dFourNotComb.children('option:selected').data('img'));
      }

    },

    doorsChange: function (doorClass, doorValue) {

        var currentVal = doorValue.children('option:selected').attr('value'),
            currentData = parseInt(doorValue.children('option:selected').data('notcomb')),
            dynamicPrice = parseInt(cpb.priceDefault.html());

           if (!cpb.resultPrice.children('span').hasClass(doorClass)) {
            $('<span class="'+doorClass+' del-fnc hidden" id="'+currentVal+'">'+currentData+'</span>')
            .insertAfter(cpb.priceDefault);
            cpb.priceDefault.html(dynamicPrice + currentData);
           }
           else {
            cpb.priceDefault.html(dynamicPrice - parseInt($('.'+doorClass+'').html()));
            $('.'+doorClass+'').remove();

            $('<span class="'+doorClass+' del-fnc hidden" id="'+currentVal+'">'+currentData+'</span>')
            .insertAfter(cpb.priceDefault);
            cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) + currentData);

           }

    },

    doorOneChange: function () {
      cpb.doorsChange('price-fnc', cpb.doors.dOneNotComb);

      cpb.viewDoorsImgs.children('img#1').attr('src', $(this).children('option:selected').data('img'));

    },
    doorTwoChange: function () {
      cpb.doorsChange('price-fnc-two', cpb.doors.dTwoNotComb);

      cpb.viewDoorsImgs.children('img#2').attr('src', $(this).children('option:selected').data('img'));
    },
    doorThreeChange: function () {
      cpb.doorsChange('price-fnc-three', cpb.doors.dThreeNotComb);

      cpb.viewDoorsImgs.children('img#3').attr('src', $(this).children('option:selected').data('img'));

    },
    doorFourChange: function () {
      cpb.doorsChange('price-fnc-four', cpb.doors.dFourNotComb);

      cpb.viewDoorsImgs.children('img#4').attr('src', $(this).children('option:selected').data('img'));
    },

    changeQuantity: function () {

      if (!cpb.doors.dOneNotComb.parent().hasClass('hidden')) {
        var imgUrl1 = cpb.doors.dOneNotComb.children('option:selected').data('img');
      }
      else {
        var imgUrl1 = cpb.doors.dOneComb.children('option:selected').attr('class');
      }
      if (!cpb.doors.dTwoNotComb.parent().hasClass('hidden')) {
        var imgUrl2 = cpb.doors.dTwoNotComb.children('option:selected').data('img');
      }
      else {
        var imgUrl2 = cpb.doors.dTwoComb.children('option:selected').attr('class');
      }
      if (!cpb.doors.dThreeNotComb.parent().hasClass('hidden')) {
        var imgUrl3 = cpb.doors.dThreeNotComb.children('option:selected').data('img');
      }
      else {
        var imgUrl3 = cpb.doors.dThreeComb.children('option:selected').attr('class');
      }
      if (!cpb.doors.dFourNotComb.parent().hasClass('hidden')) {
        var imgUrl4 = cpb.doors.dFourNotComb.children('option:selected').data('img');
      }
      else {
        var imgUrl4 = cpb.doors.dFourComb.children('option:selected').attr('class');
      }
      var imgArr = [imgUrl1, imgUrl2, imgUrl3, imgUrl4];

      //  Изменение цены при изменении количества дверей
      if ($(this).children('option:selected').attr('id') == 'opti_2') {
        var selectTwo = cpb.widthSelect.children('option:selected').data('price-two');
        cpb.priceDefault.html(selectTwo);

        cpb.doors.dThreeParent.addClass('hidden');

        // Изменение картинки при изменении опции 2 двери
        if (!cpb.viewDoorsImgs.children('img').hasClass('opti_2')) {
           cpb.viewDoorsImgs.children('.opti_3, .opti_4').remove();

           var j = 0;
           for (var i = 0; i < 2; i++) {
            j++;
            $('<img src="'+imgArr[i]+'" class="'+$('#opti_2').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

        }

        if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside2')) {
          cpb.viewDoorsImgsInside.find('.inside3, .inside4').remove();
          for (var i = 0; i < 2; i++) {
            $('<img src="'+$('#inside_two').children().eq(i).data('imgs')+'" class="inside2" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
          }
        }

       // change img backlight
       cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-two'));


      }
      else if ($(this).children('option:selected').attr('id') == 'opti_3') {
        var selectThree = cpb.widthSelect.children('option:selected').data('price-three');
        cpb.priceDefault.html(selectThree)

        cpb.doors.dThreeParent.removeClass('hidden');
        cpb.doors.dFourParent.addClass('hidden');

        // Изменение картинки при изменении опции 3 двери
        if (!cpb.viewDoorsImgs.children('img').hasClass('opti_3')) {

         cpb.viewDoorsImgs.children('.opti_2, .opti_4').remove();

           var j = 0;
           for (var i = 0; i < 3; i++) {
            j++;
            $('<img src="'+imgArr[i]+'" class="'+$('#opti_3').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

        }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside3')) {
            cpb.viewDoorsImgsInside.find('.inside2, .inside4').remove();
            for (var i = 0; i < 3; i++) {
              $('<img src="'+$('#inside_three').children().eq(i).data('imgs')+'" class="inside3" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }

       // change img backlight
       cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-three'));


      }
      else if ($(this).children('option:selected').attr('id') == 'opti_4') {
        var selectFour = cpb.widthSelect.children('option:selected').data('price-four');
        cpb.priceDefault.html(selectFour)

        cpb.doors.dThreeParent.removeClass('hidden');
        cpb.doors.dFourParent.removeClass('hidden');

          // Изменение картинки при изменении опции 3 двери
          if (!cpb.viewDoorsImgs.children('img').hasClass('opti_4')) {

           cpb.viewDoorsImgs.children('.opti_2, .opti_3').remove();

           var j = 0;
           for (var i = 0; i < 4; i++) {
            j++;
            $('<img src="'+imgArr[i]+'" class="'+$('#opti_4').attr('id')+'" id="'+j+'" width="120" height="100%" alt="">').appendTo(cpb.viewDoorsImgs)
           }

          }

          if (!cpb.viewDoorsImgsInside.children('img').hasClass('inside4')) {
            cpb.viewDoorsImgsInside.find('.inside3, .inside2').remove();
            for (var i = 0; i < 4; i++) {
              $('<img src="'+$('#inside_four').children().eq(i).data('imgs')+'" class="inside4" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
            }
          }

       // change img backlight
       cpb.resultPrice.children('img[class^="backl"]') && $('img[class^="backl"]').attr('src', $('#backlight_img').data('backl-four'));

      }

     // sum all elements
     cpb.sumAllelements();

     // change backlight
     cpb.changeBacklight();

     // Trigger position
     var triggerPosition = function (elem, vari, number) {
       if ($(elem).val() != number) {
         var vari = $(elem).val();

         $(elem).val(number).trigger('change');
         setTimeout(function () {
           $(elem).val(vari).trigger('change');
         }, 100);
       }
     }
     triggerPosition('#boxes', 'newPosBox', 0);
     triggerPosition('#side_walls', 'newPosWalls', 0);
     triggerPosition('#ceiling', 'newPosCeil', 1);
     triggerPosition('#floor', 'newPosFloor', 1);
     triggerPosition('#rear_wall', 'newPosWall', 1);
     triggerPosition('#shelves', 'newPosShelv', 0);

    },
    sumAllelements: function () {
      var dynamicPrice = parseInt(cpb.priceDefault.html());

      cpb.resultPrice.children('span').each(function () {
        var str = $(this).attr('class');
        (str.indexOf('price') == 0 || str.indexOf('price') == 2) ? searchClass = true : searchClass = false;

        if (searchClass) {
          var mapClass = cpb.resultPrice.find('span[class*="price"]').map(function (value, element) {
            return $(element).html();
          }).get();

          var sum = 0;

          for (var i = 0; i < mapClass.length; i++) {
            sum = sum + parseInt(mapClass[i]);
          }
          cpb.priceDefault.html(dynamicPrice + parseInt(sum));
        }

      });
    },

    settingsData: function (addata) {
      priceNew = cpb.widthSelect.children('option:selected').data(addata);
      priceNew = parseInt(priceNew);
      dynamicPrice = parseInt(cpb.priceDefault.html());
    },

    rearWallPrice: function () {

      cpb.settingsData('wall');

      if ($(this).val() == '2') {
        $('<span class="price-wall hidden">'+priceNew+'</span>').insertAfter(cpb.priceDefault);
        var priceNumber = $('.price-wall').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(dynamicPrice + priceNumber);
      }
      else {
        var priceNumber = $('.price-wall').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - priceNumber);
        cpb.resultPrice.find('.price-wall').remove();
      }

      // images
      var rearImgs = $('#rear_imgs');

        if ($(this).val() == 2) {
          if (cpb.quantity.find('option:selected').val() == 2) {
            cpb.viewDoorsImgsInside.append('<img src="'+rearImgs.data('rear-two')+'" class="rear-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 3) {
            cpb.viewDoorsImgsInside.append('<img src="'+rearImgs.data('rear-three')+'" class="rear-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 4) {
            cpb.viewDoorsImgsInside.append('<img src="'+rearImgs.data('rear-four')+'" class="rear-del">');
          }
        }
        else {
          $('.rear-del').length > 0 && $('.rear-del').remove();
        }

    },

    floorPrice: function () {

      cpb.settingsData('floor');

      if ($(this).val() == '2') {
        $('<span class="price-floor hidden">'+priceNew+'</span>').insertAfter(cpb.priceDefault);
        var priceNumber = $('.price-floor').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(dynamicPrice + priceNumber);

      }
      else {
        var priceNumber = $('.price-floor').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - priceNumber);
        cpb.resultPrice.find('.price-floor').remove();

      }

      // images
      var floorImgs = $('#floor_imgs');

        if ($(this).val() == 2) {
          if (cpb.quantity.find('option:selected').val() == 2) {
            cpb.viewDoorsImgsInside.append('<img src="'+floorImgs.data('floor-two')+'" class="floor-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 3) {
            cpb.viewDoorsImgsInside.append('<img src="'+floorImgs.data('floor-three')+'" class="floor-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 4) {
            cpb.viewDoorsImgsInside.append('<img src="'+floorImgs.data('floor-four')+'" class="floor-del">');
          }
        }
        else {
          $('.floor-del').length > 0 && $('.floor-del').remove();
        }

    },
    ceilingPrice: function () {
      cpb.settingsData('ceiling');

      if ($(this).val() == '2') {
        $('<span class="price1-ceiling hidden">'+priceNew+'</span>').insertAfter(cpb.priceDefault);
        var priceNumber = $('.price1-ceiling').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(dynamicPrice + priceNumber);

      }
      else {
        var priceNumber = $('.price1-ceiling').html(),
            priceNumber = parseInt(priceNumber);

        cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) - priceNumber);
        cpb.resultPrice.find('.price1-ceiling').remove();

      }

      // images
      var ceilingImgs = $('#celing_imgs');

        if ($(this).val() == 2) {
          if (cpb.quantity.find('option:selected').val() == 2) {
            cpb.viewDoorsImgsInside.append('<img src="'+ceilingImgs.data('ceiling-two')+'" class="ceil-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 3) {
            cpb.viewDoorsImgsInside.append('<img src="'+ceilingImgs.data('ceiling-three')+'" class="ceil-del">');
          }
          else if (cpb.quantity.find('option:selected').val() == 4) {
            cpb.viewDoorsImgsInside.append('<img src="'+ceilingImgs.data('ceiling-four')+'" class="ceil-del">');
          }
        }
        else {
          $('.ceil-del').length > 0 && $('.ceil-del').remove();
        }

    },

    sideWallsPrice: function () {
       var sideBoxPrice =  $(this).children('option:selected').data('side-wall'),
           sideBoxPrice = parseInt(sideBoxPrice),
           dynamicPrice = parseInt(cpb.priceDefault.html());

         if ($(this).val() != 0) {
           if (!cpb.resultPrice.children('span').hasClass('wall-del')) {
             $('<span class="hidden wall-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.wall-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) + priceNumber);
           }
           else {
             cpb.priceDefault.html(dynamicPrice - parseInt($('.wall-del').html()));
             $('.wall-del').remove();

             var dynamicPrice = parseInt(cpb.priceDefault.html());

             $('<span class="hidden wall-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.wall-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(dynamicPrice + priceNumber);
           }
         }
         else {
           cpb.priceDefault.html(dynamicPrice - parseInt($('.wall-del').html()));
           $('.wall-del').remove();
         }

        // images
        var sideWallsImgs = $('#side_walls_imgs');

        $('.swall-del').length > 0 && $('.swall-del').remove();

        if ($(this).val() == 1) {
          cpb.viewDoorsImgsInside.append('<img src="'+sideWallsImgs.data('swall-left')+'" class="swall-left swall-del">');
        }
        else if ($(this).val() == 2) {
          cpb.viewDoorsImgsInside.append('<img src="'+sideWallsImgs.data('swall-right')+'" class="swall-right swall-del">');
        }
        else if ($(this).val() == 3) {
          cpb.viewDoorsImgsInside.append('<img src="'+sideWallsImgs.data('swall-left')+'" class="swall-left swall-del">');
          cpb.viewDoorsImgsInside.append('<img src="'+sideWallsImgs.data('swall-right')+'" class="swall-right swall-del">');
        }
        else {
          $('.swall-del').remove();
        }

    },
    shelvesPrice: function () {
       var sideBoxPrice =  $(this).children('option:selected').data('side-shelves'),
           sideBoxPrice = parseInt(sideBoxPrice),
           dynamicPrice = parseInt(cpb.priceDefault.html());

         if ($(this).val() != 0) {
           if (!cpb.resultPrice.children('span').hasClass('shel-del')) {
             $('<span class="hidden shel-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.shel-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) + priceNumber);
           }
           else {
             cpb.priceDefault.html(dynamicPrice - parseInt($('.shel-del').html()));
             $('.shel-del').remove();

             var dynamicPrice = parseInt(cpb.priceDefault.html());

             $('<span class="hidden shel-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.shel-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(dynamicPrice + priceNumber);
           }
         }
         else {
           cpb.priceDefault.html(dynamicPrice - parseInt($('.shel-del').html()));
           $('.shel-del').remove();
         }

        // show, hide quantity_shelves
        if ($(this).val() != 0) {
          cpb.qunatShelves.closest('.form-group').removeClass('hidden')
        }
        else {
          cpb.qunatShelves.closest('.form-group').addClass('hidden')
        }

       // images
       var
         sideShImg = $('#side_shelves_img_left'),
         shelvesImgsL = [sideShImg.data('shelves-two'), sideShImg.data('shelves-three'), sideShImg.data('shelves-four'), sideShImg.data('shelves-five')],
         sideShImg = $('#side_shelves_img_right'),
         shelvesImgsR = [sideShImg.data('shelves-two'), sideShImg.data('shelves-three'), sideShImg.data('shelves-four'), sideShImg.data('shelves-five')],

         insideLeftFirst = $('img[class^="inside"').first().position().left,
         insideLeftLast = $('img[class^="inside"').last().position().left + $('img[class^="inside"').last().width();

       if ($(this).val() == 1) {
         $('img[class^="del-shelves"]').remove();

         if (cpb.qunatShelves.val() == 1) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[0]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 2) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[1]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 3) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[2]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 4) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[3]+'" class="del-shelves-left" alt="">')
         }

         $('.del-shelves-left').load(function () {
           $('.del-shelves-left').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-left').height()) / 2,
             'left' : insideLeftFirst - $('.del-shelves-left').width()
           });
         });

       }
       else if ($(this).val() == 2) {
         $('img[class^="del-shelves"]').remove();

         if (cpb.qunatShelves.val() == 1) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[0]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 2) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[1]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 3) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[2]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 4) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[3]+'" class="del-shelves-right" alt="">')
         }

         $('.del-shelves-right').load(function () {
          $('.del-shelves-right').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-right').height()) / 2,
             'left' : insideLeftLast
           });
         });

       }
       else if ($(this).val() == 3) {
         $('img[class^="del-shelves"]').remove();

         if (cpb.qunatShelves.val() == 1) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[0]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 2) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[1]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 3) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[2]+'" class="del-shelves-left" alt="">')
         }
         else if (cpb.qunatShelves.val() == 4) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[3]+'" class="del-shelves-left" alt="">')
         }

         $('.del-shelves-left').load(function () {
           $('.del-shelves-left').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-left').height()) / 2,
             'left' : insideLeftFirst - $('.del-shelves-left').width()
           });
         });

         if (cpb.qunatShelves.val() == 1) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[0]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 2) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[1]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 3) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[2]+'" class="del-shelves-right" alt="">')
         }
         else if (cpb.qunatShelves.val() == 4) {
           cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[3]+'" class="del-shelves-right" alt="">')
         }

         $('.del-shelves-right').load(function () {
          $('.del-shelves-right').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-right').height()) / 2,
             'left' : insideLeftLast
           });
         });

       }
       else {
        $('img[class^="del-shelves"]').remove();
       }

     },

    qunatChangeImg: function () {
     var
       sideShImg = $('#side_shelves_img_left'),
       shelvesImgsL = [sideShImg.data('shelves-two'), sideShImg.data('shelves-three'), sideShImg.data('shelves-four'), sideShImg.data('shelves-five')],
       sideShImg = $('#side_shelves_img_right'),
       shelvesImgsR = [sideShImg.data('shelves-two'), sideShImg.data('shelves-three'), sideShImg.data('shelves-four'), sideShImg.data('shelves-five')],

       insideLeftFirst = $('img[class^="inside"').first().position().left,
       insideLeftLast = $('img[class^="inside"').last().position().left + $('img[class^="inside"').last().width();

      if (cpb.shelves.val() == 1) {
        if ($(this).val() == 1) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[0]+'" class="del-shelves-left" alt="">')
        }
        else if ($(this).val() == 2) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[1]+'" class="del-shelves-left" alt="">')
        }
        else if ($(this).val() == 3) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[2]+'" class="del-shelves-left" alt="">')
        }
        else if ($(this).val() == 4) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[3]+'" class="del-shelves-left" alt="">')
        }

         $('.del-shelves-left').load(function () {
           $('.del-shelves-left').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-left').height()) / 2,
             'left' : insideLeftFirst - $('.del-shelves-left').width()
           });
         });
      }
      else if (cpb.shelves.val() == 2) {
        if ($(this).val() == 1) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[0]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 2) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[1]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 3) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[2]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 4) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[3]+'" class="del-shelves-right" alt="">')
        }

         $('.del-shelves-right').load(function () {
          $('.del-shelves-right').css({
             'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-right').height()) / 2,
             'left' : insideLeftLast
           });
         });
      }
      else if (cpb.shelves.val() == 3) {
        if ($(this).val() == 1) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[0]+'" class="del-shelves-left" alt="">')
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[0]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 2) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[1]+'" class="del-shelves-left" alt="">')
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[1]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 3) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[2]+'" class="del-shelves-left" alt="">')
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[2]+'" class="del-shelves-right" alt="">')
        }
        else if ($(this).val() == 4) {
         $('img[class^="del-shelves"]').remove();
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsL[3]+'" class="del-shelves-left" alt="">')
         cpb.viewDoorsImgsInside.append('<img src="'+shelvesImgsR[3]+'" class="del-shelves-right" alt="">')
        }

       $('.del-shelves-left, .del-shelves-right').load(function () {
         $('.del-shelves-left').css({
           'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-left').height()) / 2,
           'left' : insideLeftFirst - $('.del-shelves-left').width()
         });

         $('.del-shelves-right').css({
           'top' : (cpb.viewDoorsImgsInside.height() - $('.del-shelves-right').height()) / 2,
           'left' : insideLeftLast
         });
       });

      }

    },

    boxesPrice: function () {
       var sideBoxPrice =  $(this).children('option:selected').data('side-box'),
           sideBoxPrice = parseInt(sideBoxPrice),
           dynamicPrice = parseInt(cpb.priceDefault.html());

         if ($(this).val() != 0) {
           if (!cpb.resultPrice.children('span').hasClass('box-del')) {
             $('<span class="hidden box-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.box-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(parseInt(cpb.priceDefault.html()) + priceNumber);
           }
           else {
             cpb.priceDefault.html(dynamicPrice - parseInt($('.box-del').html()));
             $('.box-del').remove();

             var dynamicPrice = parseInt(cpb.priceDefault.html());

             $('<span class="hidden box-del">'+sideBoxPrice+'</span>').insertAfter(cpb.priceDefault);
             var priceNumber = $('.box-del').html(),
             priceNumber = parseInt(priceNumber);

             cpb.priceDefault.html(dynamicPrice + priceNumber);
           }
         }
         else {
           cpb.priceDefault.html(dynamicPrice - parseInt($('.box-del').html()));
           $('.box-del').remove();
         }

        // boxes images
        var insideLeft = (cpb.viewDoorsImgsInside.find('img').hasClass('inside2')) ? $('.inside2').eq(0).position().left :
           (cpb.viewDoorsImgsInside.find('img').hasClass('inside3')) ? $('.inside3').eq(1).position().left :
           (cpb.viewDoorsImgsInside.find('img').hasClass('inside4')) ? $('.inside4').eq(1).position().left :
           '';

        $('.boximg-del').length > 0 && $('.boximg-del').remove();

        if ($(this).val() != 0) {
          for (var i = 0; i < +($(this).val()); i ++) {
           cpb.viewDoorsImgsInside.append('<img src="'+$('#data_boxes').data('box-two')+'" class="boximg-del boxnumber-'+i+'">')
          }
        }

        $('.boximg-del').load(function () {
          $('.boximg-del').each(function () {

            $(this).css({
              'left' : insideLeft + 6,
              'bottom' : '0'
            })

          });

          $('.boxnumber-0')
          .attr('src', $('#data_boxes').data('box-one'))
          .css({'bottom' : '6px'});
          $('.boxnumber-1').css({'bottom' : '44px'});
          $('.boxnumber-2').css({'bottom' : '85px'});
          $('.boxnumber-3').css({'bottom' : '126px'});
          $('.boximg-del ').css('z-index', '1');

        });

    },
    backglightPrice: function () {
        var backPrice = parseInt($('#backlight').data('backlight')),
            dynamicPrice = parseInt(cpb.priceDefault.html());

        if ($(this).val() == '2') {
          for (var i = 2; i < 5; i++) {
            j = i * backPrice;
            $('<span class="door-back-'+j+' hidden">'+j+'</span>').insertAfter(cpb.priceDefault);
          }

          var doorBack20 = parseInt($('.door-back-20').html()),
              doorBack30 = parseInt($('.door-back-30').html()),
              doorBack40 = parseInt($('.door-back-40').html());

          if (cpb.quantity.children('option:selected').attr('value') == '2') {
            cpb.priceDefault.html(dynamicPrice + doorBack20);
            $('.door-back-20').addClass('back-del');
          }
          else if (cpb.quantity.children('option:selected').attr('value') == '3') {
            cpb.priceDefault.html(dynamicPrice + doorBack30);
            $('.door-back-30').addClass('back-del');
          }
          else if (cpb.quantity.children('option:selected').attr('value') == '4') {
            cpb.priceDefault.html(dynamicPrice + doorBack40);
            $('.door-back-40').addClass('back-del');
          }

          // images
          var backlImgs = [$('#backlight_img').data('backl-two'), $('#backlight_img').data('backl-three'), $('#backlight_img').data('backl-four')];

          if (cpb.quantity.val() == 2) {
            $('img[class^="backl"').not('.backl-two').remove();
            cpb.viewDoorsImgsInside.append('<img class="backl-two" src="'+backlImgs[0]+'" alt="">');
          }
          else if (cpb.quantity.val() == 3) {
            $('img[class^="backl"').not('.backl-three').remove();
            cpb.viewDoorsImgsInside.append('<img class="backl-three" src="'+backlImgs[1]+'" alt="">');
          }
          else {
            $('img[class^="backl"').not('.backl-four').remove();
            cpb.viewDoorsImgsInside.append('<img class="backl-four" src="'+backlImgs[2]+'" alt="">');
          }

           $('img[class^="backl"').load(function () {
             $(this).css('left', (cpb.viewDoorsImgsInside.width() - $('img[class^="backl"').width()) / 2);
             $(this).parent().css('margin-top', '40px')
           });

        }
        else {
           cpb.priceDefault.html(dynamicPrice - ($('.back-del').html()));
           cpb.resultPrice.find('span[class^="door-back"]').remove();
           $('img[class^="backl"').parent().removeAttr('style').end().remove();
        }
    },
    changeBacklight: function () {
      var dynamicPrice = parseInt(cpb.priceDefault.html());

      if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '2') {
        cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-20').html()));
        $('span[class^="door-back"').removeClass('back-del');
        $('.door-back-20').addClass('back-del');

      }
      else if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '3') {
        cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-30').html()));
        $('span[class^="door-back"').removeClass('back-del');
        $('.door-back-30').addClass('back-del');
      }
      else if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '4') {
        cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-40').html()));
        $('span[class^="door-back"').removeClass('back-del');
        $('.door-back-40').addClass('back-del');
      }
    }

  }

  cpb.initialize();


});
})(jQuery);

$(document).ready(function(){
	$("#modus_btn").click();
});	