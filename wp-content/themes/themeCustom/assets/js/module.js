class Helpers {
	static removeAllActive(elments, removeClassName = "active") {
		elments.forEach((el) => el.classList.remove(removeClassName));
	}

	static getViewWidth(maxWidth = true) {
		const width = window.innerWidth;
		if (maxWidth && width > 1400) return 1400;
		return width;
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
		if (!scopeElement) return;
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
			if (window.innerWidth <= 1439) return;
			let imageEl = imageElments[index];
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
			if (window.innerWidth > 1439) transalteImage(0);
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth > 1439 && !destinationElement.firstChild) {
				const activeElement = [...itemElements].find((item) =>
					item.matches(".active"),
				);
				const imageActiveElement =
					activeElement.querySelector(imgSelector);
				destinationElement.appendChild(imageActiveElement);
			}
			if (window.innerWidth <= 1439 && destinationElement.firstChild) {
				itemElements.forEach((item, index) => {
					if (!item.querySelector(imgSelector)) {
						item.appendChild(imageElments[index]);
					}
				});
			}
		});
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

	static handleSlider({
		scopeSelector,
		sliderSelector,
		sliderItemSelector,
		counterSelector,
		counterItemClassName,
	}) {
		const scropElement = document.querySelector(scopeSelector);
		if (!scropElement) return;
		const sliderElement = scropElement.querySelector(sliderSelector);
		if (!sliderElement) return;
		const sliderItemElements =
			sliderElement.querySelectorAll(sliderItemSelector);
		const counterElement = scropElement.querySelector(counterSelector);
		let showItemCount = 4;
		const sliderWidth = Helpers.getViewWidth();
		if (sliderWidth < 1023) showItemCount = 2;
		else showItemCount = 4;
		sliderElement.style.width = sliderWidth + "px";

		sliderItemElements.forEach((sliderItemElement) => {
			sliderItemElement.style.width = `${sliderWidth / showItemCount}px`;
			sliderItemElement.style.minWidth = `${
				sliderWidth / showItemCount
			}px`;
			sliderItemElement.style.maxWidth = `${
				sliderWidth / showItemCount
			}px`;
			sliderItemElement.style.opacity = "1";
		});

		function renderCounter() {
			sliderElement.scrollTo({
				left: 0,
			});
			if (!counterElement) return;
			const countSlider = Math.ceil(
				sliderItemElements.length / showItemCount,
			);

			if (Number.isNaN(countSlider) || countSlider === 0) return;
			const counterItemElements = [];
			while (counterElement.firstChild) {
				counterElement.removeChild(counterElement.firstChild);
			}
			for (let index = 0; index < countSlider; index++) {
				const element = document.createElement("button");
				if (index === 0) element.classList.add("active");
				element.classList.add(counterItemClassName);
				element.setAttribute("data-counter", index + 1);
				counterElement.appendChild(element);
				counterItemElements.push(element);
			}

			counterItemElements.forEach((element) => {
				element.addEventListener("click", (e) => {
					const indexConter = element.dataset.counter;
					if (element.matches(".active")) return;
					counterItemElements.forEach((el) =>
						el.classList.remove("active"),
					);
					element.classList.add("active");
					const startSliderShowIndex =
						(indexConter - 1) * showItemCount;
					let endSliderShowIndex = indexConter * showItemCount;
					if (endSliderShowIndex > sliderItemElements.length - 1)
						endSliderShowIndex = sliderItemElements.length - 1;

					const sliderShowes = [...sliderItemElements].filter(
						(_, index) => {
							if (startSliderShowIndex === endSliderShowIndex)
								return index === startSliderShowIndex;
							return (
								index >= startSliderShowIndex &&
								index < endSliderShowIndex
							);
						},
					);
					const targetElement = sliderShowes[0];
					const elementPosition =
						targetElement.getBoundingClientRect().left;

					const containerPosition =
						sliderElement.getBoundingClientRect().left;
					const scrollPosition =
						sliderElement.scrollLeft +
						(elementPosition - containerPosition);

					sliderElement.scrollTo({
						behavior: "smooth",
						left: scrollPosition,
					});
				});
			});
		}

		renderCounter();

		window.addEventListener("resize", (e) => {
			const sliderWidth = Helpers.getViewWidth();
			if (sliderWidth < 1023) showItemCount = 2;
			else showItemCount = 4;
			sliderElement.style.width = sliderWidth + "px";
			sliderItemElements.forEach((sliderItemElement) => {
				sliderItemElement.style.width = `${
					sliderWidth / showItemCount
				}px`;
				sliderItemElement.style.minWidth = `${
					sliderWidth / showItemCount
				}px`;
				sliderItemElement.style.maxWidth = `${
					sliderWidth / showItemCount
				}px`;
			});
			renderCounter();
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
		Helpers.handleSlider({
			scopeSelector: "#our-team",
			sliderSelector: ".our-team__members",
			sliderItemSelector: ".our-team__members-item",
			counterSelector: ".our-team__page",
			counterItemClassName: "our-team__page-item",
		});
		this.handleScrollHeader();
		if (document.querySelector(".generate-slider")) {
			new Swiper(".generate-slider", {
				direction: "horizontal",
				loop: true,
				allowTouchMove: false,
				slidesPerView: 1,
				slidesPerGroup: 1,
				longSwipesMs: 500,
				autoplay: {
					delay: 5000,
				},
			});
		}
		AOS.init();
	},
	handleScrollHeader() {
		try {
			const elementScroll = window;
			const headerEl = document.querySelector("header");

			if (elementScroll) {
				elementScroll.addEventListener("scroll", (e) => {
					const offsetTop = window.pageYOffset;

					if (offsetTop === 0) {
						if (headerEl) headerEl.classList.remove("active");
					}
					if (offsetTop > 0) {
						if (headerEl) headerEl.classList.add("active");
					}
				});
			}
		} catch (error) {
			console.log("handleScrollHeader: ", error);
		}
	},
};

document.addEventListener("DOMContentLoaded", () => Modules.onInt());
