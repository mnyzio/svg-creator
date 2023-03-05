

function createSVG(text, textColor, shape, shapeColor){
    console.log(text, textColor, shape, shapeColor);
    return `${text}
${textColor}
${shape}
${shapeColor}
`
}

module.exports = { createSVG };