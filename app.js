const base = {
	sections: [...document.querySelectorAll("section")],
	changeBtn: document.querySelector(".changeBtn"),
	save: document.querySelector(".save")
};
let colors = [];
console.log(base.sections);
const changeColors = () => {
	const colorCodes = "0123456789ABCDEF";
	let color1 = "#";
	let color2 = "#";
	let color3 = "#";
	let color4 = "#";
	let color5 = "#";
	let color6 = "#";

	//Query Selectors

	for (var i = 0; i < 6; i++) color1 += colorCodes[Math.floor(Math.random() * 16)];
	for (var i = 0; i < 6; i++) color2 += colorCodes[Math.floor(Math.random() * 16)];
	for (var i = 0; i < 6; i++) color3 += colorCodes[Math.floor(Math.random() * 16)];
	for (var i = 0; i < 6; i++) color4 += colorCodes[Math.floor(Math.random() * 16)];
	for (var i = 0; i < 6; i++) color5 += colorCodes[Math.floor(Math.random() * 16)];
	for (var i = 0; i < 6; i++) color6 += colorCodes[Math.floor(Math.random() * 16)];
	colors = [color1, color2, color3, color4, color5, color6];

	console.log(colors);
	base.sections.forEach((el, index) => {
		el.style.backgroundColor = colors[index];
	});
};
init();
function init() {
	window.addEventListener("load", changeColors);
	base.changeBtn.addEventListener("click", changeColors);
	base.save.addEventListener("click", () => {
		localStorage.setItem("colors", [colors]);
	});
}
