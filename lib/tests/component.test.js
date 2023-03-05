const Component = require('../component.js');

// Testing suite for Shape
describe('Component', () => {
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const shape = new Component();
            const cb = () => shape.setColor("btlue");
            const err = new Error('Color keyword not recognized.')
            expect(cb).toThrowError(err);
        })
    })
})