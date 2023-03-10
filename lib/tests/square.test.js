const { Square } = require('../shape.js');

// Testing suite for Square
describe('Square', () => {
    describe('render', () => {
        it('should render svg code for square with blue fill', () => {
            const square = new Square();
            square.setColor("blue")
            expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const square = new Square();
            const cb = () => square.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const square = new Square();
            const cb = () => square.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const square = new Square();
            square.setColor("#545458");
            expect(square.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const square = new Square();
            square.setColor("white");
            expect(square.color).toEqual('white');        
        });
    });
})










