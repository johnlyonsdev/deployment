let background = document.querySelector("div")
let buyNow = document.querySelector('h2')
let store = document.querySelector('.store')

background.addEventListener("mouseover", () => {
	background.classList.add('hover')
    buyNow.classList.add('hover')
});

background.addEventListener("mouseout", () => {
	background.classList.remove('hover')
    buyNow.classList.remove('hover')
});

store.addEventListener("mouseover", () => {
	store.classList.add('hover')
});

store.addEventListener("mouseout", () => {
	store.classList.remove('hover')
});