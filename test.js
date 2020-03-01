var access_token = params.access_token;
$(document).ready(function(){
  $.ajax({
    url: 'https://api.spotify.com/v1/me',
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
    success: function(response) {
        console.log('working');
    }
  })
});
