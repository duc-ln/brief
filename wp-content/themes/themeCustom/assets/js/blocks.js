document.addEventListener("DOMContentLoaded", () => {
	const elementScroll = document.querySelector("body");
	const headerEl = document.querySelector("header#header");
	if (elementScroll) {
		elementScroll.onscroll = () => {
			const offsetTop = window.pageYOffset;
			if (offsetTop === 0) headerEl.classList.remove("active");
			if (offsetTop > 0) headerEl.classList.add("active");
		};
	}
});
