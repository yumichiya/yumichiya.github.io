/* Code written by Jasmine */
function home() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let favorites_id = document.getElementById('favorites-tab');
    let following_id = document.getElementById('following-tab');
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

function trashHover(element) {
    element.setAttribute('src', 'style/trash-gray.png');
}
function trashUnhover(element) {
    element.setAttribute('src', 'style/trash-white.png');
}

function backwardHover(element) {
    element.setAttribute('src', 'style/backward-purple.png');
}
function backwardUnhover(element) {
    element.setAttribute('src', 'style/backward.png');
}

function playHover(element) {
    element.setAttribute('src', 'style/play-purple.png');
}
function playUnhover(element) {
    element.setAttribute('src', 'style/play.png');
}

function pauseHover(element) {
    element.setAttribute('src', 'style/pause-purple.png');
}
function pauseUnhover(element) {
    element.setAttribute('src', 'style/pause.png');
}

function forwardHover(element) {
    element.setAttribute('src', 'style/forward-purple.png');
}
function forwardUnhover(element) {
    element.setAttribute('src', 'style/forward.png');
}

function fireHover(element) {
    element.setAttribute('src', 'style/fire-red.png');
}  
function fireUnhover(element) {
    element.setAttribute('src', 'style/fire-white.png');
}

