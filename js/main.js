(function($) {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // local scroll
  jQuery('.navbar').localScroll({
    hash: true,
    offset: {
      top: 0
    },
    duration: 800,
    easing: 'easeInOutExpo'
  });

  $('.scrollto').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top - 6
      }, 800, 'easeInOutExpo');
  });

  $(".navbar-collapse a").on('click', function() {
  $(".navbar-collapse").removeClass('in');
  $(".navbar-collapse").addClass('collapse');
  });

  // fancybox
  jQuery(".fancybox").fancybox();

  //testimonial
  jQuery('.testimonials-slider').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 4000,
    direction: "horizontal" //Direction of slides
  });

  if (Modernizr.mq("screen and (max-width:1024px)")) {
    jQuery("body").toggleClass("body");

  } else {
    var s = skrollr.init({
      mobileDeceleration: 1,
      edgeStrategy: 'set',
      forceHeight: true,
      smoothScrolling: true,
      smoothScrollingDuration: 300,
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          return 1 - p;
        }
      }
    });
  }
  //scroll menu
  jQuery('.appear').appear();
  jQuery(".appear").on("appear", function(data) {
    var id = $(this).attr("id");
    jQuery('.nav li').removeClass('active');
    jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
  });

  //stats
  var runOnce = true;
  jQuery(".stats").on("appear", function(data) {
    var counters = {};
    var i = 0;
    if (runOnce) {
      jQuery('.number').each(function() {
        counters[this.id] = $(this).html();
        i++;
      });
      jQuery.each(counters, function(i, val) {
        //console.log(i + ' - ' +val);
        jQuery({
          countNum: 0
        }).animate({
          countNum: val
        }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
            jQuery('#' + i).text(Math.floor(this.countNum));
          }
        });
      });
      runOnce = false;
    }
  });

  //parallax
  var isMobile = false;

  if (Modernizr.mq('only all and (max-width: 1024px)')) {
    isMobile = true;
  }


  if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length || isMobile == false && $('#testimonials').length)) {


    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  //nicescroll
  $("html").niceScroll({
    zindex: 999,
    cursorborder: "",
    cursorborderradius: "2px",
    cursorcolor: "#191919",
    cursoropacitymin: .5
  });

  function initNice() {
    if ($(window).innerWidth() <= 960) {
      $('html').niceScroll().remove();
    } else {
      $("html").niceScroll({
        zindex: 999,
        cursorborder: "",
        cursorborderradius: "2px",
        cursorcolor: "#191919",
        cursoropacitymin: .5
      });
    }
  }
  $(window).load(initNice);
  $(window).resize(initNice);

})(jQuery);

$(window).load(function(){
  // portfolio
  if ($('.isotopeWrapper').length) {

    var $container = $('.isotopeWrapper');
    var $resize = $('.isotopeWrapper').attr('id');
    // initialize isotope

    $container.isotope({
      itemSelector: '.isotopeItem',
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize
      }

    });

    $('#filter a').click(function() {

      $('#filter a').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: 'easeOutQuart',
          queue: false
        }
      });
      return false;
    });


    $(window).smartresize(function() {
      $container.isotope({
        // update columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / $resize
        }
      });
    });
  }
});

//....Fiter section for solution../////

filterSelections("soln0")
function filterSelections(c,d) {
  if(d=="true"){
   $("#demo5").removeClass('collapse in').toggleClass('collapse');
   $("#image5").toggleClass('flip');
  //  alert("true")
  }
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show",c);
  }
}

// Show filtered elements
function w3AddClass(element, name,event) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
      // activeBtn(element.className,event);
    }
  }
}
function activeBtn(className,event){
  className = className.match(event)
  // alert(className)
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

$(function() {                       //run when the DOM is ready
    $(".btn1").click(function() {  //use a class, since your ID gets mangled
        $(this).addClass('active').siblings().removeClass('active');     //add the class to the clicked element
    });
  });

  $(function() {                       //run when the DOM is ready
    $(".ref-select").click(function() {  //use a class, since your ID gets mangled
        $(this).addClass('active').siblings().removeClass('active');     //add the class to the clicked element
    });
  });
  
  
  //....... arrow toggle .......///

  function solution0(){
    $("#image0").toggleClass('flip');
    var x = document.getElementById("demo1").getAttribute("aria-expanded"); 
    var y = document.getElementById("demo2").getAttribute("aria-expanded"); 
    var z = document.getElementById("demo3").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image1").toggleClass('flip');
       $("#demo1").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image2").toggleClass('flip');
      $("#demo2").removeClass('collapse in').toggleClass('collapse');
    }
    if(z == "true"){
      z = "false"
      $("#image3").toggleClass('flip');
      $("#demo3").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo1").setAttribute("aria-expanded", x);
  document.getElementById("demo2").setAttribute("aria-expanded", y);
  document.getElementById("demo3").setAttribute("aria-expanded", z);
  
  }
  function solution1(){
  $("#image1").toggleClass('flip');
  var x = document.getElementById("demo0").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo2").getAttribute("aria-expanded"); 
  var z = document.getElementById("demo3").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image0").toggleClass('flip');
       $("#demo0").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image2").toggleClass('flip');
      $("#demo2").removeClass('collapse in').toggleClass('collapse');
    }
    if(z == "true"){
      z = "false"
      $("#image3").toggleClass('flip');
      $("#demo3").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo0").setAttribute("aria-expanded", x);
  document.getElementById("demo2").setAttribute("aria-expanded", y);
  document.getElementById("demo3").setAttribute("aria-expanded", z);
  }
  
  function solution2(){
  $("#image2").toggleClass('flip');
  var x = document.getElementById("demo0").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo1").getAttribute("aria-expanded"); 
  var z = document.getElementById("demo3").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image0").toggleClass('flip');
       $("#demo0").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image1").toggleClass('flip');
      $("#demo1").removeClass('collapse in').toggleClass('collapse');
    }
    if(z == "true"){
      z = "false"
      $("#image3").toggleClass('flip');
      $("#demo3").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo0").setAttribute("aria-expanded", x);
  document.getElementById("demo1").setAttribute("aria-expanded", y);
  document.getElementById("demo3").setAttribute("aria-expanded", z);
  }
  
  function solution3(){
    $("#image3").toggleClass('flip');
    var x = document.getElementById("demo0").getAttribute("aria-expanded"); 
    var y = document.getElementById("demo1").getAttribute("aria-expanded"); 
    var z = document.getElementById("demo2").getAttribute("aria-expanded"); 
      if(x == "true"){  
         x = "false"
         $("#image0").toggleClass('flip');
         $("#demo0").removeClass('collapse in').toggleClass('collapse');
      }
      if(y == "true"){
        y = "false"
        $("#image1").toggleClass('flip');
        $("#demo1").removeClass('collapse in').toggleClass('collapse');
      }
      if(z == "true"){
        z = "false"
        $("#image2").toggleClass('flip');
        $("#demo2").removeClass('collapse in').toggleClass('collapse');
      }
    document.getElementById("demo0").setAttribute("aria-expanded", x);
    document.getElementById("demo1").setAttribute("aria-expanded", y);
    document.getElementById("demo2").setAttribute("aria-expanded", z);
    }
  


filterSelection("serv1")
function filterSelection(c,d) {
  if(d=="false"){
    $("#demo4").removeClass('collapse in').toggleClass('collapse');
    $("#image4").toggleClass('flip');
    // alert("false")
   }
  var x, i;
  x = document.getElementsByClassName("filterDivs");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1){ 
      w3AddClass(x[i], "show",c)
    };
  }
}

$(function() {                       //run when the DOM is ready
  $(".btn2").click(function() {  //use a class, since your ID gets mangled
      $(this).addClass('active').siblings().removeClass('active');     //add the class to the clicked element
  });
});

function service1(){
  $("#image4").toggleClass('flip');
  var x = document.getElementById("demo5").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo6").getAttribute("aria-expanded"); 
  // var z = document.getElementById("demo7").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image5").toggleClass('flip');
     $("#demo5").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image6").toggleClass('flip');
    $("#demo6").removeClass('collapse in').toggleClass('collapse');
  }
  // if(z == "true"){
  //   z = "false"
  //   $("#image7").toggleClass('flip');
  //   $("#demo7").removeClass('collapse in').toggleClass('collapse');
  // }
document.getElementById("demo5").setAttribute("aria-expanded", x);
document.getElementById("demo6").setAttribute("aria-expanded", y);
// document.getElementById("demo7").setAttribute("aria-expanded", z);

}
function service2(){
$("#image5").toggleClass('flip');
var x = document.getElementById("demo4").getAttribute("aria-expanded"); 
var y = document.getElementById("demo6").getAttribute("aria-expanded"); 
// var z = document.getElementById("demo7").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image4").toggleClass('flip');
     $("#demo4").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image6").toggleClass('flip');
    $("#demo6").removeClass('collapse in').toggleClass('collapse');
  }
  // if(z == "true"){
  //   z = "false"
  //   $("#image7").toggleClass('flip');
  //   $("#demo7").removeClass('collapse in').toggleClass('collapse');
  // }
document.getElementById("demo4").setAttribute("aria-expanded", x);
document.getElementById("demo6").setAttribute("aria-expanded", y);
// document.getElementById("demo7").setAttribute("aria-expanded", z);
}

function service3(){
$("#image6").toggleClass('flip');
var x = document.getElementById("demo4").getAttribute("aria-expanded"); 
var y = document.getElementById("demo5").getAttribute("aria-expanded"); 
// var z = document.getElementById("demo7").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image4").toggleClass('flip');
     $("#demo4").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image5").toggleClass('flip');
    $("#demo5").removeClass('collapse in').toggleClass('collapse');
  }
  // if(z == "true"){
  //   z = "false"
  //   $("#image7").toggleClass('flip');
  //   $("#demo7").removeClass('collapse in').toggleClass('collapse');
  // }
document.getElementById("demo4").setAttribute("aria-expanded", x);
document.getElementById("demo5").setAttribute("aria-expanded", y);
// document.getElementById("demo7").setAttribute("aria-expanded", z);
}

// function service4(){
//   $("#image7").toggleClass('flip');
//   var x = document.getElementById("demo4").getAttribute("aria-expanded"); 
//   var y = document.getElementById("demo5").getAttribute("aria-expanded"); 
//   var z = document.getElementById("demo6").getAttribute("aria-expanded"); 
//     if(x == "true"){  
//        x = "false"
//        $("#image4").toggleClass('flip');
//        $("#demo4").removeClass('collapse in').toggleClass('collapse');
//     }
//     if(y == "true"){
//       y = "false"
//       $("#image5").toggleClass('flip');
//       $("#demo5").removeClass('collapse in').toggleClass('collapse');
//     }
//     if(z == "true"){
//       z = "false"
//       $("#image6").toggleClass('flip');
//       $("#demo6").removeClass('collapse in').toggleClass('collapse');
//     }
//   document.getElementById("demo4").setAttribute("aria-expanded", x);
//   document.getElementById("demo5").setAttribute("aria-expanded", y);
//   document.getElementById("demo6").setAttribute("aria-expanded", z);
//   }

  filterSelectionProd("prod2")
function filterSelectionProd(c,d) {
  if(d=="pass"){
   $("#demo6").removeClass('collapse in').toggleClass('collapse');
   $("#image6").toggleClass('flip');
  //  alert("pass")
  }
  var x, i;
  x = document.getElementsByClassName("filterDivProd");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show",c);
  }
}

$(function() {                       //run when the DOM is ready
  $(".btn3").click(function() {  //use a class, since your ID gets mangled
      $(this).addClass('active').siblings().removeClass('active');     //add the class to the clicked element
  });
});

function product1(){
  $("#image8").toggleClass('flip');
  var x = document.getElementById("demo9").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo10").getAttribute("aria-expanded"); 
  var z = document.getElementById("demo11").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image9").toggleClass('flip');
     $("#demo9").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image10").toggleClass('flip');
    $("#demo10").removeClass('collapse in').toggleClass('collapse');
  }
  if(z == "true"){
    z = "false"
    $("#image11").toggleClass('flip');
    $("#demo11").removeClass('collapse in').toggleClass('collapse');
  }
document.getElementById("demo9").setAttribute("aria-expanded", x);
document.getElementById("demo10").setAttribute("aria-expanded", y);
document.getElementById("demo11").setAttribute("aria-expanded", z);

}
function product2(){
$("#image9").toggleClass('flip');
var x = document.getElementById("demo8").getAttribute("aria-expanded"); 
var y = document.getElementById("demo10").getAttribute("aria-expanded"); 
var z = document.getElementById("demo11").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image8").toggleClass('flip');
     $("#demo8").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image10").toggleClass('flip');
    $("#demo10").removeClass('collapse in').toggleClass('collapse');
  }
  if(z == "true"){
    z = "false"
    $("#image11").toggleClass('flip');
    $("#demo11").removeClass('collapse in').toggleClass('collapse');
  }
document.getElementById("demo8").setAttribute("aria-expanded", x);
document.getElementById("demo10").setAttribute("aria-expanded", y);
document.getElementById("demo11").setAttribute("aria-expanded", z);
}

function product3(){
$("#image10").toggleClass('flip');
var x = document.getElementById("demo8").getAttribute("aria-expanded"); 
var y = document.getElementById("demo9").getAttribute("aria-expanded"); 
var z = document.getElementById("demo11").getAttribute("aria-expanded"); 
  if(x == "true"){  
     x = "false"
     $("#image8").toggleClass('flip');
     $("#demo8").removeClass('collapse in').toggleClass('collapse');
  }
  if(y == "true"){
    y = "false"
    $("#image9").toggleClass('flip');
    $("#demo9").removeClass('collapse in').toggleClass('collapse');
  }
  if(z == "true"){
    z = "false"
    $("#image11").toggleClass('flip');
    $("#demo11").removeClass('collapse in').toggleClass('collapse');
  }
document.getElementById("demo8").setAttribute("aria-expanded", x);
document.getElementById("demo9").setAttribute("aria-expanded", y);
document.getElementById("demo11").setAttribute("aria-expanded", z);
}

function product4(){
  $("#image11").toggleClass('flip');
  var x = document.getElementById("demo8").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo9").getAttribute("aria-expanded"); 
  var z = document.getElementById("demo10").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image8").toggleClass('flip');
       $("#demo8").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image9").toggleClass('flip');
      $("#demo9").removeClass('collapse in').toggleClass('collapse');
    }
    if(z == "true"){
      z = "false"
      $("#image10").toggleClass('flip');
      $("#demo10").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo8").setAttribute("aria-expanded", x);
  document.getElementById("demo9").setAttribute("aria-expanded", y);
  document.getElementById("demo10").setAttribute("aria-expanded", z);
  }
  
  