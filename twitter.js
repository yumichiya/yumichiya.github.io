var request = new XMLHttpRequest();
request.open('POST', 'https://api.twitter.com/oauth2/token', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);

var authOptions = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'client_credentials',
      refresh_token: refresh_token
    },
    json: true
};

request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
});