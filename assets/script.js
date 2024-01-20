// ============== show menu ============ //
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId);
   const nav = document.getElementById(navId);

   // validate that the variables exist
   if(toggle && nav){
      // we add the show-menu class to the div with nav_menu class
      toggle.addEventListener('click', ()=>{
         nav.classList.toggle('show-menu')
      })
   }
} 

showMenu('nav-toggle', 'nav-menu');

// ========= remove menu mobile ========= //
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
   const navMenu = document.getElementById('nav-menu');
   // when we click on each nav we remove the show class
   navMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

// ====== scroll action active link ======= //
const sections = document.querySelectorAll('.section[id]');



function scrollActive(){
   const scrollY = window.scrollY;
   const home =  document.querySelector('.home')

   sections.forEach(current=>{
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId =  current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
         
      }else{
         document.querySelector('.nav_menu a[href*=' + sectionId + "]").classList.remove('active-link');
         home.classList.remove('active-link');
      }
   })
}

window.addEventListener("scroll", scrollActive);

// ==== change background header ==== //
function scrollHeader(){
   const nav = document.getElementById('header');
   // when scroll is > than 200 vh, add scroll header class
   if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)

// === show scroll top ====//
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // when scroll is higher than 560 vh, add show-scroll class
  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}

window.addEventListener("scroll", scrollTop);

// ===== DARK/LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme =  'bx-sun';

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon': 'bx-sun';

// validate if the user chose a theme
if(selectedTheme){
   // if the validation is true we ask what the issue was to activate theme
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// activate or deactivate the theme manaully with the button
themeButton.addEventListener('click', ()=>{
   // add or remove dark/icon theme 
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);

   // save the theme that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());

})

//scroll reveal animation
const sr = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 2000,
   reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content, .app__data,
            .app__img, .contact__data,
            .contact__button, .footer__content`, {
   interval: 200
})




