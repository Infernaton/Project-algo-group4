const Jimp = require("jimp");
const DepreciatedJimp = require("jimp");
let file = require("./modiFile")

module.exports = {
    average: function(filePath){
        let data =  file.read(filePath, function(err, data){
            let allColor = [];
            for(i=0; i < data.length; i++){
                let picture = data[i].poster;
                Jimp.read(picture,function(err,image){
                    let p_length = image.bitmap.width;
                    let p_height = image.bitmap.height;
                    for(x=0; x<p_length;x++){
                        for(y=0; y<p_height; y++){
                            currentColor = image.getPixelColor(x,y)
                            allColor.push(currentColor);
                        }
                    }
                });
            }
            let red = 0;
            let blue = 0;
            let green = 0;
            let alpha = 0;
            for(i=0;i< allColor.length; i++){
                //Calcul of the average color
                red =+ allColor[i][0];
                green =+ allColor[i][1];
                blue =+ allColor[i][2];
                alpha =+ allColor[i][3];
                let averageColor = [red/allColor.length, green/allColor.length, blue/allColor.length, alpha/allColor.length];
            }
            console.log(averageColor);
        });
    }
}