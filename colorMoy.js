const Jimp = require("jimp");
const DepreciatedJimp = require("jimp");
const { createBrotliCompress } = require("zlib");
let file = require("./modiFile")

module.exports = {
    average: function(filePath){
        let data =  file.read(filePath, function(err, data){
            let allColor = [];
            let red = 0;
            let blue = 0;
            let green = 0;
            let alpha = 0;
            let currentColor;
            let averageColor;
            for(i=0; i < data.length; i++){
                let image = data[i].poster;
                if (image!= null){
                    let picture = new Jimp(image,function(err,image){
                        let p_length = picture.bitmap.width;
                        let p_height = picture.bitmap.height;
                        for(x=0; x<p_length;x++){
                            for(y=0; y<p_height; y++){
                                currentColor = Jimp.intToRGBA(picture.getPixelColor(x,y));
                                allColor.push(currentColor);
                                red = red + currentColor.r;
                                green = green + currentColor.g;
                                blue =blue + currentColor.b;
                                alpha =alpha + currentColor.a;
                            }
                        }
                        
                        //Calcul of the average color
                        averageColor = [red/allColor.length, green/allColor.length, blue/allColor.length, alpha/allColor.length];
                        console.log(averageColor);
                    });
                    
                }
            }
        });
    }
}