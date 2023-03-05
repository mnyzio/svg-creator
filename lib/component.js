const { verifyColor } = require('./color');

class Component {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = verifyColor(color);
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Component;