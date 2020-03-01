var request = require("request");
var user_id = "test";
var token = "Bearer";
var playlist_url = "https://api.spotify.com/v1/user/"+user_id+"/playlists";

request({url:playlist_url, headers:{"Authorization":token}}, function(err,res){ //err = error, res = result 
    if(res){
        var playlists=JSON.parse(res.body);
        varplaylist_url = playlists.item[0].href
        request({url:playlist_url, headers:{"Authorization":token}}, function(err,res){
            if(res){
                var playlist = JSON.parse(res.body);
                console.log("playlist: " + playlist.name);
                playlist.tracks.forEach(function(track){
                    console.log(track.track.name);
                })
            }
        })
    }
})