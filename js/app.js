

$(function () {

    $.getJSON("https://api.imgflip.com/get_memes")
    .done(function (json) {
      for (let i = 0; i < json.data.memes.length - 1; i++) {
        var memes = [];
       memes = memes.push(JSON.stringify(json.data.memes[i].url))
       var myModal = document.getElementById('modBody')
       myModal.innerHTML += "<img style='  text-align:center; margin : auto; display:flex' src=" + json.data.memes[i].url + "><br>"
       
       myModal.addEventListener('shown.bs.modal', function () {
         myInput.focus()
       })
       

      }
      
    })
    .fail(function (jqxhr, textStatus, error) {
      const err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    });

    
  
   
 
  
    

});













