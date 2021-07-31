let table;
let veryUpset;
let upset;
let smiling;
let straightFace;
let happy;
let thumbsUp;

function preload() {
	table = loadTable("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/data.csv", "csv", "header");
	veryUpset = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/1.png")
	upset = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/2.png")
	smiling = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/3.png")
	straightFace = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/4.png")
	happy = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/5.png")
	thumbsup = loadImage("https://raw.githubusercontent.com/computational-mama/saumyaa-image-repo/main/6.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(32)
}

function draw() {
	background('#69c3aa');
	for(let r = 0; r < table.getRowCount(); r++) {
		text(table.get(r, 0), 500, 60+r * 60);

		let num = table.get(r,3)
		let imgin;
		circle(750,60+r * 60,table.get(r,1))
		
		if(num==78){
		imgin = thumbsup
		image(imgin, width / 2+50, r * 60,60,60);
		
		}
		
		if(num==76){
		imgin = happy
		image(imgin, width / 2+50, r * 60,60,60);
		}
		
		if(num==72){
		imgin = smiling
		image(imgin, width / 2+50, r * 60,60,60);
		}
		
		if(num > 70 && num < 73){
		imgin = smiling
		image(imgin, width / 2+50, r * 60,60,60);
		}
		
		if(num > 66 && num < 70){
		imgin = straightFace
		image(imgin, width / 2+50, r * 60,60,60);
		}
		
		if(num > 54 && num < 58){
		imgin = upset
		image(imgin, width / 2+50, r * 60,60,60);
		}
		
		if(num==44){
		imgin = veryUpset
		image(imgin, width / 2+50, r * 60,60,60);
		}
	}

}
