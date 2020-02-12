const sharp = require('sharp')
const fs = require('fs')

const images = fs.readdirSync('./images');

const transformStream = sharp()
    .resize(124, 124)
    .threshold()

for(const image of images) {
	const imageBuffer = fs.readFileSync(`./images/${image}`);
	sharp(imageBuffer)
		.resize(124, 124)
		.threshold()
		.toFile(`./small/${image}`)
}
