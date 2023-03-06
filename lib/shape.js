const tinycolor = require("tinycolor2")
// const { verifyColor } = require('./color');


class Shape {
    constructor() {
        this.color = '';
    };
    setColor(color) {
        // this.color = verifyColor(color);
        // return verifyColor(color);
        if (tinycolor(color).isValid()) {
            console.log("Valid color");
            this.color = color;
        } else {            
            throw new Error("Color not recognized.")
        };       
    };
    render() {
        throw new Error('Child class must implement a render() method.');
    };
}

module.exports = Shape;