/* Code written by Jasmine */
function home() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    let user_id = document.getElementById('profile-content');
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
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }else if(user_id.style.display == 'block') {
        user_id.style.display = 'none';
        home_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('home-content').style.display = 'block';
    }
}

function discover() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    let user_id = document.getElementById('profile-content');
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
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }else if(user_id.style.display == 'block') {
        user_id.style.display = 'none';
        discover_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('discover-content').style.display = 'block';
    }
}

function browse() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    let user_id = document.getElementById('profile-content');
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
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }else if(user_id.style.display == 'block') {
        user_id.style.display = 'none';
        browse_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('browse-content').style.display = 'block';
    }
}

function library() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    let user_id = document.getElementById('profile-content');
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
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');document.getElementById('library-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
    }else if(user_id.style.display == 'block') {
        user_id.style.display = 'none';
        library_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('library-content').style.display = 'block';
    }
}


function following() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    let user_id = document.getElementById('profile-content');
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
    }else if(user_id.style.display == 'block') {
        user_id.style.display = 'none';
        following_id.classList.replace('nav-bar-items','nav-bar-items-active');
        document.getElementById('following-content').style.display = 'block';
    }
}

function profile() {
    let home_id = document.getElementById('home-tab');
    let discover_id = document.getElementById('discover-tab');
    let browse_id = document.getElementById('browse-tab');
    let library_id = document.getElementById('library-tab');
    let following_id = document.getElementById('following-tab');
    if(home_id.className == 'nav-bar-items-active') {
        home_id.classList.replace('nav-bar-items-active','nav-bar-items');
        document.getElementById('profile-content').style.display = 'block';
        document.getElementById('home-content').style.display = 'none';
    }else if(discover_id.className == 'nav-bar-items-active') {
        discover_id.classList.replace('nav-bar-items-active','nav-bar-items');
        document.getElementById('profile-content').style.display = 'block';
        document.getElementById('discover-content').style.display = 'none';
    }else if(browse_id.className == 'nav-bar-items-active') {
        browse_id.classList.replace('nav-bar-items-active','nav-bar-items');
        document.getElementById('profile-content').style.display = 'block';
        document.getElementById('browse-content').style.display = 'none';
    }else if(library_id.className == 'nav-bar-items-active') {
        library_id.classList.replace('nav-bar-items-active','nav-bar-items');
        document.getElementById('profile-content').style.display = 'block';
        document.getElementById('library-content').style.display = 'none';
    }else if(following_id.className == 'nav-bar-items-active') {
        following_id.classList.replace('nav-bar-items-active','nav-bar-items');
        document.getElementById('profile-content').style.display = 'block';
        document.getElementById('following-content').style.display = 'none';
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

function unlockHover(element) {
    element.setAttribute('src', 'style/unlock-purple.png');
}  
function unlockUnhover(element) {
    element.setAttribute('src', 'style/unlock.png');
}

function lockHover(element) {
    element.setAttribute('src', 'style/lock-purple.png');
}  
function lockUnhover(element) {
    element.setAttribute('src', 'style/lock.png');
}

function lock() {
    document.getElementById('lock').style.display='none';
    document.getElementById('unlock').style.display='block';
}

function unlock() {
    document.getElementById('lock').style.display='block';
    document.getElementById('unlock').style.display='none';
}

function liveHover(element) {
    element.setAttribute('src', 'style/disc-p-h.png');
}  
function liveUnhover(element) {
    element.setAttribute('src', 'style/disc-purple.png');
}

function offlineHover(element) {
    element.setAttribute('src', 'style/disc-g.png');
}  
function offlineUnhover(element) {
    element.setAttribute('src', 'style/disc.png');
}

function live() {
    document.getElementById('disc').style.display='none';
    document.getElementById('disc-p').style.display='block';
}

function offline() {
    document.getElementById('disc').style.display='block';
    document.getElementById('disc-p').style.display='none';
}