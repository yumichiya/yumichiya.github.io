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
  
  // now playing template
  var nowPlayingSource = document.getElementById('now-playing-template').innerHTML,
      nowPlayingTemplate = Handlebars.compile(nowPlayingSource),
      nowPlayingPlaceholder = document.getElementById('now-playing');

  // Libraries
  //var librarySource = document.getElementById('library-template').innerHTML,
      //libraryTemplate = Handlebars.compile(librarySource),
      //libraryPlaceholder = document.getElementById('libraries');
      var pieceOfShitSource = document.getElementById('pieceOfShit-template').innerHTML; 
      var pieceOfShitTemplate = Handlebars.compile(pieceOfShitSource);
      var pieceOfShitPlaceholder = document.getElementById('pieceOfShit');

  var params = getHashParams();

  var access_token = params.access_token,
      state = params.state,
      storedState = localStorage.getItem(stateKey);

  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication'); //this will appear when you refresh the page or the authentication fails
  } else {
    localStorage.removeItem(stateKey);
    if (access_token) {
      $.ajax({ // Login Call
        url: 'https://api.spotify.com/v1/me', // endpoint of user profile
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) { //if successful, will display user profile
          userProfilePlaceholder.innerHTML = userProfileTemplate(response); //displays to the inner html of the user profile template

          $('#login').hide(); //hides login button 
          $('#loggedin').show(); //displays user profile button
          document.body.style.backgroundImage = 'none';
        }
      });

      $.ajax({ // New Releases Call
        url: 'https://api.spotify.com/v1/browse/new-releases?limit=5', // endpoint of new releases; limited to 4 new releases to display
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          newReleasesPlaceholder.innerHTML = newReleasesTemplate(response); //displays to the inner html of the new releases template
        }
      });

      $.ajax({ //
        url: 'https://api.spotify.com/v1/me/player', // Music Player Call
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          nowPlayingPlaceholder.innerHTML = nowPlayingTemplate(response); 
        }
      });

      //Patrick's workspace
      $.ajax({ // Stalking someone's libraries
        url: 'https://api.spotify.com/v1/me/playlists', // endpoint of libraries; limited to 4 new releases to display
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          pieceOfShitPlaceholder.innerHTML = pieceOfShitTemplate(response); //displays to the inner html of the library template
        }
      });

      //Ethan's workspace

      //Nick's workspace

      //Tracy's workspace

        

    } else {
      $('#login').show(); //displays login button
      $('#loggedin').hide(); //hides user profile button
    }

    document.getElementById('login-button').addEventListener('click', function() { // once user clicks button, function will activate
      
      // The app client id; dont change this 
      var client_id = '4977f5049db14ed99184bd454c05716a'; 

      // The app redirect uri 
      //change to http://localhost:3000/ to test and https://yumichiya.github.io/ to deploy
      var redirect_uri = 'http://localhost:3000/'; 

      var state = generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope = 'user-read-private user-read-email user-read-playback-state user-read-currently-playing user-modify-playback-state';

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
