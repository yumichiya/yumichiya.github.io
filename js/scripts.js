function aboutfade() {
    var about = document.getElementById("container");
    var abouttext = "<div id=" + "magic" + "><h1 id="+ "mainhead" + ">About</h1><div id=" + "line" + "></div><p>I am Jasmine Nguyen from Baton Rouge, Louisiana. I am a junior attending Lee High School.</p><p>I wish to purse a career as a web developer and designer. Training myself every day and pushing my own limits to discover new ways of creating a great experience for the users. I focus on working on the scalability, performance, reusability, and user experience into a beautiful creation.</p><br><p>Contact: yumichiya@gmail.com</p></div>";
    about.innerHTML = abouttext;
    document.getElementById("rightfade").style.marginTop = "25%";
}

function expfade() {
    var exp = document.getElementById("container");
    var exptext = "<div id=" + "magic" + "><h1 id="+ "mainhead" + ">Experience</h1><div id=" + "line" + "></div><div id=" + "expcon" + "><p id=" +  "exph"+">Explore with Animals</p><a href=" + "ExploreAnimals/index.html" + " id= " + "links" + ">Explore with them :)</a><p id=" + "expp" + ">February 2016 - March 2016</p><p id=" + "expp" + " class=" + "exppp" + ">Web Developer and Designer</p></div><div id=" + "expcon" + "><p id=" +  "exph"+">LDHelp</p><a href=" + "http://www.ldhelp.org" + " id= " + "links" + ">ldhelp.org</a><p id=" + "expp" + ">October 2016 - Present</p><p id=" + "expp" + " class=" + "exppp" + ">Web Developer and Designer</p></div><div id=" + "expcon" + "><p id=" +  "exph"+">EthnoChat</p><a href=" + "http://www.awesome-ba535.firebaseapp.com" + " id= " + "links" + ">awesome-ba535.firebaseapp.com</a><p id=" + "expp" + ">In Development</p><p id=" + "expp" + " class=" + "exppp" + ">Web Developer and Designer</p></div></div>";
    exp.innerHTML = exptext;
    document.getElementById("rightfade").style.marginTop = "25%";
}

function edufade() {
    var edu = document.getElementById("container");
    var edutext = "<div id=" + "magic" + "><h1 id="+ "mainhead" + ">Education</h1><div id=" + "line" + "></div><p>Lee Magnet High School</p><p>11th grade</p><p>Cumulative GPA: 3.2</p><p>Courses: Web Design I & II, Digital Graphic and Animation</p><h1 id=" + "subhead" + ">Certificate</h1><div id=" + "line" + "></div><img id=" + "eduimg" + " src=" + "img/CIWCert.png" + " alt=" + "CIW&nbsp;Certificate" + " width=" + 350 + " height="+ "auto" +" onclick=" + "clickmod()"+"></div>";
    edu.innerHTML = edutext;
    document.getElementById("rightfade").style.marginTop = "10%";
}

function workfade() {
    var work = document.getElementById("container");
    var worktext = "<div id=" + "magic" + "><h1 id="+ "mainhead" + ">My Work</h1><div id=" + "line" + "></div><div id=" + "piccontain" + "><div id=" + "pictitle" + ">LDHelp</div><a href=" + "http://www.ldhelp.org" + "><img id=" + "workpic" + " src=" + "img/ldhelp.png" + "></a><div id=" + "worktag" + ">html</div><div id=" + "worktag" + ">css</div><div id=" + "worktag" + ">js</div></div><div><div id=" + "pictitle" + ">EthnoChat</div><a href=" + "http://www.awesome-ba535.firebaseapp.com" + "><img id=" + "workpic" + " src=" + "img/ethnochat.png" + "></a><div id=" + "worktag" + ">html</div><div id=" + "worktag" + ">css</div><div id=" + "worktag" + ">js</div><div id=" + "worktag" + ">firebase</div></div></div><div><div id=" + "pictitle" + ">Explore with Animals</div><a href=" + "ExploreAnimals/index.html" + "><img id=" + "workpic" + " src=" + "img/animal.png" + "></a><div id=" + "worktag" + ">html</div><div id=" + "worktag" + ">css</div><div id=" + "worktag" + ">js</div></div></div>";
    work.innerHTML = worktext;
    document.getElementById("rightfade").style.marginTop = 0;
}

function letfade() {
    var let = document.getElementById("container");
    var lettext = "<div id=" + "magic" + "><h1 id="+ "mainhead" + ">Letter</h1><div id=" + "line" + "></div><div id=" + "hold" + "><div id=" + "letcontain" + "><div id=" + "letblock" + " onclick=" + "letgbtn()" + "><p id=" + "letp" + ">February 21, 2017<br>Georgann Mire<br>3211 Morning Glory<br>Baton Rouge, LA  70808<br><br>To whom it may concern:<br><br>It is hard to believe that Jasmine Nguyen is a high school student.  Her maturity and capability transcends her age and I am so lucky to have her on my digital media team. <br><br>I am on the board of directors of the Greater Baton Rouge Learning Disabilities Coalition (GBRLDC) which is a volunteer group working to help students with learning disabilities in our community.  When funding ended for our professional digital media support, the Digital Media department at Lee High School stepped up to fill the gap - turning a bad luck into a blessing!  Jasmine&#39;s teacher, Jewell Simon, put together a team of his best students for our project with Jasmine as a key member.<br><br>Her keen analytical and problem solving skills were immediately put to the test as the team worked to understand the GBRLDC mission and importance to the community (1 in 5 children have learning disabilities).  She seamlessly worked with her team to expertly determine the strengths and weaknesses and tackled the job of closing the gap to increase connectivity and impact with precision.<br><br>The existing pedestrian website designed by professionals for the GBRLDC stood out as a problem and the team tapped into Jasmine&#39;s talent as a remedy.  She and her fellow students came up with a myriad of suggestions that resulted in a modern practical website that is a boon for the entire community.  She was instrumental in retrieving old site data. Changing the web address from www.gbrldc.org to www.ldhelp.org was a great start and the addition of bios and pictures of all our conference speakers is useful for attendees. We&#39;ve always dreamed of providing a community resource list to help parents and professionals and Jasmine and her team made this dream a reality.  Our website has the capacity now to change fonts so that dyslexic individuals can read the information better which is an innovation that I&#39;ve never seen available on a national LD website!<br><br>Jasmine&#39;s commitment to our project is so strong that she volunteered to help us at our annual conference.  She sacrificed her entire Saturday (even though she had already completed her service hours for the semester) to create a quality event for 200 people within our community.  Her work at the conference showcased her dependability and organizational skills as well as her kindness.<br><br>I wholeheartedly recommend Jasmine due to her positive attitude and creative talent which will be an asset in the college setting. The school she chooses will be very lucky to have her as a student.<br><br><br>Sincerely,<br>Georgann Mire<br>President, Greater Baton Rouge Learning Disabilities Coalition</p></div><div id=" + "letcon" + "><p id=" + "letdesct" + ">Letter of Recommendation</p><p id=" + "letdesc" + ">Georgann Mire</p><p id=" + "letdesc" + ">GBRLDC Board President</p></div></div><div id=" + "letcontain" + "><div id=" + "letblock" + " onclick=" + "letcbtn()" + "><p id=" + "rightp" + ">April 11, 2016<p id=" + "letp" + "><br>To Whom It May Concern:<br><br>I am writing on behalf of Jasmine Nguyen as her recommender. My name is Dr. Rosie Courville, and I teach English and French at Lee Magnet High School in Baton Rouge, LA. I have taught Jasmine in both French I and French II. Jasmine possesses a keen eye and a good work ethic.Whereas many students her age are not conscientious, Jasmine is consistent in completing her work for me, even when others are not. My class is not easy, and students often need to spend a significant amount of time studying to make the grade that they would like. Every time that she takes an exam, I can tell that Jasmine has gone above and beyond the work that has been requested of her in order to understand the more difficult concepts that I presented. She put significant work into memorizing verb conjugations and patterns and also put a good deal of work into doing the various projects assigned in class. She has a particular interest in our cultural discussions and made interesting contributions to our discussions centering on food culture throughout the Francophone world.<br><br>I especially appreciate Jasmine’s hard work knowing that I am presenting concepts to her in her second language even when I am presenting in English. Because Jasmine’s native language is Vietnamese, she has already had to put forth significant effort in learning English and is ambitious enough to do well when working on her third language. I believe that it speaks to her work ethic and quality as a student that she does as well as she does in my French class. I believe that Jasmine would be an asset to your program.<br><br>Sincerely,<br><br><br><br>Rosie Courville, PhD<br>English and French Teacher<br>English and World Languages Department Chair<br>Lee Magnet High School<br><br><br><br><br><br><br><br><br></p></div><div id=" + "letcon" + "><p id=" + "letdesct" + ">Letter of Recommendation</p><p id=" + "letdesc" + ">Rosie Courville, PhD</p><p id=" + "letdesc" + ">English and French Teacher</p><p id=" + "letdesc" + ">English and World Languages Department Chair</p><p id=" + "letdesc" + ">Lee Magnet High School</p></div></div></div>";
    let.innerHTML = lettext;
    document.getElementById("rightfade").style.marginTop = 0;
}

function clickmod() {
    var modal = document.getElementById('edumod');
    var img = document.getElementById('eduimg');
    var modalImg = document.getElementById("eduimgr");
    var captionText = document.getElementById("educap");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    document.getElementById('leftSide').style.zIndex = 0;
}

/*var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
function letgbtn() {
    var modal = document.getElementById('letgmodal');
    var span = document.getElementsByClassName("close")[0];
    document.getElementById('leftSide').style.zIndex = 0;
    modal.style.display = "block";
}
function letcbtn() {
    var modal = document.getElementById('letcmodal');
    var span = document.getElementsByClassName("close")[0];
    document.getElementById('leftSide').style.zIndex = 0;
    modal.style.display = "block";
}