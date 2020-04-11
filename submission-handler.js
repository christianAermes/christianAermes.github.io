$(document).ready(()=>{
  console.log("Submission handler loaded")
  let form = $(".gform")
  form.on("submit", handleSubmit)
  
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSend
      = form.dataset.email || ""; // no email by default

//    console.log(formData);
    return {data: formData, honeypot: honeypot};
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit me!")
    let form = e.target
    let formData = getFormData(form)
    
    let data = formData.data
    if (formData.honeypot) {
      return false
    }
    
    let url = form.action
    let xhr = new XMLHttpRequest();
    
    xhr.open("POST", url)
//    xhr.withCredentials = true
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      
      form.reset();
      let thankYouMessage = $(".thankyou_message")
      let formJq = $(".gform")
      formJq.fadeOut(500)
      thankYouMessage.css("display", "block").hide()
      thankYouMessage.fadeIn(500, ()=>{
        setTimeout(()=>{
          thankYouMessage.fadeOut(500, ()=>{
            thankYouMessage.css("display", "none")
            formJq.fadeIn(500)
          })
          
        }, 5000)
      })
      return;
    };
    
    // url encode form data for sending as post data
    let encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
})