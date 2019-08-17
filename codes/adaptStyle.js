$(document).ready(()=>{
  
  function setContainerPosition() {
    let headerHeight = ($(".header").height()).toString();
    headerHeight = headerHeight+"px 10% 10% 10%";
    $(".container").css("padding", headerHeight);
  }

  setContainerPosition();
  
  $(window).resize(()=>{
    setContainerPosition();
  })
})