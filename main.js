let background = document.querySelector("div")
background.addEventListener("mouseover", () => {
	background.classList.add('hover')
});

background.addEventListener("mouseout", () => {
	background.classList.remove('hover')
});

let buyNow = document.querySelector('h2')

background.addEventListener("mouseover", () => {
	buyNow.classList.add('hover')
});

background.addEventListener("mouseout", () => {
	buyNow.classList.remove('hover')
});