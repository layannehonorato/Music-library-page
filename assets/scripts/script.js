//MENU ANIMATION-----------------------------------------------------------------------------------
const menuAnimation = document.getElementById("menuIcon");

menuAnimation.addEventListener('click',function(){
	const menu = document.querySelector(".menu");
	menu.classList.toggle('close')
})