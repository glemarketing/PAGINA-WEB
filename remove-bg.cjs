const Jimp = require('jimp');

Jimp.read('public/logo-gle-light.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Umbral para color blanco/claro
      if (red > 200 && green > 200 && blue > 200) {
        // Reducir la opacidad del blanco para que sea transparente
        this.bitmap.data[idx + 3] = 0; 
      }
    }); // Guardamos como un nuevo archivo
    return image.writeAsync('public/logo-transparente.png');
  })
  .then(() => {
    console.log("Imagen procesada y guardada como logo-transparente.png");
  })
  .catch(err => {
    console.error("Error procesando imagen:", err);
  });
