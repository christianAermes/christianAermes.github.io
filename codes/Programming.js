$(document).ready(()=>{
  let username = "christianAermes"
  let url = "https://api.github.com/users/"+username+"/repos"
  
  $.getJSON(url, (data)=>{
    let repos = []
    for (let d of data) {
      repos.push({id:d.name, description: d.description})
    }
    
    for (let repo of repos) {
      let el = $("#"+repo.id)
      if (el.length) {
        $("#"+repo.id).mousemove((event)=>{
          let x = event.pageX;
          let y = event.pageY;
          let cssProps = {
            "display": "block",
            "position": "absolute",
            "top": y+"px",
            "left": x+"px",
            "width": "250px",
            "background": "white",
            "padding": "15px",
            "border-radius": "7px",
            "z-index": "99"
          }
          $("#projectDescription").css(cssProps)
          $("#projectDescription").html(repo.description)
        })
        $("#"+repo.id).mouseleave((event)=>{
          $("#projectDescription").css("display", "none")
        })
      }
    }
  })
})