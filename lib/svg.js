const { Triangle } = require("./triangle");


function createSVG(text, textColor, shape, shapeColor){
    const newTriangle = new Triangle();
    newTriangle.setColor(shapeColor);
    console.log("🚀 ~ file: svg.js:7 ~ createSVG ~ newTriangle:", newTriangle)
    
    

    console.log(text, textColor, shape, shapeColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    

    
</svg>`
}

//     ${text}
// ${textColor}
// ${shape}
// ${shapeColor}



module.exports = { createSVG };