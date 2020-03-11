var Jimp = require('jimp');
const fs = require('fs');

fs.readdirSync('./assets/images/recipes/large').forEach(async file => {
  try {
    const img = await Jimp.read(`./assets/images/recipes/large/${file}`);
    img.resize(400, Jimp.AUTO).quality(60).write(`./assets/images/recipes/thumbnails/${file}`);
  } catch (e) {
    console.log( e );
  }
});
