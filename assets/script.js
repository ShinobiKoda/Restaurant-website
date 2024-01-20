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
   const scrollY = window.pageYOffset

   sections.forEach(current=>{
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId =  current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link') ;
      }else{
         document.querySelector('.nav_menu a[href*=' + sectionId + "]").classList.remove('active-link');
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





