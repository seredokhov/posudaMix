
// Yandex Maps API

ymaps.ready(init);
var myMap;
var myPlacemark;
var width=document.body.clientWidth;

function init(){
	myMap = new ymaps.Map("map", {
		center: [55.731262, 37.666036],
		zoom: 17
	});
	myMap.behaviors.disable('scrollZoom');
	if (width < 1200) {
		myMap.behaviors.disable('drag');
	}
	myPlacemark = new ymaps.Placemark([55.731262, 37.666036],{}, {
		iconLayout: 'default#image',
		iconImageHref: 'images/mark.png',
		iconImageSize: [64, 90],
		iconImageOffset: [0, -90],
	});
	myMap.geoObjects.add(myPlacemark);
	if (width > 700) {
		myMap.balloon.open(myMap.getCenter(),{
			contentBody: '<div style="width:300px;height:85px;color:#141311;font-size:16px;line-height:22px;padding:15px 5px;">Москва, 3-й Крутицкий переулок<br> Дом 11 (ст. м. Пролетарская)<br> +7 495 642 2373</div>'
		}, {
			offset: [-320, -40],
			layout: "default#imageWithContent",
			imageHref: 'images/baloon.png',
			imageSize: [327, 89],
			}
		);
	}
}

// Валидация формы

$(function(){
	var orderBtn = $('.btn_send');
	var form = orderBtn.parent().parent();
	var name = $("[name = name]");
	var phone = $("[name = phone]");
	var re = /\+\d\(\d\d\d\) \d\d\d-\d\d\d\d/;


	orderBtn.click(function(){

		if (name.val().length >= 3 && re.test(phone.val()) ) {
			form.submit();
			name.removeClass('error');
			phone.removeClass('error');
		} else {
			if (name.val().length < 3) {
				name.addClass('error');
			} else {
				name.removeClass('error');
			}
			if ( !re.test(phone.val()) ) {
				phone.addClass('error');
			} else {
				phone.removeClass('error');
			}
			return false;
		}
	})
});

//Аякс отправка форм
//Документация: http://api.jquery.com/jquery.ajax/

$(document).ready(function() {
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

/* Маска */
jQuery(function($){
	$("[name = phone]").mask("+7(999) 999-9999");
});

//Паралакс 
if($(document).width() > 1200) {
	$(function(){
		var st = $(this).scrollTop();
		var offset = $('.advantages_section').offset().top;
		var img = $('.advantages_section');
		var windowScroll = $(window).scrollTop();
		
		$(window).scroll(function(){
			windowScroll = $(window).scrollTop();
			if (windowScroll > offset) {
				img.css({
					"background-position" : "center " +  (windowScroll-offset)/2 + "px"
				})
			}
			else {
				img.css({
					"background-position" : "center " +  0 + "px"
				})
			}
		});
	})
}


/* Табы */
$(function(){
	var link = $('.discount_item').find('.button_group').find('a');
	link.click(function(){
		var index = $(this).index();
		$(this).parent().siblings('.tab_content').find('.tab').not(':eq('+index+')').removeClass('active');
		$(this).parent().siblings('.tab_content').find('.tab:eq(' + index + ')').addClass('active');
		return false;
	})
})

/* Модалка */
$(function(){
	var link = $('a.callback').add('.change_link').add('.more_info');
	var modal = $('.modal');
	var overlay = $('.overlay');
	var close = modal.find('.close_modal')

	link.click(function(){
		overlay.fadeIn();
		modal.fadeIn();
		return false;
	})
	overlay.click(function(){
		$(this).fadeOut();
		modal.fadeOut();
	})
	close.click(function(){
		overlay.fadeOut();
		modal.fadeOut();
	})
})

// Валидация формы в модальном окне

$(function(){
	var orderBtn = $('.modal_btn');
	var form = orderBtn.parent();
	var name = form.find("[name = name]")
	var phone = form.find("[name = phone]");
	var re = /\+\d\(\d\d\d\) \d\d\d-\d\d\d\d/;


	orderBtn.click(function(){
		if (name.val().length >= 3 && re.test(phone.val()) ) {
			form.submit();
			name.removeClass('error');
			phone.removeClass('error');
		} else {
			if (name.val().length < 3) {
				name.addClass('error');
			} else {
				name.removeClass('error');
			}
			if ( !re.test(phone.val()) ) {
				phone.addClass('error');
			} else {
				phone.removeClass('error');
			}
			return false;
		}
	})
});