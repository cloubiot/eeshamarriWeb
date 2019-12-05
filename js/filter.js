filterSelections("all")
function filterSelections(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
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

  // arrow toggle


function solution1(){
    $("#image1").toggleClass('flip');
    var x = document.getElementById("demo2").getAttribute("aria-expanded"); 
    var y = document.getElementById("demo3").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image2").toggleClass('flip');
       $("#demo2").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image3").toggleClass('flip');
      $("#demo3").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo2").setAttribute("aria-expanded", x);
  document.getElementById("demo3").setAttribute("aria-expanded", y);
  
}
function solution2(){
  $("#image2").toggleClass('flip');
  var x = document.getElementById("demo1").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo3").getAttribute("aria-expanded"); 
    if(x == "true"){  
       x = "false"
       $("#image1").toggleClass('flip');
       $("#demo1").removeClass('collapse in').toggleClass('collapse');
    }
    if(y == "true"){
      y = "false"
      $("#image3").toggleClass('flip');
      $("#demo3").removeClass('collapse in').toggleClass('collapse');
    }
  document.getElementById("demo1").setAttribute("aria-expanded", x);
  document.getElementById("demo3").setAttribute("aria-expanded", y);
}

function solution3(){
  $("#image3").toggleClass('flip');
  var x = document.getElementById("demo1").getAttribute("aria-expanded"); 
  var y = document.getElementById("demo2").getAttribute("aria-expanded"); 
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
  document.getElementById("demo1").setAttribute("aria-expanded", x);
  document.getElementById("demo2").setAttribute("aria-expanded", y);
}