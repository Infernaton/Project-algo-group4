const Jimp = require("jimp");

module.exports = {
    average: function(folderPath){
        console.time("Calcul of the average color")
        let allColor = [];
        let red = 0;
        let blue = 0;
        let green = 0;
        let alpha = 0;
        fs.readdir(folderPath, async function(err, files){

            files.forEach(async file => {
                let image = folderPath+"/"+file
                try {
                    let picture = await Jimp.read(image) //Waiting for the reading of the picture to analyse

                    if (picture != null){
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
                        console.log("Average color of '"+folderPath+"' folder :")
                        console.log(averageColor);
                        
                        
                    }
                }catch(e){
                    console.log(' ')
                }
            });
            console.timeEnd("Calcul of the average color")
        });
    }
}