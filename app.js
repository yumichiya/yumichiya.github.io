(function() { //self-invoking function 

    var stateKey = 'spotify_auth_state';

    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    function getHashParams() {
      let hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    function generateRandomString(length) {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    // user profile template
    var userProfileSource = document.getElementById('user-profile-template').innerHTML,
        userProfileTemplate = Handlebars.compile(userProfileSource),
        userProfilePlaceholder = document.getElementById('user-profile');

    // new releases template
    var newReleasesSource = document.getElementById('new-releases-template').innerHTML,
        newReleasesTemplate = Handlebars.compile(newReleasesSource),
        newReleasesPlaceholder = document.getElementById('new-releases');

    var params = getHashParams();

    var access_token = params.access_token,
        state = params.state,
        storedState = localStorage.getItem(stateKey);

    if (access_token && (state == null || state !== storedState)) {
      alert('There was an error during the authentication');
    } else {
      localStorage.removeItem(stateKey);
      if (access_token) {
        $.ajax({ //Login Call
            url: 'https://api.spotify.com/v1/me', // endpoint of user profile
            headers: {
              'Authorization': 'Bearer ' + access_token //user access token (auth)
            },
            success: function(response) { //if successful, will display user profile
              userProfilePlaceholder.innerHTML = userProfileTemplate(response); //displays to the inner html of the user profile template

              $('#login').hide(); //hides login button 
              $('#loggedin').show(); //displays user profile button
            }
        });

        $.ajax({ //New Releases Call
            url: 'https://api.spotify.com/v1/browse/new-releases?limit=4', // endpoint of new releases; limited to 4 new releases to display
            headers: {
              'Authorization': 'Bearer ' + access_token //user access token (auth)
            },
            success: function(response) {
                newReleasesPlaceholder.innerHTML = newReleasesTemplate(response); //displays to the inner html of the new releases template
            }
        });

        

      } else {
          $('#login').show(); //displays login button
          $('#loggedin').hide(); //hides user profile button
      }

      document.getElementById('login-button').addEventListener('click', function() { // once user clicks button, function will activate

        var client_id = '4977f5049db14ed99184bd454c05716a'; // The app client id
        var redirect_uri = 'https://yumichiya.github.io/'; // The app redirect uri

        var state = generateRandomString(16);

        localStorage.setItem(stateKey, state);
        var scope = 'user-read-private user-read-email';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);

        window.location = url; //creates the new url to login
      }, false);
    }

})();
