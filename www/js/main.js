'use strict'

const onHelp = document.querySelectorAll(".help"),
      banner = document.querySelector(".banner");

onHelp.forEach(item => {
  item.addEventListener('mouseover', () => {
    banner.style.visibility = "visible";
  });
  item.addEventListener('mouseout', () => {
    banner.style.visibility = "hidden";
  });
});

// Навигация

$( () => {
  
  // При скролле
  $(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('#menu ul').css('top','50px') : $('#menu ul').css('top','50px');
  });
  
  // Toggle
  $('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('#menu ul').toggleClass('showMenu');
    
    $('#menu li').on('click', () => {
      $('#menu ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
    });
  });
  
});

  window.onload = function(){
      if(window.innerWidth >= 1024)
      document.querySelector('.video__wrapper').innerHTML = '<video loop autoplay muted><source type="video/mp4" src="/video/parking.mp4"></video>'
    };