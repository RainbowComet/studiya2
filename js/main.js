
//меню
//галерея
$('#js-menu_item').hover(
	function(){ $('#menu__item').addClass('menu_hover') },
	function(){ $('#menu__item').removeClass('menu_hover') }
	);
$('#js-menu_item').hover(
	function(){ $('#menu__content').addClass('hover') },
	function(){ $('#menu__content').removeClass('hover') }
);
//услуги
$('#js-menu_item2').hover(
	function(){ $('#menu__item2').addClass('menu_hover') },
	function(){ $('#menu__item2').removeClass('menu_hover') }
	);
$('#js-menu_item2').hover(
	function(){ $('#menu__content2').addClass('hover') },
	function(){ $('#menu__content2').removeClass('hover') }
);
//магазин
$('#js-menu_item3').hover(
	function(){ $('#menu__item3').addClass('menu_hover') },
	function(){ $('#menu__item3').removeClass('menu_hover');/* $('.shop__radio-btn').removeAttr("checked") */}
	);
$('#js-menu_item3').hover(
	function(){ $('#menu__content3').addClass('hover') },
	function(){ $('#menu__content3').removeClass('hover'); /*$('.shop__radio-btn').removeAttr("checked") */}
);
//форум
$('#js-menu_item4').hover(
	function(){ $('#menu__item4').addClass('menu_hover') },
	function(){ $('#menu__item4').removeClass('menu_hover') }
	);
$('#js-menu_item4').hover(
	function(){ $('#menu__content4').addClass('hover') },
	function(){ $('#menu__content4').removeClass('hover') }
);
$('#forum-1').focus(
	function(){ $('#forum-inf1').addClass('visible-inf'); }
);
$('.text-field').focus(
	function(){ $('#forum-inf1').addClass('visible-inf') }
);
//о нас
$('#js-menu_item5').hover(
	function(){ $('#menu__item5').addClass('menu_hover') },
	function(){ $('#menu__item5').removeClass('menu_hover'); }
	);
$('#js-menu_item5').hover(
	function(){ $('#menu__content5').addClass('hover') },
	function(){ $('#menu__content5').removeClass('hover'); }
);
//личный кабинет
$('#js-menu_item6').hover(
	function(){ $('#menu__item6').addClass('menu__item-profile_hover') },
	function(){ $('#menu__item6').removeClass('menu__item-profile_hover'); }
	);
$('#js-menu_item6').hover(
	function(){ $('#menu__content6').addClass('hover') },
	function(){ $('#menu__content6').removeClass('hover'); }
); 
$('#profile-1').focus(
	function(){ $('#profile-inf1').addClass('visible-inf');
	$('#profile-inf2').removeClass('visible-inf');
	$('#profile-inf3').removeClass('visible-inf') }
);
$('.text-field').focus(
	function(){ $('#profile-inf1').addClass('visible-inf') }
);
$('#profile-2').focus(
	function(){ $('#profile-inf2').addClass('visible-inf');
	$('#profile-inf1').removeClass('visible-inf');
	$('#profile-inf3').removeClass('visible-inf') }
);
$('#profile-3').focus(
	function(){ $('#profile-inf3').addClass('visible-inf');
	$('#profile-inf2').removeClass('visible-inf');
	$('#profile-inf1').removeClass('visible-inf') }
);

function enlarge1(img) {
	(function(){ $('#gallery').addClass('hidden') })();
	(function(){ $('#show_img').removeClass('hidden') })();
	(function(){ $('#show_img').addClass('visible') })();
	(function(){ $('#show_img').addClass('picture'+img) })();
	$("#img_number").attr("value", img);
}
function change_img(next_or_prev) {
	let num;
	num = $("#img_number").attr("value");
	let new_num;
	let max_num_of_imgs=6; // макс количество изображений
	if (next_or_prev=='next') {
		if(Number(num)==max_num_of_imgs) new_num=1; 
		else new_num=Number(num)+1;
	}
	else {
		if(Number(num)==1) new_num=max_num_of_imgs;
		else new_num=Number(num)-1;
	}
	(function(){ $('#show_img').removeClass('picture'+num) })();
	(function(){ $('#show_img').addClass('picture'+new_num) })();
	$("#img_number").attr("value", new_num);
}
$('#next').click(
function(){ change_img('next') }
);
$('#prev').click(
function(){ change_img('prev') }
);
function lessen() {
	(function(){ $('#gallery').removeClass('hidden') })();
	$("#show_img").attr("class", "show_img d-flex hidden");
}

/*смена языков анимация*/
function activate_language_box() {
	(function(){ $('#language_box-m').addClass('activated') })();
}
function animation(lang) {
	
	/*$('span').removeClass('animationRU-en');
	$('span').removeClass('animationDE-en');
	$('span').removeClass('animationEN-en');
	$('span').removeClass('animationRU-ru');
	$('span').removeClass('animationDE-ru');
	$('span').removeClass('animationEN-ru');
	$('span').removeClass('animationRU-de');
	$('span').removeClass('animationDE-de');
	$('span').removeClass('animationEN-de');
	(function(){ $('#en-m').addClass('animation'+lang+'-en') })();
	(function(){ $('#de-m').addClass('animation'+lang+'-de') })();
	(function(){ $('#ru-m').addClass('animation'+lang+'-ru') })();
	
			activate_language_box();
			$('.d').css("animation-play-state", "running");
			
		$('.1').attr('class', 'd animation_clockwise-main 2');
		$('.3').attr('class', 'd animation_clockwise-left 1');
		$('.2').attr('class', 'd animation_clockwise-right 3');

		$('#1').attr('id', '2');
		$('#3').attr('id', '1');
		$('#2').attr('id', '3');*/

}
function enlarge_text (div_id) {
	$("body").css("overflow", "hidden"); 
	$('#'+ div_id).children('.loupe').attr("onclick", "lessen_text('"+div_id+"')");
	$('#enl_text').html($("#"+div_id).html());
	$("#enl_text").css("visibility", "visible");

}
function lessen_text (div_id) {
	$("body").css("overflow", "auto");
	$('#'+ div_id).children('.loupe').attr('onclick', "enlarge_text('" + div_id + "')");
	$('#enl_text').html( );
	$("#enl_text").css("visibility", "hidden");
}
$('#menu-btn').click(function() {
	$('#menu-btn').toggleClass("menu-btn-active");
	$(".mobile-menu").toggleClass("show_content");
	$(".menu-wrapper").toggleClass("menu-wrapper-active");
});
$('#menu__item-profile').click(function() {
	$('#menu__item-profile').toggleClass("menu__item-profile-active");
	$(".profile-content").toggleClass("show_content");
});
$(document).mouseup(function (e) {
    if (!$("#menu-btn").is(e.target) && $(".menu-wrapper").has(e.target).length === 0 && $("#menu-btn").hasClass('menu-btn-active') ){
		$('#menu-btn').toggleClass("menu-btn-active");
		$(".mobile-menu").toggleClass("show_content");
		$(".menu-wrapper").toggleClass("menu-wrapper-active");
    }
	if (!$("#menu__item-profile").is(e.target) && $(".profile-content").has(e.target).length === 0 && $("#menu__item-profile").hasClass('menu__item-profile-active') ){
		$('#menu__item-profile').toggleClass("menu__item-profile-active");
		$(".profile-content").toggleClass("show_content");
	}
});
$('.inner-menu__title').click(function() {
	$(".inner-menu").filter(".show_content").removeClass("show_content");
	$(this).siblings(".inner-menu").toggleClass("show_content");
	$(".mobile-menu").css("text-align", "left");
	$(".menu_content").filter(".show_content").removeClass("show_content");
	$(".menu_title").filter(".menu_title-hover").removeClass("menu_title-hover");
	$('html, body').animate({
        scrollTop: $(this).offset().top-50  // класс объекта к которому приезжаем
    }, 400);
});
$('.menu_title').click(function() {
	$(".menu_content").filter(".show_content").removeClass("show_content");
	$(this).find(".menu_content").toggleClass("show_content");
	$('.menu_title').filter(".menu_title-hover").removeClass("menu_title-hover");
	$(this).toggleClass("menu_title-hover");
	$('html, body').animate({
        scrollTop: $(this).offset().top-50  // класс объекта к которому приезжаем
    }, 400);
});
if ($(window).width()<=375) {
$('#call_phone').hover(
	function(){ $('#callback_phone').addClass('show_content'); $('#callback_email').removeClass('show_content'); $('#callback_whatsapp').removeClass('show_content'); $("nav").css("height", "416px"); }
);
$('#call_whatsapp').hover(
	function(){ $('#callback_whatsapp').addClass('show_content'); $('#callback_phone').removeClass('show_content'); $('#callback_email').removeClass('show_content'); $("nav").css("height", "416px"); }
);
}
else {
$('#call_phone').hover(
	function(){ $('#callback_phone').addClass('show_content'); $('#callback_email').removeClass('show_content'); $('#callback_whatsapp').removeClass('show_content'); $("nav").css("height", "426px"); }
);
$('#call_whatsapp').hover(
	function(){ $('#callback_whatsapp').addClass('show_content'); $('#callback_phone').removeClass('show_content'); $('#callback_email').removeClass('show_content'); $("nav").css("height", "426px"); }
);
}
$('#write_email').hover(
	function(){ $('#callback_email').addClass('show_content'); $('#callback_phone').removeClass('show_content'); $('#callback_whatsapp').removeClass('show_content'); $("nav").css("height", "513px"); }
);	


$('.eye').click(function() {
	if ($(this).siblings('.password').attr('type') == 'password') $(this).siblings('.password').attr('type', 'text');
	else $(this).siblings('.password').attr('type', 'password');
	$(this).toggleClass('no-eye');
});
	function open_menu() {
		$(".mobile-menu").toggleClass("show_content");
		$(".menu-wrapper").toggleClass("menu-wrapper-active");
	}

//выезжающее меню при клике
function open_menu() {
	(function(){ $('#main-nav').addClass('visible animate__animated animate__slideInUp') })();
	(function(){ $('#main-nav').removeClass('hidden') }) ();
	$("#otherpage__nav").attr("style", "height:200px;");
	$("#openmenu").replaceWith('<li class="gallery-nav__item" id="closemenu" onclick="close_menu()"><img class="open_menu" src="img/arrows-down.svg"></li>');
}
function close_menu() {
	(function(){ $('#main-nav').addClass('hidden') })();
	(function(){ $('#main-nav').removeClass('visible') }) ();
	$("#otherpage__nav").attr("style", "");
	$("#closemenu").replaceWith('<li class="gallery-nav__item" id="openmenu" onmouseover="open_menu()"><img class="open_menu" src="img/arrows.svg"></li>');
}