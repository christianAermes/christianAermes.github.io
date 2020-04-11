$(document).ready(()=> {
  
  let username = "christianAermes"
  let url = "https://api.github.com/users/"+username+"/repos"
  $.getJSON(url, (data)=>{
    let repos = []
    for (let d of data) {
      repos.push({id: d.name, 
                  description: d.description, 
                  url: d.html_url
                 })
    }
    for (let repo of repos) {
      let descriptionBox = $("#"+repo.id+" .description p")
      let projectBox = $("#"+repo.id)
      if (descriptionBox.length) {
        descriptionBox.html(repo.description)
        projectBox.attr("href", repo.url)
        projectBox.attr("target", "blank")
      }
    }
  })
})