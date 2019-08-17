$(document).ready(()=>{
  let imgList = $("img");
  let element;
  var show = $("#showing")[0];
  
  for (var i=0; i<imgList.length; i++){
    if (imgList[i].id !== "profilePicture") {
      imgList[i].addEventListener("click", function(){
        show.style.display = "block";

        if (!document.getElementById("showImg")){
          var showImg = document.createElement("img");
        } else {
          document.getElementById("showImg").remove();
          var showImg = document.createElement("img");
        }

        showImg.src = this.src;
        showImg.id = "showImg";
        show.appendChild(showImg);

        showImg.style.height = "500px";

        $("#container").css("opacity", "0.5");

        show.addEventListener("click", function(){
          show.style.display = "none";
          $("#container").css("opacity", "1");
        });
      });
    }
  }
});