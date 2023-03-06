const { Triangle } = require('../triangle.js');

// Testing suite for Shape
describe('Triangle', () => {
    describe('triangle', () => {
        it('should create triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const shape = new Triangle();
            const cb = () => shape.setColor("btlue");
            const err = new Error('Color not recognized.')
            expect(cb).toThrowError(err);
        })
    })
})