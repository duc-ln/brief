class Helpers {
	static removeAllActive(elments, removeClassName = "active") {
		elments.forEach((el) => el.classList.remove(removeClassName));
	}
	static changeWhenEvent(targetHoverSelector, targetChangeSelector, events) {
		const [activeEvent, outEvent] = events;
		const hoverElements = document.querySelectorAll(targetHoverSelector);
		const changeElements = document.querySelectorAll(targetChangeSelector);
		if (hoverElements.length <= 0 || changeElements.length <= 0) return;
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

		if (
			itemElements.length <= 0 ||
			activeElements.length <= 0 ||
			imageElments.length <= 0 ||
			!destinationElement
		)
			return;

		function transalteImage(index) {
			let imageEl = imageElments[index]?.cloneNode(true);
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
		AOS.init();
	},
	handleScrollHeader() {
		try {
			const elementScroll = window;
			const headerEl = document.querySelector("header");

			const canScrollDownButtonEl = document.querySelector(
				"#can-scroll-down-button",
			);
			if (elementScroll) {
				elementScroll.addEventListener("scroll", (e) => {
					const offsetTop = window.pageYOffset;

					if (offsetTop === 0) {
						if (headerEl) headerEl.classList.remove("active");
						if (canScrollDownButtonEl)
							canScrollDownButtonEl.classList.remove("unactive");
					}
					if (offsetTop > 0) {
						if (headerEl) headerEl.classList.add("active");
						if (canScrollDownButtonEl)
							canScrollDownButtonEl.classList.add("unactive");
					}
				});
			}
		} catch (error) {
			console.log("handleScrollHeader: ", error);
		}
	},
};

document.addEventListener("DOMContentLoaded", () => Modules.onInt());
