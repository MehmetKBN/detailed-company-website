const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const signUpPass = document.querySelector(".up-pass");
const signInPass = document.querySelector(".in-pass");


//buttons
const searchBtn = document.querySelector("#searchbtn");
const menuBtn = document.querySelector("#menu-btn");
const signInFormBtn = document.querySelector("#in-span");
const signUpFormBtn = document.querySelector("#up-span");
const passLockBtns = document.querySelectorAll(".fa-lock");
const mailIcons = document.querySelectorAll(".fa-envelope");
//buttons

//see password start

for (var i = 0; i < passLockBtns.length; i++) {
  (function(index) {
        passLockBtns[index].addEventListener("click", function() {
        passLockBtns[index].classList.toggle("fa-lock-open");
        if(passLockBtns[index].classList.contains("in-icon")){if(signInPass.type=="password"){signInPass.type="text"}else{signInPass.type="password"}}
        if(passLockBtns[index].classList.contains("up-icon")){if(signUpPass.type=="password"){signUpPass.type="text"}else{signUpPass.type="password"}}

        })
  })(i);
}

for (var i = 0; i < mailIcons.length; i++) {
  (function(index) {
    mailIcons[index].addEventListener("mouseover", function(){
      mailIcons[index].classList.remove("fa-envelope")
      mailIcons[index].classList.add("fa-envelope-open")
    })
    mailIcons[index].addEventListener("mouseleave", function(){
      mailIcons[index].classList.remove("fa-envelope-open")
      mailIcons[index].classList.add("fa-envelope")
    })
  })(i);
}


//see password end



//login form codes start
signUpFormBtn.addEventListener("click", function(){
  if(!signUpForm.classList.contains("active")){
    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
  }
});
signInFormBtn.addEventListener("click", function(){
  if(!signInForm.classList.contains("active")){
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
  }
});
//login form codes end


//SEARCH BUTTON CODES START

searchBtn.addEventListener("click", function() {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function(e) {
    if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
      searchForm.classList.remove("active");
    }
  });
});

//SEARCH BUTTON CODES END 

//MENU BUTTON CODES END 

menuBtn.addEventListener("click", function() {
  navbar.classList.toggle("active");
  document.addEventListener("click", function(e) {
    if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){
      navbar.classList.remove("active");
    }
  });
});

//MENU BUTTON CODES END 



//NAVBAR RESPONSIVE CODES START
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").style.padding = "0 4%";
    document.getElementById("header").style.margin = "2rem 4%";
    document.getElementById("navbar-logo-img").style.width ="6rem";
} else {
    document.getElementById("header").style.padding = "0 6%";
    document.getElementById("header").style.margin = "2rem 6%";
    document.getElementById("navbar-logo-img").style.width ="8rem";
}
}
//NAVBAR RESPONSIVE CODES END


//SECTION CODES START

document.addEventListener("scroll", function() {
  var currentSectionId = getCurrentSectionId();
  var navButtons = document.getElementsByClassName("nav-button");

  for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i];

    if (button.getAttribute("href") === currentSectionId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
});

function getCurrentSectionId() {
  var sections = document.querySelectorAll("section");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop-115;
    var sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      return "#" + section.getAttribute("id");
    }
  }

  return "";
}

//SECTION CODES END

