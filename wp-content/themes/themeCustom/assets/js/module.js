class Helpers {
	static removeAllActive(elments, removeClassName = "active") {
		elments.forEach((el) => el.classList.remove(removeClassName));
	}
	static changeWhenEvent(targetHoverSelector, targetChangeSelector, events) {
		const [activeEvent, outEvent] = events;
		const hoverElements = document.querySelectorAll(targetHoverSelector);
		const changeElements = document.querySelectorAll(targetChangeSelector);

		changeElements[0].classList.add("active");

		hoverElements.forEach((hoverElement, index) => {
			hoverElement.addEventListener(activeEvent, () => {
				Helpers.removeAllActive(changeElements);
				if (changeElements[index])
					changeElements[index].classList.add("active");
			});

			if (outEvent)
				hoverElement.addEventListener(outEvent, () => {
					Helpers.removeAllActive(changeElements);
					changeElements[0].classList.add("active");
				});
		});
	}

	static faqDisplayHandle({
		scopeSelector,
		activeEventSelector,
		imgSelector,
		destinationSelector,
		itemSelector,
	}) {
		const scopeElement = document.querySelector(scopeSelector);
		if (!scopeElement) return console.error("No scope element");
		const itemElements = scopeElement.querySelectorAll(itemSelector);
		const activeElements =
			scopeElement.querySelectorAll(activeEventSelector);
		const imageElments = scopeElement.querySelectorAll(imgSelector);
		const destinationElement =
			scopeElement.querySelector(destinationSelector);

		function transalteImage(index) {
			let imageEl = imageElments[index].cloneNode(true);
			if (!imageEl) {
				const noImageEl = document.createElement("p");
				noImageEl.innerText = "No image";
				noImageEl.classList.add("no-image");
				imageEl = noImageEl;
			}
			if (destinationElement.firstChild)
				destinationElement.removeChild(destinationElement.firstChild);
			destinationElement.appendChild(imageEl);
		}

		if (activeElements[0]) {
			activeElements[0].classList.add("active");
			itemElements[0].classList.add("active");
			transalteImage(0);
		}
		activeElements.forEach((activeEl, index) => {
			activeEl.addEventListener("click", () => {
				Helpers.removeAllActive(activeElements);
				Helpers.removeAllActive(itemElements);
				activeEl.classList.add("active");
				itemElements[index].classList.add("active");
				transalteImage(index);
			});
		});
	}
}

const Modules = {
	onInt() {
		Helpers.changeWhenEvent(
			".our-services-item-title",
			".our-services-first-row .our-services-first-row-item",
			["mouseover", "mouseout"],
		);
		Helpers.faqDisplayHandle({
			scopeSelector: "#faq",
			activeEventSelector: ".faq-item__content-title",
			imgSelector: ".faq-item__content-image",
			destinationSelector: ".faq-image-desktop",
			itemSelector: ".faq-item__title-grid",
		});
		this.handleScrollHeader();
	},
	handleScrollHeader() {
		try {
			const elementScroll = document.body;
			const headerEl = document.querySelector("header");

			const canScrollDownButtonEl = document.querySelector(
				"#can-scroll-down-button",
			);
			if (elementScroll) {
				elementScroll.addEventListener("scroll", (e) => {
					const offsetTop = e.target.scrollTop;
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
				});
			}
		} catch (error) {
			console.log("handleScrollHeader: ", error);
		}
	},
};

document.addEventListener("DOMContentLoaded", () => Modules.onInt());
