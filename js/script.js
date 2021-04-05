$(function () {

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote",
    "method": "GET",
    "headers": {
      "accept": "application/hal+json",
      "x-rapidapi-key": "bf81725a39msh09ea19293ebee8dp11632djsn1b302da15dd9",
      "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    let funnyStuff = $('#funnyStuff');
    funnyStuff.on('click', () => {
      alert(response.value+ " by Donald Trump")
    })
  });
    });





