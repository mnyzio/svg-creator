const { Triangle } = require('../triangle.js');

// Testing suite for Shape
describe('Shape', () => {
    describe('triangle', () => {
        it('should create triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})