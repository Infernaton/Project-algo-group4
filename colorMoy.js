const Jimp = require("jimp");
const DepreciatedJimp = require("jimp");
const { createBrotliCompress } = require("zlib");
let file = require("./modiFile")

module.exports = {
    average: function(filePath){
        file.read(filePath, async function(err, data){
            if (data.length <= 170){
                //If the File exceed that number it will goes to an out of memory error.
                let allColor = [];
                let red = 0;
                let blue = 0;
                let green = 0;
                let alpha = 0;
                
                for(i=0; i < data.length;i++){
                    let image = data[i].poster;
                    // Verification if there is a picture to look at
                    if (image!= null){
                        let picture = await Jimp.read(image) //Waiting for the reading of the picture to analyse
                        
                        let p_length = picture.bitmap.width;    //Size of the picture
                        let p_height = picture.bitmap.height;

                        for(x=0; x<p_length;x++){
                            for(y=0; y<p_height; y++){

                                let currentColor = Jimp.intToRGBA(picture.getPixelColor(x,y)); //Pixel by Pixel, we know the RGBA color of it
                                allColor.push(currentColor); //We stock, after, the color find in to know how many color we find 
                                
                                //The total of the color to make after a average score
                                red = red + currentColor.r;
                                green = green + currentColor.g;
                                blue =blue + currentColor.b;
                                alpha =alpha + currentColor.a;
                            }
                        }
                        //Calcul of the average color
                        let averageColor = [red/allColor.length, green/allColor.length, blue/allColor.length, alpha/allColor.length];
                        console.log(averageColor);
                    }
 
                }
            }else{
                console.log("File has too much data in it, Out of Memory")
            }

        });
    }
}