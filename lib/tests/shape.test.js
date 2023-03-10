const { Shape, Triangle, Circle, Square, Text } = require('../shape.js');

// Testing suite for Shape
describe('Shape', () => {
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const shape = new Shape();
            const cb = () => shape.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const shape = new Shape();
            const cb = () => shape.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const shape = new Shape();
            shape.setColor("#545458");
            expect(shape.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const shape = new Shape();
            shape.setColor("white");
            expect(shape.color).toEqual('white');        
        });
    });

    describe('render', () => {
        it('should throw error to the user', () => {
            const shape = new Shape();
            const cb = () => shape.render();
            const err = new Error('Child class must implement a render() method.');
            expect(cb).toThrowError(err);
        });
    });
});