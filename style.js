
function home() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(favorites_id.className == 'nav-bar-items-active') {
        favorites_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('favorites-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }
}

function discover() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(favorites_id.className == 'nav-bar-items-active') {
        favorites_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('favorites-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }
}

function browse() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(favorites_id.className == 'nav-bar-items-active') {
        favorites_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('favorites-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }
}

function library() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('library-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('library-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('library-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(favorites_id.className == 'nav-bar-items-active') {
        favorites_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('library-content').style.display = 'block';
        document.getElementById('favorites-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');document.getElementById('library-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }
}

function favorites() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        favorites_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('favorites-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        favorites_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('favorites-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        favorites_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('favorites-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        favorites_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('favorites-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        favorites_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('favorites-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }
}

function following() {
    let home_id = document.getElementById('home');
    let discover_id = document.getElementById('discover');
    let browse_id = document.getElementById('browse');
    let library_id = document.getElementById('library');
    let favorites_id = document.getElementById('favorites');
    let following_id = document.getElementById('following');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(favorites_id.className == 'nav-bar-items-active') {
        favorites_id.classList.replace('nav-bar-items-active','nav-bar-items');
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
        document.getElementById('favorites-content').style.display = 'none';
    }
}

$(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });