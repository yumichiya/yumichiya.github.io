$.ajax({
    url: 'https://api.spotify.com/v1/me',
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
    success: function(response) {
        userProfilePlaceholder.innerHTML = userProfileTemplate(response);
    }
});