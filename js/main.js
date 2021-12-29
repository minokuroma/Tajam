"use strict"

// $(document).ready(function() {
// 	$('.menu a').click(function(e) {
// 		e.preventDefault();
// 		let id = $(this).attr('href');
// 		let offset = $(id).offset().top;
// 		// console.log(offset)
// 		$('html,body').animate({scrollTop: offset}, 2000)
// 	}) 


// })

const links = document.querySelectorAll('.menu a');

links.forEach(item => {
	item.addEventListener('click', e =>{
		e.preventDefault();
		let id = item.getAttribute('href')
		let target = document.querySelector(id);
		let pos = target.getBoundingClientRect().top;
		window.scrollBy({
			top: pos,
			behavior: 'smooth', 
		})
	})
})

const header = document.querySelector('header')

const dots = document.querySelectorAll('.dot')
const imgs = ['header.png', 'header2.jpg', 'header3.jpg', 'header4.jpg'];
let indexImgs = 0;
let timerId;

timeRotator()
function timeRotator() {
	timerId = setTimeout(rotator, 3000)
}

function rotator() {
	indexImgs++
	if (indexImgs == imgs.length) indexImgs = 0
	dots.forEach(item => {
		item.classList.remove("dot-active")
	})
	dots[indexImgs].classList.add("dot-active")
	header.style.backgroundImage = `url(img/${imgs[indexImgs]})`
	timeRotator()
}
