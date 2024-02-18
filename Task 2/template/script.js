const mobileDrop = document.querySelector('.mobile-dropdown')
const proizvodiBtn = document.querySelector('.proizvodi-btn')
const dropdown = document.querySelector('.dropdown')
const header = document.querySelector('header')
const proizvodiClose = document.querySelector('.proizvodi-close')

document.getElementById('menu-icon').addEventListener('click', function() {
  event.preventDefault();
	this.classList.toggle('menu-open');
  mobileDrop.classList.toggle('active')
  });


proizvodiBtn.addEventListener('click',(e)=>{
  dropdown.classList.toggle('active')
  header.classList.toggle('active')
})

proizvodiClose.addEventListener('click',(e)=>{
  dropdown.classList.remove('active')
  header.classList.remove('active')
})


window.addEventListener('scroll',function(){
  if (window.scrollY > 0 || dropdown.classList.contains('active')) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}
})


const slider1 = document.querySelector('.slider1')
const img1 = document.querySelector('.kolekcije1')
const img2 = document.querySelector('.kolekcije2')
const slider2 = document.querySelector('.slider2')
const img3 = document.querySelector('.kolekcije3')
const img4 = document.querySelector('.kolekcije4')

slider1.addEventListener('click',(e)=>{
  img1.classList.toggle('active')
  img2.classList.toggle('active')
})
slider2.addEventListener('click',(e)=>{
  img3.classList.toggle('active')
  img4.classList.toggle('active')
})
