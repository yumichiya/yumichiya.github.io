/* Code mostly written by Jasmine minus the workspaces by other group members */
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
  var userProfileButtonSource = document.getElementById('user-profile-button-template').innerHTML,
      userProfileButtonTemplate = Handlebars.compile(userProfileButtonSource),
      userProfileButtonPlaceholder = document.getElementById('user-profile-button');

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

  // Libraries template
  var librarySource = document.getElementById('library-template').innerHTML,
      libraryTemplate = Handlebars.compile(librarySource),
      libraryPlaceholder = document.getElementById('lib-playlist');

  // Following template
  var followingSource = document.getElementById('following-template').innerHTML, 
      followingTemplate = Handlebars.compile(followingSource),
      followingPlaceholder = document.getElementById('following');

  // Recently Played template
  var recplaySource = document.getElementById('recently-played-template').innerHTML;
      recplayTemplate = Handlebars.compile(recplaySource);
      recplayPlaceholder = document.getElementById('recently-played');
 
  // Featured Playlists
  var featplaylistsSource = document.getElementById('featured-playlists-template').innerHTML;
      featplaylistsTemplate = Handlebars.compile(featplaylistsSource);
      featplaylistsPlaceholder = document.getElementById('featured-playlists');

  //top tracks template
  var topSource = document.getElementById('top-tracks-template').innerHTML, 
      topTemplate = Handlebars.compile(topSource),
      topPlaceholder = document.getElementById('top-tracks');
  //top Artists template.
  var topArtistSource = document.getElementById('top-artist-template').innerHTML, 
      topArtistTemplate = Handlebars.compile(topArtistSource),
      topArtistPlaceholder = document.getElementById('top-artist');

  // recommendations template
  var recommendationsSource = document.getElementById('recommendations-template').innerHTML,
      recommendationsTemplate = Handlebars.compile(recommendationsSource),
      recommendationsPlaceholder = document.getElementById('recommendations');

  //search for artist template
  var searchArtistSource = document.getElementById('artist-result-template').innerHTML, 
      searchArtistTemplate = Handlebars.compile(searchArtistSource),
      searchArtistPlaceholder = document.getElementById('artist-result');

  //search for album template
  var searchAlbumSource = document.getElementById('album-result-template').innerHTML, 
      searchAlbumTemplate = Handlebars.compile(searchAlbumSource),
      searchAlbumPlaceholder = document.getElementById('album-result');

  //top tracks template.
  var topSource = document.getElementById('top-tracks-template').innerHTML, 
      topTemplate = Handlebars.compile(topSource),
      topPlaceholder = document.getElementById('top-tracks');
  
  //search for track template
  var searchTrackSource = document.getElementById('track-result-template').innerHTML, 
      searchTrackTemplate = Handlebars.compile(searchTrackSource),
      searchTrackPlaceholder = document.getElementById('track-result');

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
          userProfileButtonPlaceholder.innerHTML = userProfileButtonTemplate(response); //displays to the inner html of the user profile template
          userProfilePlaceholder.innerHTML = userProfileTemplate(response);
          //console.log(response);
          $('#login').hide(); //hides login button 
          $('#loggedin').show(); //displays user profile button
          document.body.style.backgroundImage = 'none';
        }
      });

      $.ajax({
        url: 'https://api.spotify.com/v1/me/player', 
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          
          //console.log(response);
        }
      });

      $.ajax({ // New Releases Call
        url: 'https://api.spotify.com/v1/browse/new-releases?limit=5', // endpoint of new releases; limited to 4 new releases to display
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          newReleasesPlaceholder.innerHTML = newReleasesTemplate(response); //displays to the inner html of the new releases template
          //console.log(response);
        }
      });

      document.getElementById('search-text').addEventListener('keypress', function(event) {
        if(event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("search-button").click();
        }
      });

      // Search for an Item
      $('.search-button').click(function () {
        let searchItem = document.getElementById('search-text').value; //user input value in the text field
        let artist = document.getElementById('search-artist').checked;
        let album = document.getElementById('search-album').checked;
        let track = document.getElementById('search-track').checked;
        if(artist == true){
          $.ajax({ 
            url: 'https://api.spotify.com/v1/search' 
                  + '?q=' + searchItem
                  + '&type=artist'
                  + '&include_external=audio'
                  + '&limit=10', 
            headers: {
              'Authorization': 'Bearer ' + access_token 
            },
            success: function(response) {
              //console.log(response);
              searchArtistPlaceholder.innerHTML = searchArtistTemplate(response); 
            }
          });
          $('.search-artist-title').show();
        }
        if (album == true){
          $.ajax({ 
            url: 'https://api.spotify.com/v1/search' 
                  + '?q=' + searchItem
                  + '&type=album'
                  + '&include_external=audio'
                  + '&limit=10', 
            headers: {
              'Authorization': 'Bearer ' + access_token 
            },
            success: function(response) {
              searchAlbumPlaceholder.innerHTML = searchAlbumTemplate(response);
              //console.log(response);
            }
          });
          $('.search-album-title').show();
        }
        if (track == true){
          $.ajax({ 
            url: 'https://api.spotify.com/v1/search' 
                  + '?q=' + searchItem
                  + '&type=track'
                  + '&include_external=audio'
                  + '&limit=10', 
            headers: {
              'Authorization': 'Bearer ' + access_token 
            },
            success: function(response) {
              searchTrackPlaceholder.innerHTML = searchTrackTemplate(response); 
              
              //console.log(response);
            }
          });
          $('.search-track-title').show();
        }
      });
      // Patrick's Workspace ----------------------------------------------------------------
      setInterval(function(){
      $.ajax({ // Music Player call
        url: 'https://api.spotify.com/v1/me/player/currently-playing', // endpoint for player
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          //console.log(response);
          if(response == null) {
            document.getElementById('now-playing').style.display = 'none';
          }else {
            document.getElementById('now-playing').style.display = 'block';
            nowPlayingPlaceholder.innerHTML = nowPlayingTemplate(response);
            let progress = response.progress_ms;
            progressDate = new Date(progress); 
            progressminutes = progressDate.getUTCMinutes(); 
            progressseconds = progressDate.getSeconds();
            progressTime = progressminutes.toString().padStart(2, '0') + ':' + progressseconds.toString().padStart(2, '0'); 
            document.getElementById('progress-time').textContent = progressTime; 
            let duration = response.item.duration_ms;
            durationDate = new Date(duration); 
            durationminutes = durationDate.getUTCMinutes(); 
            durationseconds = durationDate.getSeconds();
            durationTime = durationminutes.toString().padStart(2, '0') + ':' + durationseconds.toString().padStart(2, '0'); 
            document.getElementById('duration-time').textContent = durationTime; 
            let progressBar = (progress/duration)*100;
            document.getElementById('progress-bar').style.width = progressBar +'%';

            let ifPlaying = response.is_playing;
            if(ifPlaying == true) {
              $('.pause').show();
            }else {
              $('.play').show();
            }
            $('.forward').click(function () {
              $.ajax({ 
                url: 'https://api.spotify.com/v1/me/player/next', 
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response); 
                }
              });
            });
            $('.backward').click(function () {
              $.ajax({ 
                url: 'https://api.spotify.com/v1/me/player/previous',
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response); 
                }
              });
            });
            $('.pause').click(function () {
              $.ajax({ 
                url: 'https://api.spotify.com/v1/me/player/pause',
                method: 'PUT',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response); 
                  $('.play').show();
                  $('.pause').hide();
                }
              });
            });
            $('.play').click(function () {
              $.ajax({ 
                url: 'https://api.spotify.com/v1/me/player/play',
                method: 'PUT',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  console.log(response); 
                  $('.pause').show();
                  $('.play').hide();
                }
              });
            });
          }
        }
      });
      }, 1000);

      $.ajax({ // Library Playlist
        url: 'https://api.spotify.com/v1/me/playlists', 
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          libraryPlaceholder.innerHTML = libraryTemplate(response); 
        }
      });

      //Patrick's workspace ends here -------------------------------------------------------

      //Ethan's workspace -------------------------------------------------------------------
      //recently played
      $.ajax({ 
        url: 'https://api.spotify.com/v1/me/player/recently-played?limit=5',
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          recplayPlaceholder.innerHTML = recplayTemplate(response); 
          //console.log(response);
        }
      });
      //featured playlists
      $.ajax({ 
        url: 'https://api.spotify.com/v1/browse/featured-playlists?country=US&limit=6', 
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          featplaylistsPlaceholder.innerHTML = featplaylistsTemplate(response); 
          //console.log(response);
        }
      });
      //Ethan's workspace ends here ---------------------------------------------------------

      //Nick's workspace --------------------------------------------------------------------
      $.ajax({
        url: 'https://api.spotify.com/v1/me/following?type=artist&limit=20',
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          followingPlaceholder.innerHTML = followingTemplate(response); 
          
        }
      });

      $.ajax({ // top tracks call
        url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10', // endpoint 
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          topPlaceholder.innerHTML = topTemplate(response); 
          //console.log(response);
        }
      });

      $.ajax({ // top artists call
        url: 'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10', // endpoint 
        headers: {
          'Authorization': 'Bearer ' + access_token //user access token (auth)
        },
        success: function(response) {
          topArtistPlaceholder.innerHTML = topArtistTemplate(response); 
          //console.log(response);
        }
      });
      
    


      //Nick's workspace ends here ----------------------------------------------------------

      //Tracy's workspace
      /*$.ajax({
        url: 'https://api.spotify.com/v1/recommendations', 
        headers: {'Authorization': 'Bearer ' + access_token },
        success: function(response) {
          console.log(response);
          //recommendationsPlaceholder.innerHTML = recommendationsTemplate(response);
        }
      });*/
        
      //My test shit
      $.ajax({ 
        url: 'https://api.spotify.com/v1/me/top/artists',
        headers: {
          'Authorization': 'Bearer ' + access_token 
        },
        success: function(response) {
          let userID = response.items[0].id;
          $.ajax({
            url: 'https://api.spotify.com/v1/recommendations' + '?seed_artists=' + userID + '&limit=10', 
            headers: {'Authorization': 'Bearer ' + access_token },
            success: function(response) {
              recommendationsPlaceholder.innerHTML = recommendationsTemplate(response);
            }
          });
        }
      });

      

    } else {
      $('#login').show(); //displays login button
      $('#loggedin').hide(); //hides user profile button
    }

    document.getElementById('login-button').addEventListener('click', function() { // once user clicks button, function will activate
      
      // The app client id; dont change this 
      var client_id = '4977f5049db14ed99184bd454c05716a'; 

      // The app redirect uri 
      //change to http://localhost:3000/ to test and https://yumichiya.github.io/ to deploy
      var redirect_uri = 'https://yumichiya.github.io/'; 

      var state = generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope = 'user-read-private user-read-email user-read-playback-state user-read-currently-playing user-modify-playback-state user-follow-read user-read-recently-played user-top-read';
      

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

