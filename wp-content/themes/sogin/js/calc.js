(function ($) {
    $(function () {

        var cpb = {
            initialize: function () {
                // Р’С‹Р·РѕРІ СЃР»СѓС€Р°С‚РµР»РµР№
                cpb.listeners();
                // Р’С‹Р·РѕРІ С„СѓРЅРєС†РёР№ - <option> РЅР°РїРѕР»РЅРµРЅРёСЏ РєРѕРїРёСЂРѕРІР°РЅРёРµ РґР°РЅРЅС‹С….
                cpb.copyDoors(cpb.notCombOne, cpb.doors.dOneNotComb);
                cpb.copyDoors(cpb.notCombTwo, cpb.doors.dTwoNotComb);
                cpb.copyDoors(cpb.notCombThree, cpb.doors.dThreeNotComb);
                cpb.copyDoors(cpb.notCombFour, cpb.doors.dFourNotComb);

                // cpb.doorsHeight();

                // Р’С‹Р·РѕРІ С„СѓРєРЅС†РёРё РєРѕРїРёСЂРѕРІР°РЅРЅРёСЏ РґР°РЅРЅС‹С…
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
                 РљРћРџРР РћР’РђРќРР• Р’ РћРџР¦РР РЎР•Р›Р•РљРўРђ (РЁРР РРќРђ РЁРљРђР¤Рђ) Р”РђРќРќР«РҐ РР— Р”РћР§Р•Р РќРРҐ Р”РР’РћР’ Р”РР’Рђ РЎР•РќРђРўРћР .
                 1) РљРѕР»-РІРѕ РґРѕС‡РµСЂРЅРёС… РґРёРІРѕРІ РґРёРІР° СЃ РґР°РЅРЅС‹РјРё senator.
                 2) Р¦РёРєР» РіРµРЅРµСЂРёСЂСѓСЋС‰РёР№ РєРѕР»-РІРѕ <option> СЂР°РІРЅС‹Р№ РєРѕР»-РІСѓ РґРёРІРѕРІ 1) Рё РІСЃС‚Р°РІР»СЏСЋС‰РёР№ РёС… РїСЂРё РєР°Р¶РґРѕР№ РёС‚РµСЂР°С†РёРё РІ СЃРµР»РµРєС‚ РЁРёСЂРёРЅР° С€РєР°С„Р°.
                 3) Р¦РёРєР» РїРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј РґРёРІР° senator, РєРѕС‚РѕСЂС‹Р№ РїСЂРёРЅРёРјР°РµС‚ Р°РЅРѕРЅРёРјРЅСѓСЋ С„СѓРЅРєС†РёРё РІ РєРѕРЅС‚РµРєСЃС‚Рµ РєРѕС‚РѕСЂРѕР№ СЃРІСЏР·С‹РІР°СЋС‚СЃСЏ РѕРїС†РёРё СЃРµР»РµРєС‚Р° -
                 РЁРёСЂРёРЅР° С€РєР°С„Р° СЃ РґРѕС‡. СЌРµР»РµРјРµРЅС‚Р°РјРё РґРёРІР° СЃРµРЅР°С‚РѕСЂ. РЎРµР»РµРєС‚Р°Рј РєРѕРїРёСЂСѓСЋС‚СЃСЏ Р°С‚СЂРёР±СѓС‚С‹ СЃ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРіРѕ РґРёРІР°.
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
                        .text($(this).data('width') + ' РјРј');

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

                /* РљРђР РўРРќРљР РџР Р Р—РђР“Р РЈР—РљР•
                   1) РњР°СЃСЃРёРІ РёР· РґРІСѓС… СЃСЃС‹Р»РѕРє
                   imgUrl1 - РџРµСЂРІС‹Р№ РґРѕС‡РµСЂРЅРёР№ РґРёРІ
                   imgUrl2 - Р’С‚РѕСЂРѕ РґРѕС‡РµСЂРЅРёР№ РґРёРІ
                   2) Р’ С†РёРєР»Рµ РіРµРЅРµСЂРёСЂСѓСЋС‚СЃСЏ РєР°СЂС‚РёРЅРєРё РґРІРµСЂРµР№ (2С€С‚СѓРєРё). Р’ src РїРѕРґСЃС‚Р°РІР»СЏРµС‚СЃСЏ СѓСЂР» РєР°СЂС‚РёРЅРєРё СЃРѕС…СЂР°РЅРµРЅС‹Р№ РІ РїРµСЂРµРјРµРЅРЅСѓСЋ.
                   Р РґРѕР±Р°РІР»СЏСЋС‚СЃСЏ РІ РґРёРІ СЃ РїСЂРѕСЃРјРѕС‚СЂРѕРј РєР°СЂС‚РёРЅРѕРє.
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

                /* Р’ С†РёРєР»Рµ РіРµРЅРµСЂРёСЂСѓСЋС‚СЃСЏ РІРЅСѓС‚СЂРµРЅРЅРёРµ РєР°СЂС‚РёРЅРєРё Рё РІСЃС‚Р°РІР»СЏСЋС‚СЃСЏ РІ РґРёРІ viewDoorsImgsInside.
                   РЎСЃС‹Р»РєРё Р±РµСЂСѓС‚СЃСЏ РёР· РґРёРІР° СЃ РґР°РЅРЅС‹РјРё #inside_two РїРѕ РёРЅРґРµРєСЃСѓ.
                */
                for (var i = 0; i < 2; i++) {
                    $('<img src="'+$('#inside_two').children().eq(i).data('imgs')+'" class="inside2" id="inside_'+i+'">').appendTo(cpb.viewDoorsImgsInside);
                }
                cpb.viewDoorsImgsInside.children().eq(0);
                cpb.viewDoorsImgsInside.children().eq(1);

                /* РњРёРЅРёР°СЋС‚СЂС‹ РґРІРµСЂРµР№
                   door - РґРІРµСЂСЊ (<select> РІС‹Р±РѕСЂР° РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ РёР»Рё РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ)
                   imgs - РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ РґР»СЏ РѕР±РµСЂС‚РєРё РјРёРЅРёР°С‚СЋСЂ
                   varl - РїРµСЂРµРјРµРЅРЅР°СЏ СЃРѕС…СЂР°РЅСЏСЋС‰Р°СЏ СЃСЃС‹Р»РєСѓ РЅР° РѕР±РµСЂС‚РєСѓ РјРёРЅРёР°С‚СЋСЂ
                   doorval - РґРІРµСЂСЊ (<select> РІС‹Р±РѕСЂР° РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ РёР»Рё РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ)
                   =======================
                   РђР»РіРѕСЂРёС‚Рј:
                   Р¤СѓРЅРєС†РёСЏ appendDoors РІС‹Р·С‹РІР°РµС‚СЃСЏ 4 СЂР°Р·Р°.
                   Р¤СѓРЅРєС†РёРё appendDoors РїРµСЂРµРґР°СЋС‚СЃСЏ РІС‹С€РµРїРµСЂРµС‡РёСЃР»РµРЅРЅС‹Рµ Р°СЂРіСѓРјРµРЅС‚С‹ РїСЂРё РІС‹Р·РѕРІРµ.
                   1) РЎРѕР·РґР°РµС‚СЃСЏ РґРёРІ РѕР±РµСЂС‚С‹РІР°СЋС‰РёР№ РєР°СЂС‚РёРЅРєРё Рё РІСЃС‚Р°РІР»СЏРµС‚СЃСЏ РїРѕСЃР»Рµ С‚РµРєСѓС‰РµР№ РґРІРµСЂРё <select>
                   СЂРѕРґРёС‚РµР»СЊСЃРєРѕРіРѕ РґРёРІР° СЃ РєР»Р°СЃСЃРѕРј form-group Рё РєСЌС€РёСЂСѓРµС‚СЃСЏ РІ РїРµСЂРµРјРµРЅРЅСѓСЋ.
                   2) Р’ С†РёРєР»Рµ РєРѕР»-РІРѕ РёС‚РµСЂР°С†РёР№ СЂР°РІРЅРѕ РєРѕР»-РІСѓ РєРѕРјР±РёРЅР°С†РёР№. РЎcС‹Р»РєР° Р±РµСЂРµС‚СЃСЏ РёР· РїРµСЂРІРѕРіРѕ РґРѕС‡РµСЂРЅРµРіРѕ СЌР»РµРјРµРЅС‚Р°, РґРёРІР° СЃ РёРЅРґРµРєСЃРѕРј
                   С‚РµРєСѓС‰РµР№ РёС‚РµСЂР°С†РёРё Рё РІСЃС‚Р°РІР»СЏРµС‚СЃ РІ varl.
                   3) РўРµРєСѓС‰Р°СЏ РѕР±РµСЂС‚РєР° РёС‰РµС‚ РґРѕС‡РµСЂРЅРёРµ РёР·РѕР±СЂР°Р¶РµРЅРёРµ Рё РїСЂРёРјРµРЅСЏРµС‚ РјРµС‚РѕРґ css РІ РєРѕС‚РѕСЂРѕР№ СѓРєР°Р·С‹РІР°СЋС‚СЃСЏ РЅСѓР¶РЅС‹Рµ СЃС‚РёР»Рё.
                   4) РџСЂРё РєР»РёРєРµ РЅР° РёР·РѕР±СЂР°Р¶РµРЅРёРµ РѕР±РµСЂС‚РєРё РєСЌС€РёСЂСѓРµС‚СЃСЏ РёРЅРґРµРєСЃ РєР°СЂС‚РёРЅРєРё РЅР° РєРѕС‚РѕСЂРѕР№ Р±С‹Р»Рѕ РІС‹Р·РІР°РЅРѕ СЃРѕР±С‹С‚РёРµ.
                   Р—Р°С‚РµРј С‚РµРєСѓС‰РµР№ РґРІРµСЂРё <select> РїСЂРёРјРµРЅСЏРµС‚СЃСЏ РјРµС‚РѕРґ trigger, РєРѕС‚РѕСЂС‹Р№ РёР·РјРµРЅСЏРµС‚ <option> СЃ СЃРѕС…СЂР°РЅРµРЅРЅС‹Рј РёРЅРґРµРєСЃРѕРј.
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
                /* <option> РЅР°РїРѕР»РЅРµРЅРёСЏ РєРѕРїРёСЂРѕРІР°РЅРёРµ РґР°РЅРЅС‹С….
                   Р¤СѓРЅРєС†РёСЏ РІС‹Р·С‹РІР°РµС‚СЃСЏ 4 СЂР°Р·Р° РїСЂРё Р·Р°РіСЂСѓР·РєРµ СЃС‚СЂР°РЅРёС†С‹.
                   Р¤СѓРЅС†РєРёСЏ РїСЂРёРЅРёРјР°РµС‚ 2 Р°СЂРіСѓРјРµРЅС‚Р°:
                   doorcopy - РґРёРІ СЃ РґР°РЅРЅС‹РјРё РґР»СЏ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹С… РґРІРµСЂРµР№ (#not_combination_one)
                   appendcopy - <select> РЅР°РїРѕР»РЅРµРЅРёСЏ (Р”СЃРї, Р·РµСЂРєР°Р»Рѕ, Р»Р°РєРѕРјР°С‚) РїРµСЂРµРґР°РЅРЅРѕР№ С„СѓРЅРєС†РёРё РґР»СЏ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹С… РґРІРµСЂРµР№.
                   =======================
                   РђР»РіРѕСЂРёС‚Рј:
                   1) Р’ РїРµСЂРµРјРµРЅРЅСѓСЋ СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ РєРѕР»-РІРѕ РґРёРІРѕРІ, РґРёРІР° СЃ РґР°РЅРЅС‹РјРё (Р”СЃРї, Р—РµСЂРєР°Р»Рѕ, Р›Р°РєРѕРјС‚Р°...).
                      Р’ С†РёРєР»Рµ РіРµРЅРµСЂРёСЂСѓРµС‚СЃСЏ РєРѕР»-РІРѕ <option> СЂР°РІРЅРѕРµ РєРѕР»-РІСѓ РґРёРІРѕРІ, РґРёРІР° СЃ РґР°РЅРЅС‹РјРё. Р РІСЃС‚Р°РІР»СЏРµС‚СЃСЏ РІ <select> РЅР°РїРѕР»РЅРµРЅРёСЏ РїРµСЂРµРґР°РЅРЅРѕР№ С„СѓРЅРєС†РёРё.
                   2) Javascript РІ С†РёРєР»Рµ РїСЂРѕР±РµРіР°РµС‚ РїРѕ РєР°Р¶РґРѕРјСѓ РґРёРІСѓ, РґРёРІР° СЃ РґР°РЅРЅС‹РјРё Рё РїСЂРёРЅРёРјР°РµС‚ Р°РЅРѕРЅРёРјРЅСѓСЋ С„СѓРЅРєС†РёСЋ РІ РєРѕС‚РѕСЂРѕР№ <select>'Сѓ РїРµСЂРµРґР°РЅРЅРѕРјСѓ
                      С„СѓРЅРєС†РёРё, РґРѕС‡РµСЂРЅРµРјСѓ СЌР»РµР»РµРјРµРЅС‚Сѓ <option> РІ РјРµС‚РѕРґ eq РїРµСЂРµРґР°РµС‚СЃСЏ С‚РµРєСѓС‰РёР№ РёРЅРґРµРєСЃ РґРёРІР°. РЎРІСЏР·Р°РЅРЅРѕРјСѓ <option> РґРѕР±Р°РІР»СЏСЋС‚СЃСЏ Р°С‚СЂРёР±СѓС‚С‹,
                      value - С‚РµРєСѓС‰РёР№ РёРЅРґРµРєСЃ
                      data-notcomb -  С‚РµРєСѓС‰СѓСЋ С†РµРЅСѓ
                      data-img - С‚РµРєСѓС‰СѓСЋ РєР°СЂС‚РёРЅРєСѓ. Р РјРµС‚РѕРґ text РєРѕРїРёСЂСѓРµС‚ С‚РµРєСѓС‰РёР№ С‚РµРєСЃС‚.
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
                // РЁРёСЂРёРЅР° С€РєР°С„Р° <select>
                cpb.widthSelect.on('change', cpb.changeWidth);
                // РљРѕР»РёС‡РµСЃС‚РІ РґРІРµСЂРµР№ <select>
                cpb.quantity.on('change', cpb.changeQuantity);

                // Р”РІРµСЂСЊ1 <select>
                cpb.doors.dOne.on('change', cpb.showCombOne);
                // Р”РІРµСЂСЊ2 <select>
                cpb.doors.dTwo.on('change', cpb.showCombTwo);
                // Р”РІРµСЂСЊ3 <select>
                cpb.doors.dThree.on('change', cpb.showCombThree);
                // Р”РІРµСЂСЊ3 <select>
                cpb.doors.dFour.on('change', cpb.showCombFour);

                // РќР°РїРѕР»РЅРµРЅРёРµ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ1 - <select>
                cpb.doors.dOneNotComb.on('change', cpb.doorOneChange);
                // РќР°РїРѕР»РЅРµРЅРёРµ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ2 - <select>
                cpb.doors.dTwoNotComb.on('change', cpb.doorTwoChange);
                // РќР°РїРѕР»РЅРµРЅРёРµ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ3 - <select>
                cpb.doors.dThreeNotComb.on('change', cpb.doorThreeChange);
                // РќР°РїРѕР»РЅРµРЅРёРµ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ4 - <select>
                cpb.doors.dFourNotComb.on('change', cpb.doorFourChange);

                // РќР°РїРѕР»РЅРµРЅРёРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ1 - <select>
                cpb.doors.dOneComb.on('change', cpb.doorOneChangeComb);
                // РќР°РїРѕР»РЅРµРЅРёРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ2 - <select>
                cpb.doors.dTwoComb.on('change', cpb.doorTwoChangeComb);
                // РќР°РїРѕР»РЅРµРЅРёРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ3 - <select>
                cpb.doors.dThreeComb.on('change', cpb.doorThreeChangeComb);
                // РќР°РїРѕР»РЅРµРЅРёРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРµ - Р”РІРµСЂСЊ4 - <select>
                cpb.doors.dFourComb.on('change', cpb.doorFourChangeComb);

                // Р—Р°РґРЅСЏСЏ СЃС‚РµРЅРєР° - <select>
                cpb.rearWall.on('change', cpb.rearWallPrice);
                // РџРѕР» - <select>
                cpb.floor.on('change', cpb.floorPrice);
                // РџРѕС‚РѕР»РѕРє - <select>
                cpb.ceiling.on('change', cpb.ceilingPrice);
                // Р—Р°РґРЅСЏСЏ СЃС‚РµРЅРєР° - <select>
                cpb.sideWalls.on('change', cpb.sideWallsPrice);
                // Р‘РѕРєРѕРІС‹Рµ РїРѕР»РєРё - <select>
                cpb.shelves.on('change', cpb.shelvesPrice);
                // РџРѕРєРѕРІС‹Рµ СЃС‚РµРЅРєРё - <select>
                cpb.qunatShelves.on('change', cpb.qunatChangeImg);
                // Р’С‹РґРІРёР¶РЅС‹Рµ СЏС‰РёРєРё - <select>
                cpb.boxes.on('change', cpb.boxesPrice);
                // РџРѕРґСЃРІРµС‚РєР° - <select>
                cpb.backglight.on('change', cpb.backglightPrice);
                // РљРЅРѕРїРєР° Р·Р°РєР°Р·Р° - <button>
                cpb.orderBtn.on('click', cpb.orderForm);
                // РљРѕРїРёСЂРѕРІР°РЅРёРµ РІСЃРµ РґР°РЅРЅС‹С…
                cpb.submitBtn.on('click', cpb.submitFunction);

                // РўР°Р± СЃРµРЅР°С‚РѕСЂ - <a>
                cpb.senatorBtn.on('click', cpb.changeDataCabinet);
                // РўР°Р± РјРѕРґСѓСЃ - <a>
                cpb.modusBtn.on('click', cpb.changeDataCabinet);

            },

            changeDataCabinet: function () {
                /* РР—РњР•РќР•РќРР• Р’РЎР•РҐ Р”РђРќРќР«РҐ РЈ РћРџР¦РР™ РЎР•Р›Р•РљРўРђ - РЁРР РРќРђ РЁРљРђР¤Рђ РџР Р РљР›РРљР• РќРђ РўРђР‘ Р РћРЎРќРћР’РќРћР™ Р¦Р•РќР«
                   Р¤СѓРЅРєС†РёСЏ РІС‹Р·С‹РІР°РµС‚СЃСЏ РїСЂРё РєР»РёРєРµ РЅР° СЃСЃС‹Р»РєСѓ С‚Р°Р±Р°
                   1) РџСЂРѕРІРµРєР° РЅР° РєР»Р°СЃСЃ Р°РєС‚РёРІ, РІ СЃР»СѓС‡Р°Рµ РѕС‚СЃСѓС‚СЃС‚РІРёСЏ РґРѕР±Р°РІР»СЏРµС‚СЃСЏ РєР»Р°СЃСЃ Р°РєС‚РёРІ.
                   2) РћС‡РёСЃС‚РєР° Рё РєРѕРїРёСЂРѕРІР°РЅРёРµ РґР°РЅРЅС‹С… РґР»СЏ СЃРµР»РµРєС‚Р° (РЁРёСЂРёРЅР° С€РєР°С„Р°) РёР· РґРѕС‡РµСЂРЅРёС… РґРёРІРѕРІ РґРёРІР° СЃ РґР°РЅРЅС‹РјРё. (#modus РёР»Рё #senator)
                   3) РџСЂРёРІРµРґРµРЅРёРµ Рє С‡РёСЃР»Сѓ РґР°РЅРЅС‹С… СЃ С†РµРЅРѕР№ РґР»СЏ С€РёСЂРёРЅС‹ 800 Рё Р°РєС‚РёРІРЅС‹С… РѕРїС†РёР№ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅС‹С… РґРІРµСЂРµР№. Р РёР·РјРµРЅРµРЅРёРµ РѕСЃРЅРѕРІРЅРѕР№ С†РµРЅС‹.
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
                            .text($(this).data('width') + ' РјРј');

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
                            .text($(this).data('width') + ' РјРј');

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

                // РЎРџР РЇРўРђРўР¬ РџРћРљРђР—РђРўР¬ Р¤РћР РњРЈ Р—РђРљРђР—Рђ
                $('.form-success').slideToggle();


            },
            submitFunction: function() {
                // РљРћРџРР РћР’РђРќРР• РўР•РљРЎРўРђ Р РљРђР РўРРќРћРљ Р”Р›РЇ РћРўРџР РђР’РљР
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
                    'РЁРєР°С„ - ' + titleOne + '\n' + ',' +
                    copyOne + '\n' +
                    copyTwo + '\n\n' +
                    'РР·РѕР±СЂР°Р¶РµРЅРёСЏ' + '\n' +
                    'Р¤Р°СЃР°Рґ С€РєР°С„Р° - ' + copyImgOne + '\n' +
                    'Р’РЅСѓС‚СЂРµРЅРЅРµРµ РЅР°РїРѕР»РЅРµРЅРёРµ - ' + copyImgTwo
                );

            },

            changeWidth: function() {
                /* РР—РњР•РќР•РќРР• РЁРР РРќР« РЁРљРђР¤Рђ - РЈР”РђР›Р•РќРР• Р’РЎРўРђР’РљРђ РћРџР¦РР™ РљРћР›-Р’Рћ Р”Р’Р•Р Р•Р™. РЈР”РђР›Р•РќРР• Р’РЎРўРђР’РљРђ РР—РћР‘Р РђР–Р•РќРР™ Р”Р’Р•Р Р•Р™.
                   РЈР”РђР›Р•РќРР• Р’РЎРўРђР’РљРђ Р’РќРЈРўР Р•РќРќРРҐ Р”Р’Р•Р Р•Р™.
                  1) РџСЂРё СЃРѕР±С‹С‚РёРё РёР·РјРµРЅРµРЅРёСЏ СЃРµР»РµРєС‚Р° С€РёСЂРёРЅР° С€РєР°С„Р°, СЃРѕС…СЂР°РЅСЏСЋС‚СЃСЏ РїРµСЂРµРјРµРЅРЅС‹Рµ СЃ СЃСЃС‹Р»РєР°РјРё РЅР° РѕРїС†РёРё СЃРµР»РµРєС‚Р° РљРѕР»-РІРѕ РґРІРµСЂРµР№
                     Рё РґР°РЅРЅС‹Рµ СЃ С†РµРЅРѕР№ С‚РµРєСѓС€РµР№ Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРёРё.
                  2) Р•СЃР»Рё Р·РЅР°С‡РµРЅРёРµ Р·Р°РєСЌС€РёСЂРѕРІР°РЅРЅРѕ РІ РїРµСЂРµРјРµРЅРЅСѓСЋ С‚Рѕ Р»РѕРіРёС‡РµСЃРєР°СЏ РїРµСЂРµРјРµРЅРЅР°СЏ СЃРѕС…СЂР°РЅСЏРµС‚ РёСЃС‚РёРЅСѓ, РёРЅР°С‡Рµ Р»РѕР¶СЊ.
                  3) РџСЂРѕРІРµСЂРєР° РєР°РєР°СЏ РѕРїС†РёСЏ РІ СЃРµР»РµРєС‚Рµ РљРѕР»-РґРІРµСЂРµР№ СЏРІР»СЏРµС‚СЃСЏ Р°РєС‚РёРІРЅРѕР№. Р’ СЃРѕРѕС‚РІРµС‚СЃРІРёРё СЃ РЅРµР№ Р»РѕРіРёС‡РµСЃРєР°СЏ РїРµСЂРµРјРµРЅРЅР°СЏ СЃРѕС…СЂР°РЅСЏРµС‚ РёСЃС‚РёРЅСѓ,
                     РёРЅР°С‡Рµ Р»РѕР¶СЊ.
                  4) РџСЂРѕРІРµСЂСЏРµС‚СЃСЏ РєР°Р¶РґС‹Р№ СЃРµР»РµРєС‚ РЅР°РїРѕР»РЅРµРЅРёСЏ РґР»СЏ РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹С… РґРІРµСЂРµР№. Р•СЃР»Рё СЌС‚РѕС‚ СЃРµР»РµРєС‚ РЅРµ СЃРїСЂСЏС‚Р°РЅ, С‚Рѕ РєСЌС€РёСЂСѓРµРј
                     РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰СѓСЋ РїРµСЂРµРјРµРЅРЅСѓСЋ РґР»СЏ РґРІРµСЂРё (imgUrl) РґР°РЅРЅС‹Рµ РёР· СЃРµР»РµРєС‚Р° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРіРѕ РЅР°РїРѕР»РЅРµРЅРёСЏ СЃСЃС‹Р»РєСѓ РЅР° РєР°СЂС‚РёРЅРєСѓ,
                     РёРЅР°С‡Рµ РµСЃР»Рё СЃРµР»РµРєС‚ СЃРїСЂСЏС‚Р°РЅ, С‚Рѕ РєСЌС€РёСЂСѓРµРј РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰СѓСЋ РїРµСЂРµРјРµРЅРЅСѓСЋ РґР»СЏ РґРІРµСЂРё (imgUrl) РґР°РЅРЅС‹Рµ РёР· СЃРµР»РµРєС‚Р° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё
                     РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕРіРѕ РЅР°РїРѕР»РЅРµРЅРёСЏ СЃСЃС‹Р»РєСѓ РЅР° РєР°СЂС‚РёРЅРєСѓ.
                     Р СЃРѕР·РґР°РµС‚СЃСЏ РјР°СЃСЃРёРІ СЃ СЌС‚РёРјРё РґР°РЅРЅС‹РјРё.
                  5)
                   5.1) (Р°) Р•СЃР»Рё Р°РєС‚РёРІРЅР°СЏ РѕРїС†РёСЏ РёРјРµРµС‚ С‚РѕР»СЊРєРѕ data(price-two)
                     5.1.1) Р•СЃР»Рё РєРѕР»-РІРѕ РѕРїС†РёР№ СЃРµР»РµРєС‚Р°, РљРѕР»-РІРѕ РґРІРµСЂРµР№, Р±РѕР»СЊС€Рµ РѕРґРЅРѕРіРѕ РёР»Рё РїРµСЂРІР°СЏ РѕРїС†РёСЏ РЅРµ #opti_2.
                      РЇРІР°СЃРєСЂРёРїС‚ РѕС‡РёС‰Р°РµС‚ СЃРµР»РµРєС‚ РљРѕР»-РІРѕ РґРІРµСЂРµР№ Рё РІСЃС‚Р°РІР»СЏРµС‚ РѕРїС†РёСЋ #opti_2.
                      Js РїСЂСЏС‡РµС‚ Р”РІРµСЂСЊ3 Рё Р”РІРµСЂСЊ4.
                      Р•СЃР»Рё РёР·РѕР±СЂР°Р¶РµРЅРёРµ РїРѕРґСЃРІРµС‚РєРё РїСЂРёСЃСѓС‚СЃС‚РІСѓРµС‚, С‚Рѕ РґР»СЏ РЅРµРіРѕ js РёР·РјРµРЅСЏРµС‚ Р°С‚СЂРёР±СѓС‚ СЃСЃС‹Р»РєРё РёР· РґРёРІР° СЃ РґР°РЅРЅС‹РјРё РґР»СЏ РґРІСѓС… РґРІРµСЂРµР№.
                     5.1.2) Р•СЃР»Рё РґРѕС‡РµСЂРЅРёРµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РґРёРІР° #view_doors РЅРµ РёРјРµСЋС‚ РєР»Р°СЃСЃ opti_2, СЏРІР°СЃРєСЂРёРїС‚ СѓРґР°Р»СЏРµС‚ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЃ РєР»Р°СЃСЃР°РјРё opti_3 Рё opti_4
                       Р’ С†РёРєР»Рµ СЏРІР°СЃРєСЂРёРїС‚ РіРµРЅРµСЂРёСЂСѓРµС‚ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЂР°РІРЅРѕРµ РєРѕР»-РІСѓ РґРІРµСЂРµР№ Рё РІСЃС‚Р°РІР»СЏРµС‚ РІ РґРёРІ #view_doors.
                       Р”Р°РЅРЅС‹Рµ РІ src Р±РµСЂРµС‚ РёР· РјР°СЃСЃРёРІР° imgArrr.
                     5.1.3) Р•СЃР»Рё РґРѕС‡РµСЂРЅРёРµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РґРёРІР° #view_doors_inside РЅРµ РёРјРµСЋС‚ РєР»Р°СЃСЃ inside2, СЏРІР°СЃРєСЂРёРїС‚ СѓРґР°Р»СЏРµС‚ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЃ РєР»Р°СЃСЃР°РјРё inside3 Рё inside4
                       Р’ С†РёРєР»Рµ СЏРІР°СЃРєСЂРёРїС‚ РіРµРЅРµСЂРёСЂСѓРµС‚ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЂР°РІРЅРѕРµ РєРѕР»-РІСѓ РґРІРµСЂРµР№ Рё РІСЃС‚Р°РІР»СЏРµС‚ РІ РґРёРІ #view_doors_inside. Р”Р°РЅРЅС‹Рµ РґР»СЏ
                       src Р±РµСЂСѓС‚СЃСЏ РёР· РґРѕС‡РµСЂРЅРёС… РґРёРІРѕРІ РґРёРІР° #copy_imgs_inside.

                   5.2) (a, b) Р•СЃР»Рё Р°РєС‚РёРІРЅР°СЏ РѕРїС†РёСЏ РёРјРµРµС‚ data(price-two) Рё data(price-three)
                   5.3) (b) Р•СЃР»Рё Р°РєС‚РёРІРЅР°СЏ РѕРїС†РёСЏ РёРјРµРµС‚ С‚РѕР»СЊРєРѕ data(price-three)
                   5.4) (b,c) Р•СЃР»Рё Р°РєС‚РёРІРЅР°СЏ РѕРїС†РёСЏ РёРјРµРµС‚ data(price-three) Рё data(price-four)
                   5.5) (c) Р•СЃР»Рё Р°РєС‚РёРІРЅР°СЏ РѕРїС†РёСЏ РёРјРµРµС‚ С‚РѕР»СЊРєРѕ data(price-four)
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
                        cpb.quantity.empty().append('<option id="opti_2" value="2">2 РґРІРµСЂРё</option>');
                        $('#select2-quantity-container').text('2 РґРІРµСЂРё');

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
                        cpb.quantity.empty().append('<option id="opti_2" value="2">2 РґРІРµСЂРё</option><option id="opti_3" value="3">3 РґРІРµСЂРё</option>');
                        $('#select2-quantity-container').text('2 РґРІРµСЂРё');

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
                        cpb.quantity.empty().append('<option id="opti_3" value="3">3 РґРІРµСЂРё</option>');
                        $('#select2-quantity-container').text('3 РґРІРµСЂРё');

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
                        cpb.quantity.empty().append('<option id="opti_3" value="3">3 РґРІРµСЂРё</option><option id="opti_4" value="4">4 РґРІРµСЂРё</option>')
                        $('#select2-quantity-container').text('3 РґРІРµСЂРё');

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
                        cpb.quantity.empty().append('<option id="opti_4" value="4">4 РґРІРµСЂРё</option>')
                        $('#select2-quantity-container').text('4 РґРІРµСЂРё');


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

                // РљР°СЂС‚РёРЅРєР° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РґРІРµСЂРё
                cpb.viewDoorsImgs.children('img#1').attr('src', $(this).children('option:selected').attr('class'));
            },
            doorTwoChangeComb: function () {
                cpb.doorsCahngeComb('price-comb-o2', cpb.doors.dTwoComb);

                // РљР°СЂС‚РёРЅРєР° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РґРІРµСЂРё
                cpb.viewDoorsImgs.children('img#2').attr('src', $(this).children('option:selected').attr('class'));

            },
            doorThreeChangeComb: function () {
                cpb.doorsCahngeComb('price-comb-o3', cpb.doors.dThreeComb);

                // РљР°СЂС‚РёРЅРєР° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РґРІРµСЂРё
                cpb.viewDoorsImgs.children('img#3').attr('src', $(this).children('option:selected').attr('class'));

            },
            doorFourChangeComb: function () {
                cpb.doorsCahngeComb('price-comb-o4', cpb.doors.dFourComb);

                // РљР°СЂС‚РёРЅРєР° Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅРѕР№ РґРІРµСЂРё
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


                // Р•СЃР»Рё Р·РЅР°С‡РµРЅРёРµ СЃРµР»РµРєС‚Р° РґРІРµСЂРё РЅРµ СЂР°РІРЅРѕ 0 -- РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ
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

                // РўСѓРіР» РєР°СЂС‚РёРЅРєРё Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё - РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ, РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ
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

                // РўСѓРіР» РєР°СЂС‚РёРЅРєРё Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё - РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ, РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ
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

                // РўСѓРіР» РєР°СЂС‚РёРЅРєРё Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё - РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ, РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ
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

                // РўСѓРіР» РєР°СЂС‚РёРЅРєРё Р°РєС‚РёРІРЅРѕР№ РѕРїС†РёРё - РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ, РЅРµ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅС‹Рµ
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

                //  РР·РјРµРЅРµРЅРёРµ С†РµРЅС‹ РїСЂРё РёР·РјРµРЅРµРЅРёРё РєРѕР»РёС‡РµСЃС‚РІР° РґРІРµСЂРµР№
                if ($(this).children('option:selected').attr('id') == 'opti_2') {
                    var selectTwo = cpb.widthSelect.children('option:selected').data('price-two');
                    cpb.priceDefault.html(selectTwo);

                    cpb.doors.dThreeParent.addClass('hidden');

                    // РР·РјРµРЅРµРЅРёРµ РєР°СЂС‚РёРЅРєРё РїСЂРё РёР·РјРµРЅРµРЅРёРё РѕРїС†РёРё 2 РґРІРµСЂРё
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

                    // РР·РјРµРЅРµРЅРёРµ РєР°СЂС‚РёРЅРєРё РїСЂРё РёР·РјРµРЅРµРЅРёРё РѕРїС†РёРё 3 РґРІРµСЂРё
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

                    // РР·РјРµРЅРµРЅРёРµ РєР°СЂС‚РёРЅРєРё РїСЂРё РёР·РјРµРЅРµРЅРёРё РѕРїС†РёРё 3 РґРІРµСЂРё
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

                    insideLeftFirst = $('img[class^="inside"]').first().position().left,
                    insideLeftLast = $('img[class^="inside"]').last().position().left + $('img[class^="inside"]').last().width();

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

                    insideLeftFirst = $('img[class^="inside"]').first().position().left,
                    insideLeftLast = $('img[class^="inside"]').last().position().left + $('img[class^="inside"]').last().width();

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
                        $('img[class^="backl"]').not('.backl-two').remove();
                        cpb.viewDoorsImgsInside.append('<img class="backl-two" src="'+backlImgs[0]+'" alt="">');
                    }
                    else if (cpb.quantity.val() == 3) {
                        $('img[class^="backl"]').not('.backl-three').remove();
                        cpb.viewDoorsImgsInside.append('<img class="backl-three" src="'+backlImgs[1]+'" alt="">');
                    }
                    else {
                        $('img[class^="backl"]').not('.backl-four').remove();
                        cpb.viewDoorsImgsInside.append('<img class="backl-four" src="'+backlImgs[2]+'" alt="">');
                    }

                    $('img[class^="backl"]').load(function () {
                        $(this).css('left', (cpb.viewDoorsImgsInside.width() - $('img[class^="backl"]').width()) / 2);
                        $(this).parent().css('margin-top', '40px')
                    });

                }
                else {
                    cpb.priceDefault.html(dynamicPrice - ($('.back-del').html()));
                    cpb.resultPrice.find('span[class^="door-back"]').remove();
                    $('img[class^="backl"]').parent().removeAttr('style').end().remove();
                }
            },
            changeBacklight: function () {
                var dynamicPrice = parseInt(cpb.priceDefault.html());

                if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '2') {
                    cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-20').html()));
                    $('span[class^="door-back"]').removeClass('back-del');
                    $('.door-back-20').addClass('back-del');

                }
                else if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '3') {
                    cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-30').html()));
                    $('span[class^="door-back"]').removeClass('back-del');
                    $('.door-back-30').addClass('back-del');
                }
                else if (cpb.backglight.children('option:selected').attr('value') == '2' && cpb.quantity.children('option:selected').attr('value') == '4') {
                    cpb.priceDefault.html(dynamicPrice + parseInt($('.door-back-40').html()));
                    $('span[class^="door-back"]').removeClass('back-del');
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