class Helpers {
	static changeWhenHover(targetHoverSelector, targetChangeSelector) {
		const hoverElements = document.querySelectorAll(targetHoverSelector);
		const changeElements = document.querySelectorAll(targetChangeSelector);

		changeElements[0].classList.add("active");

		function removeAllActive(elments) {
			elments.forEach((el) => el.classList.remove("active"));
		}
		hoverElements.forEach((hoverElement, index) => {
			hoverElement.onmouseover = () => {
				removeAllActive(changeElements);
				if (changeElements[index])
					changeElements[index].classList.add("active");
			};

			hoverElement.onmouseout = () => {
				removeAllActive(changeElements);
				changeElements[0].classList.add("active");
			};
		});
	}
}

const Modules = {
	onInt() {
		Helpers.changeWhenHover(
			".our-services-item-title",
			".our-services-first-row .our-services-first-row-item",
		);
		this.handleScrollHeader();
	},
	handleScrollHeader() {
		try {
			const elementScroll = document.querySelector("body");
			const headerEl = document.querySelector("header");

			const canScrollDownButtonEl = document.querySelector(
				"#can-scroll-down-button",
			);
			if (elementScroll) {
				elementScroll.onscroll = (e) => {
					const offsetTop = window.pageYOffset;
					if (offsetTop === 0) headerEl.classList.remove("active");
					if (offsetTop > 0) headerEl.classList.add("active");

					// Handle display can scroll down button
					const scrollTop =
						window.pageYOffset ||
						document.documentElement.scrollTop ||
						document.body.scrollTop;
					const clientHeight = document.documentElement.clientHeight;
					const scrollHeight = document.documentElement.scrollHeight;

					if (scrollTop + clientHeight >= scrollHeight)
						canScrollDownButtonEl.classList.add("unactive");
					else canScrollDownButtonEl.classList.remove("unactive");
				};
			}
		} catch (error) {
			console.log("handleScrollHeader: ", error);
		}
	},
};

document.addEventListener("DOMContentLoaded", () => Modules.onInt());
