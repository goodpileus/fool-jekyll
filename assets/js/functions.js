// -------------- //
// ON WINDOW LOAD //
// -------------- //
window.onload = function() {
  console.log('Loaded :-)');
  // cycleColors();
  // cycleColors2();
  // $('body').css({
  //   'opacity' : '1',
  // });;

  // $('.screensaver').removeClass( "saving" );
};

// $(".active")[0].scrollIntoView({
//             behavior: 'auto',
//             block: 'center',
//             inline: 'center'
//         });


// $('.sidebar-nav').animate({
//   scrollTop: ($('.active').offset().top)
// },500);

// var colors = ['#a6a55a', '#ccca65'];

// var colors2 = ['#555530', '#e3e29a'];

// function cycleColors(){
//   color = colors.shift();
//   colors.push(color);

//   $('.energy-capsule').css({
//     'background' : color,
//   });;
// }

// function cycleColors2(){
//   color = colors2.shift();
//   colors2.push(color);

//   $('.screensaver').css({
//     'background' : color,
//   });;
// }

// var interval = setInterval(timer, 5000);
// function timer() {
//   cycleColors();
// }

// var interval2 = setInterval(timer2, 10000);
// function timer2() {
//   cycleColors2();
// }

// KEY NAV
// ---------
// $(document).keydown(function(e) {
// switch (e.which) {
//   case 37: // left
//     var href = $('#prev-btn').attr('href');
//     window.location.href = href;
//     break;


//   case 38: // left
//     var href = $('#prev-btn').attr('href');
//     window.location.href = href;
//     break;

//   case 39: // right
//     var href = $('#next-btn').attr('href');
//     window.location.href = href;
//     break;

//   case 40: // right
//     var href = $('#next-btn').attr('href');
//     window.location.href = href;
//     break;
//     }
//     e.preventDefault();
// });

// var elem = document.getElementById("timer"), timeout, startTimer = function timer() {
//     timeout = setTimeout(timer, 30000)
//     $('.screensaver').addClass( "saving" );
// }

function resetTimer() {
    // here you reset the timer...
    clearTimeout(timeout);
    startTimer();
    $('.screensaver').toggleClass( "saving" );
    //... and also you could start again some other action
}
// document.addEventListener("mousemove", resetTimer);
// document.addEventListener("keypress", resetTimer);
// startTimer();


$(".fn").click(function() {
  $( this ).next( ".fnc" ).toggleClass( "fnc-show" );
});


if(Cookies.get('nav') == 'true') {
  $('.menu').addClass( "active");
}

$(".navigation-btn").click(function() {
  $( '.menu' ).toggleClass( "active" );

  if(Cookies.get('nav') == 'true') {
    Cookies.set('nav', false);
  } else {
    Cookies.set('nav', true);
  }
});


if(Cookies.get('power') == 'true') {
  $('.power').addClass( "active");
}

$(".power-btn").click(function() {
  $( '.power' ).toggleClass( "active" );

  if(Cookies.get('power') == 'true') {
    Cookies.set('power', false);
  } else {
    Cookies.set('power', true);
  }
});

if(Cookies.get('filter1') == 'true') {
  $('.filter').addClass( "dark1");
}

$(".filter1").click(function() {
  $( '.filter' ).toggleClass( "dark1" );

  if(Cookies.get('filter1') == 'true') {
    Cookies.set('filter1', false);
  } else {
    Cookies.set('filter1', true);
  }
});



