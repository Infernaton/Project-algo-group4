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
                        }
                    }
                });
            }
        });
    }
}