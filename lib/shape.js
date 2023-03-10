// require statemnt for npm responsible for color validation
const tinycolor = require("tinycolor2")

// Define Shape as parent class 
class Shape {
    constructor() {
        this.color = '';
    };
    setColor(color) {
        // Check to see if user entered valid color
        if (tinycolor(color).isValid()) {
            this.color = color;
        } else {            
            throw new Error("Color not recognized.")
        };       
    };
    render() {
        throw new Error('Child class must implement a render() method.');
    };
}

// Define Triangle class
class Triangle extends Shape {    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Define Circle class
class Circle extends Shape {    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// Define Square class
class Square extends Shape {    
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
    }
}

// Define Text class
class Text extends Shape {
    constructor(){
        super()
        this.text = '';        
    }
    setText(text) {        
        if (text.length > 3) {
            throw new Error("Invalid number of characters. Max 3 characters are allowed.")
        } else {
            this.text = text;
        }
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = { Shape, Triangle, Circle, Square, Text };