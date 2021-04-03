let readyFn;

readyFn = () => {


  $.getJSON("https://api.imgflip.com/get_memes")
  .done(function (json) {
    for (let i = 0; i < json.data.memes.length - 1; i++) {

      console.log("JSON Data: " + json.data.memes[i].url);

    }
  })
  .fail(function (jqxhr, textStatus, error) {
    const err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });




};