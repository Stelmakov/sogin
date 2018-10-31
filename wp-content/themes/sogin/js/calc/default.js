jQuery(document).ready(function(){
// JavaScript Document

	calculate ();


	function quiq_door (width) {
		
		door=Number($('[name="door"]').val());
		if (width<=170) {
			$('[name="door"]').html('<option value="2">2 двери</option>');      	
		}
		if (width>170 && width<=220) {
			if (door==2) {
				x2='selected="selected"';
				x3='';
			} else {
				x2='';
				x3='selected="selected"';
			}
			$('[name="door"]').html('<option value="2" '+x2+'>2 двери</option><option value="3" '+x3+'>3 двери</option>');     	        
		}
		if (width>220 && width<=280) {
			$('[name="door"]').html('<option value="3">3 двери</option>');          
		}
		if (width>280 && width<=300) {
			if (door==3) {
				x3='selected="selected"';
				x4='';
			} else {
				x3='';
				x4='selected="selected"';
			}
			$('[name="door"]').html('<option value="3" '+x3+'>3 двери</option><option value="4" '+x4+'>4 двери</option>');          
		}
		if (width>300 ) {
			$('[name="door"]').html('<option value="4">4 двери</option>');          
		}
		
	}
	
	$('[name="width"] , [name="door"] , [name="add"] , [name="shelf"] , [name="height"] , [name="scenery_type"] , [name="combination"] , [name="cart"] , [name="sidewall"] , [name="floor"] , [name="ceiling"] , [name="scenery"] , [name="backlight"] , [name="box"] , .doors_numb').change(function () {
		calculate ();      
	});
	
	$('[name="backWall"]').click(function () {
		calculate ();      
	});

	$('#komandor').click(function () {
		$('#senator').removeClass('cupdoard_active');
		$(this).removeClass('cupdoard_active');
		$(this).addClass('cupdoard_active');
		calculate ();
		return false;
	});
	$('#senator').click(function () {
		$('#komandor').removeClass('cupdoard_active');
		$(this).removeClass('cupdoard_active');
		$(this).addClass('cupdoard_active');
		calculate ();
		return false;
	});
	function scenery_f () {
		scenery=$('[name="scenery"]').val();
		var number=$('[name="door"]').val();
		if (scenery==0) {x= 'selected="selected"';} else {x='';} 
		var temp='<option value="0" '+x+'>нет</option>';             	
		for (var i = 1; i <= number; i++) {
			if (scenery==i) {x= 'selected="selected"';} else {x='';} 
			temp += '<option value="'+i+'" '+x+'>'+i+' дверь</option>'
		}
		$('[name="scenery"]').html(temp);
	}
	function scenery_type () {
		scenery=Number($('[name="scenery"]').val());
		var temp='';
		if (scenery!=0) {
			for (var key in category) {
				if (scenery==0) {x= 'selected="selected"';} else {x='';} 
				temp += '<option value="'+category[key]["name"]+'" '+x+'>'+category[key]["name"]+'</option>'
			}
			$('[name="scenery_type"]').html(temp);
			$('#scenery_type').show();
		} else {
			$('#scenery_type').hide();
		}
	}
	/*
	function door_list_f () {
		var option='';
		var door=$('[name="door"]').val();
		var combination=$('[name="combination"]').val();
		var scenery=$('[name="scenery"]').val();
		var category_name='';
		
		if ($('#scenery_type').css('display')=='block') {
			category_name=$('[name="scenery_type"]').val();
		}
		if (scenery!="0") { 
			for (var key in door_list[door]) {
				var val = door_list[door][key];
				if (combination==door_list[door][key]['id']) {x= 'selected="selected"';} else {x='';}
				if (category_name!='') {
					if (door_list[door][key]["category_name"]==category_name && door_list[door][key]["combined"]==1) {
						option+='<option value="'+door_list[door][key]['id']+'" '+x+'>'+door_list[door][key]['name']+'</option>';
					}
				} else {
					if (door_list[door][key]["combined"]==0) {
						option+='<option value="'+door_list[door][key]['id']+'" '+x+'>'+door_list[door][key]['name']+'</option>';
					}
				}	
			}
		} else {
			for (var key in door_list_def) {
				var val = door_list_def[key];
				if (combination==door_list_def[key]['id']) {x= 'selected="selected"';} else {x='';}
				if (category_name!='') {
					if (door_list_def[key]["category_name"]==category_name && door_list_def[key]["combined"]==1) {
						option+='<option value="'+door_list_def[key]['id']+'" '+x+'>'+door_list_def[key]['name']+'</option>';
					}
				} else {
					if (door_list_def[key]["combined"]==0) {
						option+='<option value="'+door_list_def[key]['id']+'" '+x+'>'+door_list_def[key]['name']+'</option>';
					}
				}	
			}
		}
		$('[name="combination"]').html(option);
		
	}*/
	function door_list_f () {
			var door=Number($('[name="door"]').val());
			
		
			var result='';
			for (var i = 1; i <= door; i++) {
				var option='';
				var option2='';
				var x='';
				var id=$('[name=door_cat_'+i+']').val();
				var id_door=$('[name=door_numb_'+i+']').val();
				//if (id===undefined){id=9; }
				var cat='';
				flag=0;
				var dor_cat='';
				var it=0;
				if (id=='Не комбинированые') {x2= 'selected="selected"';} else {x2='';}
				option+='<option value="Не комбинированые" '+x2+'>Не комбинированые</option>';
				for (var key in door_list[door]) {
					it++;
					if (id==undefined) {
						dor_cat='Не комбинированые';
					} else if (id!==undefined) {
						dor_cat=id;
						
					} else if (it==1) {
						dor_cat=door_list[door][key]["category_name"];
						
					}
					if (cat!=door_list[door][key]["category_name"]) {
						cat=door_list[door][key]["category_name"];
					/*	if (flag!=0) {
							option+='</optgroup>';
						}*/
						if (id==door_list[door][key]["category_name"]) {x= 'selected="selected"';} else {x='';}
						option+='<option value="'+cat+'" '+x+'>'+cat+'</option>';
						//flag=1; 
					}
					
					if (door_list[door][key]["category_name"]==dor_cat) {
						if (id_door==door_list[door][key]['id']) {x= 'selected="selected"';} else {x='';}
						
						option2+='<option categor="'+door_list[door][key]["category_name"]+'" value="'+door_list[door][key]['id']+'" '+x+' comb="1">'+door_list[door][key]['name']+'</option>';
					}
					
				}
				/////////////Забрал отсюда opt1
				if (dor_cat=='Не комбинированые') {
						for (var key in door_list_def) {
							if (id_door==door_list_def[key]['id']) {x= 'selected="selected"';} else {x='';}
							option2+='<option  value="'+door_list_def[key]['id']+'" '+x+' comb="0">'+door_list_def[key]['name']+'</option>';
						}
				}
					/*if (id==door_list[door][key]['id']) {x= 'selected="selected"';} else {x='';}
					option+='<option categor="'+door_list[door][key]["category_name"]+'" value="'+door_list[door][key]['id']+'" '+x+' comb="1">'+door_list[door][key]['name']+'</option>';
				}
				option+='</optgroup><optgroup label="Не комбинерованые">'; 
				for (var key in door_list_def) {
					if (id==door_list_def[key]['id']) {x= 'selected="selected"';} else {x='';}
					option+='<option  value="'+door_list_def[key]['id']+'" '+x+' comb="0">'+door_list_def[key]['name']+'</option>';
				}*/
				//option+='</optgroup>';
				//result+='<p><label><span>Дверь №'+i+'</span><select class="doors_numb" name="door_numb_'+i+'">'+option+'</select></label></p>';
				result+='<p><label><span>Дверь №'+i+'</span><select class="doors_numb" name="door_cat_'+i+'">'+option+'</select></label></p>';				
				result+='<p><label><span>Наполнение</span><select class="doors_numb" name="door_numb_'+i+'">'+option2+'</select></label></p>';

			}
			
			$("#all_doors").html(result);
			$('.doors_numb').change(function () {
				calculate ();      
			});
	}
	
	function add_list () {
		var add=$('[name="add"]').val();
		if (add!=0) {
			option='';
			$('#shelf').show();
			var shelf=$('[name="shelf"]').val();
			for (var i = shelf_list_min; i <= shelf_list; i++) {
				if (i==shelf) {x= 'selected="selected"';} else {x='';} 
				option+='<option value="'+i+'" '+x+' >'+i+'</option>';
			}
			$('[name="shelf"]').html(option);
		} else {
			$('#shelf').hide();
		}
	}
	function add () {
		var add=Number($('[name="add"]').val());
		
		if (add!=0) {
			var array_add=new Array();
			var shelf=$('[name="shelf"]').val();
			if (add==1) {
				var pos=$('[name="add"] option:selected').attr('side');
				if (pos=='left') {
					array_add[0]=valid_eval('cupboard_add_shelf'+shelf+'_position0');
					img0='<img src="/components/com_cupboard/img/'+array_add[0]+'" type="add" type2="left"/>';
					img1='';
				} else {
					array_add[0]=valid_eval('cupboard_add_shelf'+shelf+'_position1');
					img1='<img src="/components/com_cupboard/img/'+array_add[0]+'" type="add" type2="right"/>';
					img0='';
				}
				
			} else if (add==2) {
				array_add[0]=valid_eval('cupboard_add_shelf'+shelf+'_position0');
				img0='<img src="/components/com_cupboard/img/'+array_add[0]+'" type="add"  type2=""/>';
				array_add[1]=valid_eval('cupboard_add_shelf'+shelf+'_position'+1);
				img1='<img src="/components/com_cupboard/img/'+array_add[1]+'" type="add"  type2=""/>';
			}
			temp=$('.cupdoard_constructor').html();
			$('.cupdoard_constructor').html(img0+temp+img1);
		}
		
		
	}
	function valid_eval (string) {
		eval('if (window.'+string+'!=null) {x= '+string+';} else {x="NULL"}');
		if (x=="NULL") {x='0.jpg';};
		return x;
	}
	function backlight_add () {
		var backlight_true=Number($('[name="backlight"]').prop('checked'));
		var backlight=Number($('[name="door"]').val());
		if (backlight_true!=0) {
			var width_css_add=0;
			var width=0;
			$('.backlight_left').css('margin','0');
			$('.cupdoard_constructor img').each(function(i,elem) {
				if ($(elem).attr('type')!='add') {
					width=width+$(elem).width();
				} else {
					if ($(elem).attr('type2')=='left' || $(elem).attr('type2')=='') {
						$('.backlight_left').css('margin','0 0 0 '+$(elem).width()+'px');
					}
					if ($(elem).attr('type2')=='') {
						width_css_add=$(elem).width();
					}
					width_css_add=width_css_add+$(elem).width();
				}
			});
			width_css=width+15;
			width=width-9;
			$('.backlight_center').width(width);
			width=width-backlight*33;
			var line=Math.floor(width/(backlight*2));
			width_css=width_css+width_css_add;
			var img='';
			for (var i =1; i <= backlight; i++) {
				img+='<span class="backlight_lamp" style="margin: 0px '+line+'px 0px  '+line+'px;"></span>';
			}
			$('.backlight_center').html(img);
			$('.backlight_left , .backlight_center , .backlight_right').show();
			$('.backlight').css('width', width_css);
		} else {
			$('.backlight_left , .backlight_center , .backlight_right').hide();
		}
	}
	function box_list() {
		option='<option value="0">нет</option>';
		var box=$('[name="box"]').val();
		for (var i = 1; i <= global_box; i++) {
			if (i==box) {x= 'selected="selected"';} else {x='';} 
			option+='<option value="'+i+'" '+x+' >'+i+'</option>';
		}
		$('[name="box"]').html(option);
	}
	function cart_list() {
		option='<option value="0">нет</option>';
		var cart=$('[name="cart"]').val();
		for (var i = 1; i <= global_cart; i++) {
			if (i==cart) {x= 'selected="selected"';} else {x='';} 
			option+='<option value="'+i+'" '+x+' >'+i+'</option>';
		}
		$('[name="cart"]').html(option);
	}
	function calculate () {
		var width=Number($('[name="width"]').val());
		
		quiq_door(width);
		scenery_f ();
		scenery_type();
		door_list_f ();
		array_door_id=constructor_door ();
		add_list ();
		box_list();
		cart_list();
		var depth=Number($('[name="depth"]').val());
		var door=Number($('[name="door"]').val());
		
		var box=Number($('[name="box"]').val());
		var cart=$('[name="cart"]').val();
		var sidewall=Number($('[name="sidewall"]').val());
		var floors=$('[name="floor"]').val();
		var ceiling=$('[name="ceiling"]').val();
		var add_shelf=Number($('[name="add"]').val());
		var shelf=Number($('[name="shelf"]').val());
		var backlight=$('[name="backlight"]').prop('checked');
		var backWall_check=$('[name="backWall"]').prop('checked');
		
		
		if (backWall_check===true) {backWall_check=1;} else {backWall_check=0;}
		
		constructor (door, box, cart, sidewall, floors, ceiling, 0);
		add();
		
		
		if ($('.cupdoard_active').text()=='Komandor') {
			var producer='komandor';
		} else {
			var producer='senator';
		}
		
		
		backlight_add ();
		
		
		if (width<=80) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=195;						// ширина командор
			} else if (producer=='senator') {
				price_width=205;						// ширина сенатор
			} 
		}
		if (width==90) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=200;						// ширина командор
			} else if (producer=='senator') {
				price_width=210;						// ширина сенатор
			} 
		}
		if (width==100) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=205;						// ширина командор
			} else if (producer=='senator') {
				price_width=215;						// ширина сенатор
			} 
		}
		if (width==110) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=210;						// ширина командор
			} else if (producer=='senator') {
				price_width=220;						// ширина сенатор
			} 
		}
		if (width==120) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=215;						// ширина командор
			} else if (producer=='senator') {
				price_width=225;						// ширина сенатор
			} 
		}
		if (width==130) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=220;						// ширина командор
			} else if (producer=='senator') {
				price_width=230;						// ширина сенатор
			} 
		}
		if (width==140) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=225;						// ширина командор
			} else if (producer=='senator') {
				price_width=235;						// ширина сенатор
			} 
		}
		if (width==150) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=230;						// ширина командор
			} else if (producer=='senator') {
				price_width=240;						// ширина сенатор
			} 
		}
		if (width==160) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=235;						// ширина командор
			} else if (producer=='senator') {
				price_width=245;						// ширина сенатор
			} 
		}
		if (width==170) { 						// в зависимости от ширины меньше 150см
			add_depth=10; 								// глубина
			add_backlight=35;							
			backWall=30;								// задняя стенка
			add_floor=15;								// пол
			add_ceiling=15; 							// потолок
			if (producer=='komandor') {
				price_width=240;						// ширина командор
			} else if (producer=='senator') {
				price_width=250;						// ширина сенатор
			} 
		}
		if (width==180) { 			// от 150см до 200см
			if (door==2) {						// 2 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=245;
				} else if (producer=='senator') {
					price_width=255;
				}
			} else if (door==3) {				//от 150см до 200см, 3 двери
				add_depth=15;
				add_backlight=40;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=295;
				} else if (producer=='senator') {
					price_width=310;
				}
			}
		}
		if (width==190) { 			// от 150см до 200см
			if (door==2) {						// 2 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=255;
				} else if (producer=='senator') {
					price_width=265;
				}
			} else if (door==3) {				//от 150см до 200см, 3 двери
				add_depth=15;
				add_backlight=40;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=305;
				} else if (producer=='senator') {
					price_width=320;
				}
			}
		}
		if (width==200) { 			// от 150см до 200см
			if (door==2) {						// 2 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=265;
				} else if (producer=='senator') {
					price_width=275;
				}
			} else if (door==3) {				//от 150см до 200см, 3 двери
				add_depth=15;
				add_backlight=40;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=315;
				} else if (producer=='senator') {
					price_width=330;
				}
			}
		}
		if (width==210) { 			// от 150см до 200см
			if (door==2) {						// 2 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=275;
				} else if (producer=='senator') {
					price_width=285;
				}
			} else if (door==3) {				//от 150см до 200см, 3 двери
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=325;
				} else if (producer=='senator') {
					price_width=340;
				}
			}
		}
		if (width==220) { 			// от 150см до 200см
			if (door==2) {						// 2 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=285;
				} else if (producer=='senator') {
					price_width=295;
				}
			} else if (door==3) {				//от 150см до 200см, 3 двери
				add_depth=10;
				add_backlight=35;
				backWall=35;
				add_floor=20;
				add_ceiling=20;
				if (producer=='komandor') {
					price_width=335;
				} else if (producer=='senator') {
					price_width=350;
				}
			}
		}
		if (width==230) {				//от 200см до 250см, 3 двери
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=345;
				} else if (producer=='senator') {
					price_width=360;
				}
			}
		}
		if (width==240) {
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=355;
				} else if (producer=='senator') {
					price_width=370;
				}
			}
		}
		if (width==250) {
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=365;
				} else if (producer=='senator') {
					price_width=380;
				}
			}
		}
		if (width==260) {
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=375;
				} else if (producer=='senator') {
					price_width=390;
				}
			}
		}
		if (width==270) {
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=385;
				} else if (producer=='senator') {
					price_width=400;
				}
			}
		}
		if (width==280) {
			if (door==3) {
				add_depth=15;
				add_backlight=40;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=395;
				} else if (producer=='senator') {
					price_width=410;
				}
			}
		}
		if (width>280 && width<=300) {				//от 250см до 300см, 3 двери
			if (door==3) {
				add_depth=20;
				add_backlight=45;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=405;
				} else if (producer=='senator') {
					price_width=420;
				}
			} else if (door==4) {					//от 250см до 300см, 4 двери
				add_depth=20;
				add_backlight=50;
				backWall=40;
				add_floor=25;
				add_ceiling=25;
				if (producer=='komandor') {
					price_width=455;
				} else if (producer=='senator') {
					price_width=475;
				}
			}
		}
		if (width==320) {				//от 300см до 350см, 4 двери
			
			if (door==4) {
				add_depth=20;
				add_backlight=50;
				backWall=50;
				add_floor=30;
				add_ceiling=30;
				if (producer=='komandor') {
					price_width=475;
				} else if (producer=='senator') {
					price_width=495;
				}
			}
		}
		if (width==350) {				//от 300см до 350см, 4 двери
			
			if (door==4) {
				add_depth=20;
				add_backlight=50;
				backWall=50;
				add_floor=30;
				add_ceiling=30;
				if (producer=='komandor') {
					price_width=495;
				} else if (producer=='senator') {
					price_width=515;
				}
			}
		}
		
		if (depth<=60) {						// если глубина меньше 60см то цена 0
			price_depth=0;
		} else {
			depth=depth-60;
			price_depth=Math.ceil(depth/10)*add_depth;	
		}
		
		var price_door=0;
		for (var i = 1; i <= door; i++) {
			id=$('[name="door_numb_'+i+'"]').val();
			comb=$('[name="door_numb_'+i+'"] [value="'+id+'"]').attr('comb');
			if (comb=='1') {
				price_door=Number(price_door)+Number(valid_eval('cupboard_door_id'+id))+0;
			} else {
				price_door=Number(price_door)+Number(valid_eval('cupboard_door_id'+id));
			}
		}
		
		/*
		
		price_door=0;
		for (var key in array_door_id) {
			if (array_door_id[key]!='def') {
			
				price_door=Number(price_door)+Number(valid_eval('cupboard_door_id'+array_door_id[key]))+25;
			} else {
				price_door=Number(price_door)+Number(door_default_price);
			}
		}*/
		
		if (floors=="0") {
			add_floor=0;
		}
		if (ceiling=="0") {
			add_ceiling=0;
		}
		if (backWall_check==0) {
			backWall=0;
		}
		
		if (backlight!=0) {
			add_backlight=35;				// планка с лампочками
			if (door>2) {
				backlight=door;
				backlight=backlight-2;
				add_backlight=add_backlight+backlight*5;  // если лампочек больше 2 то каждая лампочка +5уе
			}
		} else {
			add_backlight=0;	
		}
		price_shelf=0;
		if (add_shelf!=0) {
			//price_shelf=add_shelf; 						// стойка с полками
			price_shelf=price_shelf+add_shelf*(shelf*5);	// полка в стойке
		}
		
		sidewall=sidewall*30		// стенка 
		shelf=shelf*5;				
		box=box*15;					// ящики
		cart=cart*7;				// полка
		
		price_summ=price_door+price_depth+price_width+add_floor+add_ceiling+sidewall+box+add_backlight+backWall+cart+price_shelf;
		price_summ = BelCurrency(price_summ);
		$('#summ').text(price_summ);
	}
	function abc2(n) {
			n += "";
			n = new Array(4 - n.length % 3).join("U") + n;
			return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
	}
	function BelCurrency(text){
			kurs = $(".today-rate").data("today-rate");
			price = text*kurs;
			price = abc2(price);
			price = price.substring(0, price.length - 4)
			return price;
	}
	
	function constructor (door, box, cart, sidewall, floors, ceiling, backlight) {
		var array= new Array ();
		var img='';
		var side='';
		if (sidewall!=0 ) {
			var side=$('[name="sidewall"] option:selected').attr('side');
		}
		
		for (var i = 1; i <= door; i++) {
			if (side=='left' && i==1) {
				sidewall=1;
			} else if (side=='right' && i==door) {
				sidewall=1;
			} else if (side=='all') {
				sidewall=1;
			} else {sidewall=0;}
			
			if (box!=0 || cart!=0) {
				array[i]=valid_eval('cupboard_door'+door+'_box'+box+'_cart'+cart+'_sidewall'+sidewall+'_floor'+floors+'_ceiling'+ceiling+'_position'+i+'_backlight'+backlight);
				if (array[i]=='0.jpg') {
					array[i]=valid_eval('cupboard_door'+door+'_box0_cart0_sidewall'+sidewall+'_floor'+floors+'_ceiling'+ceiling+'_position'+i+'_backlight'+backlight);
				}
				
			} else {
				array[i]=valid_eval('cupboard_door'+door+'_box0_cart0_sidewall'+sidewall+'_floor'+floors+'_ceiling'+ceiling+'_position'+i+'_backlight'+backlight);
			}
			img+='<img src="/components/com_cupboard/img/'+array[i]+'" />';

		}
		$('.cupdoard_constructor').html(img);
	}
	function constructor_door () {
		scenery=$('[name="scenery"]').val();
		var door_seg=$('[name="door"]').val();
		var img='';
		//var array_door=new Array();
		var array_door_id=new Array();
		comb=$('[name="combination"]').val();
		
		for (var i = 1; i <= door_seg; i++) {
			id=$('[name="door_numb_'+i+'"]').val();
			name=$('[name="door_numb_'+i+'"] [value="'+id+'"]').text();
			categor=$('[name="door_numb_'+i+'"] [value="'+id+'"]').attr('categor');
			
			comb=$('[name="door_numb_'+i+'"] [value="'+id+'"]').attr('comb');
			if (comb=="1") {
				for (var key in doorq[door_seg]) {
					if (doorq[door_seg][key]["name"]==name && doorq[door_seg][key]["position"]==i && doorq[door_seg][key]["category_name"]==categor) {
						img+='<img src="/components/com_cupboard/img/'+doorq[door_seg][key]["img"]+'" />';
					}
				}
			} else {
				array_door=valid_eval('cupboard_all_id'+id);
				img+='<img src="/components/com_cupboard/img/'+array_door+'" />';
			}
			
			/*
			
				array_door=valid_eval('cupboard_all_door'+door_seg+'_id'+id+'_position'+i);
			} else {
				array_door=valid_eval('cupboard_all_id'+id);
			}
			img+='<img src="/components/com_cupboard/img/'+array_door+'" />';*/
		}
	
	
		/*
		if (scenery!="0") {
			ostatok=door_seg-scenery;
			
			
			for (var i = 1; i <= scenery; i++) {
					array_door[i]=valid_eval('cupboard_all_door'+door_seg+'_id'+comb+'_position'+i);
					img+='<img src="/components/com_cupboard/img/'+array_door[i]+'" />';
					array_door_id[i]=comb;
					
			}
			for (var i = 1; i <= ostatok; i++) {
				img+='<img src="/components/com_cupboard/img/'+door_default+'" />';
				array_door_id[i]='def';
			}
		} else {
			for (var i = 1; i <= door_seg; i++) {
				array_door[i]=valid_eval('cupboard_all_id'+comb);
				
				img+='<img src="/components/com_cupboard/img/'+array_door[i]+'" />';
				array_door_id[i]=comb;
			}
		}
		/*	for (var key in door[door_seg]) {
				alert (door[door_seg][key]['name']);
				if (door[door_seg][key]['name']==comb) {
					for (var i = 1; i <= scenery; i++) {
						//cupboard_all_door
						
						
						for (var pos in door[door_seg][key]) {
							if (
					img+='<img src="/components/com_cupboard/img/'+door[door_seg][key]['img']+'" />';
						}
					}
				}
			}
		/*} else {
			for (var i = 1; i <= door_seg; i++) {
				img+='<img src="/components/com_cupboard/img/'+door_default+'" />';
			}
		}*/
		$('.cupdoard_constructor_door').html(img);
		return array_door_id;
	};
	$('#orders_open').click( function () {
		$('.orders_form').slideDown();
		$(this).hide();
		return false;
		
	});
	$('#orders').click( function () {
		var status="ok";
		if ($('.orders_form [name="name"]').val()=='') {
			$('.orders_form [name="name"]').css('border','1px solid #ff0000');
			status='error';
		} else {
			$('.orders_form [name="name"]').css('border','1px solid #77D5F7');
		}
		if (($('.orders_form [name="tel"]').val()=='')) {
			$('.orders_form [name="tel"]').css('border','1px solid #ff0000');
			status='error';
		} else {
			if($('.orders_form [name="tel"]').val()!='' && !/[0-9-\+]/.test($('.orders_form [name="tel"]').val())) {
				$('.orders_form [name="tel"]').css('border','1px solid #ff0000');
				status='error';
			} else {
				$('.orders_form [name="tel"]').css('border','1px solid #77D5F7');
			}
		}
		if ($('.orders_form [name="email"]').val()=='') {
			$('.orders_form [name="email"]').css('border','1px solid #ff0000');
			status='error';
		} else {
				if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test($('[name="email"]').val()))) {
					$('.orders_form [name="email"]').css('border','1px solid #ff0000');
					status='error';
				} else {
					$('.orders_form [name="email"]').css('border','1px solid #77D5F7');
				}
			}
		
		if (status!='error') {
			$('#status').html('Отправка...');
			var type=Number($('[name="type"]').val());
			var width=Number($('[name="width"]').val());
			var height=Number($('[name="height"]').val());
			var depth=Number($('[name="depth"]').val());
			var door=$('[name="door"]').val();
			
			var scenery=Number($('[name="scenery"]').val());
			var scenery_type=Number($('[name="scenery_type"]').val());
			var combination=Number($('[name="combination"]').val());
			var add=Number($('[name="add"]').val());
			
			var box=Number($('[name="box"]').val());
			var cart=$('[name="cart"]').val();
			var sidewall=Number($('[name="sidewall"]').val());
			var floors=$('[name="floor"]').val();
			var ceiling=$('[name="ceiling"]').val();
			var shelf=Number($('[name="shelf"]').val());
			var backlight=$('[name="backlight"]').prop('checked');
			var backWall_check=$('[name="backWall"]').prop('checked');
			var summ= $('#summ').text();
			
			if (backlight===true) {backlight=door;} else {backlight=0;}
			if (backWall_check===true) {backWall_check=1;} else {backWall_check=0;}
		
			if ($('.cupdoard_active').text()=='Komandor') {
				var producer='komandor';
			} else {
				var producer='senator';
			}
			if (!scenery_type) {
				  scenery_type=0;
			}
			if (!shelf) {
				shelf=0;
			}
			
			var combination = new Object();
			for (var i = 1; i <= door; i++) {
				id=$('[name="door_numb_'+i+'"]').val();
				//name=$('[name="door_numb_'+i+'"]').text();
				name=$('[name="door_numb_'+i+'"] [value="'+id+'"]').text();
				
				combination[i]={};
				combination[i]['text']=name;
			}
			
			
			var email=$('.orders_form [name="email"]').val();
			var name=$('.orders_form [name="name"]').val();
			var tel=$('.orders_form [name="tel"]').val();
			var text=$('.orders_form [name="text"]').val();
			//***Получаем значение атрибута src ДВЕРЕЙ для вставики в письмо***//
			var imgFasade = new Array();
			var arrDoor = jQuery(".cupdoard_constructor_door").children();
			jQuery.each(arrDoor, function(i, val) {
				imgFasade[i] = $(this).attr("src"); 
			});
			//***Получаем значение атрибута src ВНУТРЕННЕГО НАПОЛНЕНИЯ для вставики в письмо***//
			var imgInside = new Array();
			var arrInside = jQuery(".cupdoard_constructor").children();
			jQuery.each(arrInside, function(i, val) {
				imgInside[i] = $(this).attr("src"); 
			})
			$.ajax({
				url: '/index.php?option=com_cupboard&task=order&format=ajax',
				type: 'POST',
				data: {
							type: type, 
							width: width, 
							height: height, 
							depth: depth, 
							door:door, 
							box:box, 
							cart:cart, 
							sidewall:sidewall, 
							floors:floors, 
							ceiling:ceiling, 
							backlight:backlight, 
							backWall_check:backWall_check, 
							producer: producer, 
							scenery:scenery, 
							scenery_type:scenery_type, 
							combination:combination, 
							add:add, 
							imgFasade:imgFasade,
							imgInside:imgInside,
							shelf:shelf,
							summ: summ,
							email:email,
							name:name,
							tel:tel,
							text:text
						},
				dataType: 'json',
				success: function(data) {
					 $('#status').html('Отправлено<br>МЫ ЖДЕМ ВАШЕГО ЗВОНКА!');
					 $('#orders').hide();
					 $('.orders_form').slideUp();
				}
			});
		}
		return false;
	});
	
});