function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
"use strict";

//? Растянуть текст по ширине блока
function shrinkText() {
	let arrEl = document.querySelectorAll("._span");
	if (arrEl.length > 0) {
		arrEl.forEach(item => {
			let oldInner = item.innerHTML.split("");
			let newInner = oldInner.map(i => `<span>${i}</span>`);
			item.innerHTML = newInner.join("");
		}
		);
	}
}
shrinkText();
//*============================================================================================
//? приравниваем  высоту/ширину разных блоков 

document.addEventListener("DOMContentLoaded", () => {
	const src = document.getElementById("src");
	const end = document.getElementById("end");

	const wooderTitl = document.getElementById("wooder-titl");
	const wooderText = document.getElementById("wodder-text");

	if (src && end) {
		shangStyle();
		window.addEventListener("resize", shangStyle);
		function shangStyle() {
			end.style.height = src.offsetHeight + "px";
		}
	}

	//? выравниваем quality ширину флекса
	if (wooderText && wooderTitl) {
		widthWooder();
		window.addEventListener("resize", widthWooder);
		function widthWooder() {
			//end.style.height = src.offsetHeight + "px";
			wooderText.style.width = wooderTitl.offsetWidth + "px";
		}
	}
});

//*==============================================================================================
//?  выравниваем точки

document.addEventListener("DOMContentLoaded", () => {
	const point = document.getElementById("baner-point");
	const btn = document.getElementById("label-btn");
	const burger = document.querySelector(".burger");

	const banerRight = document.querySelector(".baner__right");
	const headerInfo = document.querySelector(".header__info");
	const headerContent = document.querySelector(".header__content");

	if (point && btn) {
		changPadding();
		window.addEventListener("resize", changPadding);
		function changPadding() {
			let x = btn.offsetHeight / 2;
			point.style.marginTop = x + "px";
		}
	}

	//? выравниваем верхний блок с логотипом
	if (burger && btn) {
		window.addEventListener("resize", changWidth);
		changWidth();
		function changWidth() {
			let a = btn.getBoundingClientRect().left;
			let b = burger.getBoundingClientRect().left;
			let w = window.innerWidth;

			if (w > 479.98) {
				burger.style.flexBasis = (a - b) + "px";
			} else {
				burger.style.flexBasis = "auto";
			}
		}
	}

	//? выравниваем левый блок
	if (banerRight && headerInfo && headerContent) {
		window.addEventListener("resize", rightEdj);
		rightEdj();
		function rightEdj() {
			let x = banerRight.getBoundingClientRect().left;
			let w = window.innerWidth;
			let z = headerContent.getBoundingClientRect().left + headerContent.offsetWidth;
			let d = w - z;
			if (w > 479.98) {
				headerInfo.style.flexBasis = (w - x - d) + "px";
			} else {
				headerInfo.style.flexBasis = "auto";
			}
		}
	}
});

//*=====================================================================================
//? активируем бургер

document.addEventListener("DOMContentLoaded", () => {
	let burgerIcon = document.querySelector(".burger__icon");
	let bodyLock = document.querySelector("body");
	let burgerBody = document.querySelector(".burger__body");
	let wrapper = document.querySelector(".wrapper");



	if (burgerIcon && burgerBody) {
		wrapper.addEventListener("click", (e) => {

			//? Открываем бургер при клике
			if (e.target.closest(".burger__icon")) {
				burgerIcon.classList.toggle("_active");
				bodyLock.classList.toggle("_lock");
				burgerBody.classList.toggle("_active");
				wrapper.classList.toggle("_active");

				//? Закрываем бургер при клике в любом месте
			} else if (!e.target.closest(".burger__body") && !e.target.closest(".burger__icon")) {
				burgerIcon.classList.remove("_active");
				bodyLock.classList.remove("_lock");
				burgerBody.classList.remove("_active");
				wrapper.classList.remove("_active");
			}
		});
	};
});



//*==============================================================================
//? Кастомный селект (рабочий варинат)
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/* For each option in the original select element,
		create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* When an item is clicked, update the original select box,
			and the selected item: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/* When the select box is clicked, close any other select boxes,
		and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
	except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//?============================================================================
//* анимация / добабления класса _active при скроле ==============================


//?============================================================================
//* анимация / добабления класса _active при скроле ==============================
//* ==============================================================

document.addEventListener("DOMContentLoaded", () => {

	let animItem = document.querySelectorAll('[class*="_anim-scroll"]');

	if (animItem.length > 0) {

		// запуск события
		window.addEventListener("scroll", animOnScroll);

		//== вызов уже видимых блоков + задержка анимации ===
		setTimeout(() => { animOnScroll() }, 700);
	}

	function animOnScroll() {

		let animItem = document.querySelectorAll('[class*="_anim-scroll"]');
		const namClas = "_anim-scroll_";

		animItem.forEach(item => {

			// значение задержки из названия класса
			let value = getStartAnim(item, namClas)

			// коэфициэнт регулировки старта анимации по высоте от величины блока. Максимум - это 100 ед ====
			const partItemOffStartAnim = value * 0.01;

			// высота блока
			const heightItem = item.offsetHeight;

			// текущее положение блока на странице
			const heightItemOffTopPage = item.getBoundingClientRect().top + window.pageYOffset;

			// текущая высота окна
			const heightWindow = windowHeight();
			function windowHeight() {
				let height = document.documentElement.clientHeight || document.body.clientHeight;
				return height;
			}

			let pointAnim = heightWindow - heightItem * partItemOffStartAnim;
			if (heightItem > heightWindow) {
				pointAnim = heightWindow - heightWindow * partItemOffStartAnim;
			}

			let startAnim = heightItemOffTopPage - pointAnim;
			let endAnim = heightItemOffTopPage + heightItem;


			if (window.pageYOffset > startAnim && window.pageYOffset < endAnim) {
				item.classList.add("_active");
			} else if (!item.classList.contains("_active_one")) {
				item.classList.remove("_active");
			}

			// получение цифры из названия класса
			function getStartAnim(el, name) {
				//длина названия класса без цифр
				let length = name.length;
				// позиция начала названия класса
				let posName = el.className.indexOf(name);
				// позиция начала искомого числа в названии класса 
				let posNumb = posName + length;
				//получаем число из названия класса (условие - число из 2-х цифр, иначе - изменить цифру ниже)
				let risult = el.className.substr(posNumb, 2);
				return risult;
			}
		});
	}
});

//? навигация к заголовкам ============================================
//* атрибут в элементе <a> data-goto=".class"

if (document.querySelectorAll("a[data-goto]") != null) {
	document.querySelectorAll("a[data-goto]").forEach(item => {
		item.addEventListener("click", onMenuLinkClick);
	});
}

function onMenuLinkClick(e) {
	let menuLink = e.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		let nameClass = menuLink.dataset.goto;
		let MoveBlock = document.querySelector(nameClass);
		let boxMoveBlock = MoveBlock.getBoundingClientRect();
		let upMoveBlock = boxMoveBlock.top + window.pageYOffset - document.querySelector(".header").offsetHeight;
		e.preventDefault();

		if (document.querySelector(".burger__icon").classList.contains("_active")) {
			let menuIcon = document.querySelector(".burger__icon");
			let bodyLock = document.querySelector("body");
			let menuBody = document.querySelector(".burger__body");
			menuIcon.classList.remove("_active");
			bodyLock.classList.remove("_lock");
			menuBody.classList.remove("_active");
		}
		window.scrollTo({
			top: upMoveBlock,
			behavior: "smooth"
		});
		e.preventDefault();
	}
}
//* ==============================================================
//?============ затемняем меню======================
document.addEventListener("DOMContentLoaded", () => {

	let container = document.querySelector(".container");
	if (container) {
		window.addEventListener("scroll", function () {
			let topOffHeight = window.pageYOffset;

			if (topOffHeight > 110) {
				container.classList.add("container_mini");
			} else {

				container.classList.remove("container_mini");
			}

		});
	}
});
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();


