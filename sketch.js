let table;
let small;
let medium;
let large;

function preload() {
	table = loadTable("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/data.csv", "csv", "header");
	small = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/small.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(220);
	for(let r = 0; r < table.getRowCount(); r++) {
		text(table.get(r, 0), width / 2, r * 40);
		image(small, width / 2, r * 40, table.get(r, 1) * 2, table.get(r, 1));
	}

}
