const Modules = {
	onInt() {
		this.handleScrollHeader();
	},
	handleScrollHeader() {
		try {
			const elementScroll = document.querySelector("body");
			const headerEl = document.querySelector("header");
			if (elementScroll) {
				elementScroll.onscroll = () => {
					const offsetTop = window.pageYOffset;
					if (offsetTop === 0) headerEl.classList.remove("active");
					if (offsetTop > 0) headerEl.classList.add("active");
				};
			}
		} catch (error) {
			console.log("handleScrollHeader: ", error)
		}
	}
}

document.addEventListener("DOMContentLoaded", () => Modules.onInt());
