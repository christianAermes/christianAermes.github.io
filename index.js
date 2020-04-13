
$(document).ready(function(){
  
  $("main").load("./content/home.html").hide().fadeIn(1000)
  $("#homeBtn").addClass("active")
  $("#container").addClass("green-background")
  $("#container").css("padding-bottom", "0")
//  
////  $("main").load("./content/contact.html").hide().fadeIn(1000)
////  $("#contactBtn").addClass("active")
////  $("#container").addClass("red-background")
////  $("#container").css("padding-bottom", "0")
//
//  
  $("nav a").click(function(e) {
    e.preventDefault()
    if ($(this).attr("class") !== "active") {
      $("nav a").removeClass("active")
      $(this).addClass("active")

      try {
        $(document).scrollTop(0)
        $("main").load($(this).attr("href")).hide().fadeIn(1000)
        
        const id = $(this).attr("id")
        // add padding
        if (id === "homeBtn" || id === "contactBtn") {
          $("#container").css("padding-bottom", "0")
        } else {
          $("#container").css("padding-bottom", "80px")
        }

        // Gradient transition
        const currentBg = $("#container").attr("class")

        $("#gradient-transition").removeClass() 
        $("#gradient-transition").addClass(currentBg)

        $("#container").removeClass()
//        const newBg = "";
//        if (id === "homeBtn") {
//          newBg = "green-background"
//        } else if (id === "projectsBtn") {
//          newBg = "blue-background"
//        } else if (id === "cvBtn") {
//          newBg = "purple-background"
//        } else if (id === "contactBtn") {
//          newBg = "red-background"
//        }
        
        const newBg = id==="homeBtn" ? "green-background" : 
                      id==="projectsBtn" ? "blue-background" :
                      id==="cvBtn" ? "purple-background" :
                      id==="contactBtn" ? "red-background" :
                      "";
        
        $("#container").addClass(newBg)
        
        $("#gradient-transition").fadeOut(1000, function() {
          $("#gradient-transition").removeClass()
          $("#gradient-transition").addClass(newBg)
//          $("#gradient-transition").fadeIn(1)
        })
//        $("#gradient-transition").fadeOut(1000, ()=>{
//          $("#gradient-transition").removeClass()
//          $("#gradient-transition").addClass(newBg)
//          $("#gradient-transition").fadeIn(1)
//        })

      } catch (err) {
        console.log("not found")
      }
    }
  })
})