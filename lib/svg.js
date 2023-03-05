const { Triangle } = require("./triangle");


function createSVG(text, textColor, shape, shapeColor){
    const newTriangle = new Triangle();
    newTriangle.setColor(shapeColor);
    console.log("🚀 ~ file: svg.js:7 ~ createSVG ~ newTriangle:", newTriangle)
    
    

    console.log(text, textColor, shape, shapeColor);
    return `${text}
${textColor}
${shape}
${shapeColor}
`
}

module.exports = { createSVG };