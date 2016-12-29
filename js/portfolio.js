

//variables

var size = document.body.clientWidth;
var hamburger = $(".navigation-hamburger");
var nav = $(".navigation");
var menu = $(".menu");


//functions

function smallMenuAction( event ) {
  if (event.data.bodyWidth < 480) {
  menu.hasClass('menu-hidden') ? menu.removeClass('menu-hidden') : menu.addClass('menu-hidden');
  }
}

function iconRotation() {
  var icon = $('.navigation-hamburger i');
  console.log(menu.hasClass('menu-hidden'));
  if (!(menu.hasClass('menu-hidden')))
    icon.removeClass('icon-menu').addClass('icon-menu-rotated')
  else
    icon.removeClass('icon-menu-rotated').addClass('icon-menu')
}

function menuHideLink( event ) {
  if (event.data.bodyWidth < 480) {
  menu.addClass('menu-hidden');
  iconRotation();
  }
}

function addClassActive() {
  $('.menu a').removeClass('active');
  var targetSection = $('a', this).attr('href');
  $('.menu-item a[href="' + targetSection + '"]').addClass('active');
}


function stickyMenu() {
  if (size > 480){
    var position = $(this).scrollTop();
    if ( position >= 60 ) {
      nav.addClass('fixed-menu');
    } else {
      nav.removeClass('fixed-menu');
    }
  }
}

function smoothScroll( event ) {
  event.preventDefault();
  var id = $('a', this).attr('href');
  var offset = $(id).offset();
  $('body').animate(
    { scrollTop: offset.top - 80 },
    400
  );
}
//events

//for screen width < 480 px
hamburger.bind('click', { bodyWidth: size }, smallMenuAction);
hamburger.bind('click', { bodyWidth: size }, iconRotation);
$('.menu-item, .footer-list-item').bind('click', { bodyWidth: size }, menuHideLink);
$('.menu-item, .footer-list-item').bind('click', addClassActive);
$('.menu-item, .footer-list-item').bind('click', smoothScroll);



//for screen width > 480 px

$(window).scroll(stickyMenu);
