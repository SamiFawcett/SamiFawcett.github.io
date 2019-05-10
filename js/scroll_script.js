
window.onscroll = function(){
  check_offset();
}


//navigation bar
var navigation_bar = document.getElementById('navigation-items');
//offset position of navbar
var offset = navigation_bar.offsetTop;

function check_offset(){
  //if the offset is less than page verical offset
  //then add the "sticky" class to navigation bar
  if(window.pageYOffset >= offset){
    console.log("there is an offset");
    navigation_bar.classList.add("sticky");
  } else {
    console.log("there is not an offset");
    navigation_bar.classList.remove("sticky");
  }
}
